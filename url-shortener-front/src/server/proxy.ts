/**
 * @module proxy
 * Shared BFF proxy utility for Next.js API route handlers.
 *
 * Eliminates the copy-paste pattern repeated across `route.ts` files:
 *   1. Check whether `BACKEND_URL` is configured
 *   2. Build the upstream URL, forwarding selected query params
 *   3. Proxy the request (method + body + session/CSRF headers)
 *   4. Forward useful response headers (caching, correlation IDs)
 *   5. Apply an upstream timeout via `AbortSignal`
 *   6. Return 502 on network failure / timeout
 *   7. Return `null` when no backend is configured (caller falls back to seed data)
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Default upstream timeout in milliseconds. */
const DEFAULT_TIMEOUT_MS = 15_000;

/**
 * Response headers we forward verbatim from the upstream backend.
 * Limited to the safe, useful set: caching, correlation, content negotiation.
 * `content-type` is always forwarded (with a JSON default).
 */
const FORWARDED_RESPONSE_HEADERS = [
  "cache-control",
  "etag",
  "vary",
  "location",
  "x-request-id",
  "x-correlation-id",
];

function readCookieValue(
  cookieHeader: string | null,
  name: string,
): string | null {
  if (!cookieHeader) return null;
  const pairs = cookieHeader.split("");
  for (const pair of pairs) {
    const [rawKey, ...rest] = pair.trim().split("=");
    if (rawKey !== name) continue;
    const value = rest.join("=");
    return value ? decodeURIComponent(value) : "";
  }
  return null;
}

export interface ProxyOptions {
  /** Query parameter names to forward from the incoming request to the upstream URL. */
  forwardParams?: string[];
  /** Override the default upstream timeout (ms). */
  timeoutMs?: number;
}

/**
 * Combines the incoming request's signal (e.g. client disconnect) with a
 * timeout signal so the upstream fetch is aborted on either condition.
 */
function combineSignals(incoming: AbortSignal, timeoutMs: number): AbortSignal {
  const controller = new AbortController();
  const onAbort = () => controller.abort();
  incoming.addEventListener("abort", onAbort, { once: true });
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  controller.signal.addEventListener("abort", () => clearTimeout(timer), {
    once: true,
  });
  return controller.signal;
}

/**
 * Proxies a Next.js request to the configured backend API.
 *
 * Reads `BACKEND_URL` lazily (inside the function) so the value
 * can be overridden per-test via `process.env`.
 *
 * @param backendPath - Path appended to `BACKEND_URL` (e.g. `"/agents"`).
 * @param request - The incoming Next.js request.
 * @returns
 *   - The proxied `NextResponse` when a backend is configured (including 4xx/5xx from upstream).
 *   - A `502` `NextResponse` if the upstream request throws (network error / timeout).
 *   - `null` when `BACKEND_URL` is not set — the caller should fall back to seed data.
 *
 * @example
 * ```ts
 * export async function GET(request: NextRequest) {
 *   const proxied = await proxyRequest("/agents", request, { forwardParams: ["limit", "offset"] })
 *   if (proxied) return proxied
 *   return NextResponse.json({ data: getAgents() })
 * }
 * ```
 */
export async function proxyRequest(
  request: NextRequest,
  backendPath: string,
): Promise<NextResponse> {
  const backend = process.env.BACKEND_URL || "http://localhost:8000";
  if (!backend)
    return NextResponse.json(
      {
        detail: "Backend URL undefinded",
      },
      { status: 400 },
    );

  try {
    const url = new URL(`${backend}${backendPath}`);

    const hasBody =
      request.method !== "GET" &&
      request.method !== "HEAD" &&
      request.method !== "DELETE";
    const body = hasBody ? await request.text() : undefined;

    const headers = new Headers();
    const incomingContentType = request.headers.get("content-type");
    if (hasBody && incomingContentType) {
      headers.set("Content-Type", incomingContentType);
    } else if (hasBody && body) {
      headers.set("Content-Type", "application/json");
    }
    const cookie = request.headers.get("cookie");
    if (cookie) headers.set("cookie", cookie);
    const csrfFromHeader =
      request.headers.get("x-csrf-token") ??
      request.headers.get("x-xsrf-token");
    const csrfFromCookie = readCookieValue(cookie, "XSRF-TOKEN");
    const csrfToken = csrfFromHeader ?? csrfFromCookie;
    if (csrfToken && request.method !== "GET" && request.method !== "HEAD") {
      // Forward both common conventions so different backend frameworks validate CSRF correctly.
      headers.set("x-csrf-token", csrfToken);
      headers.set("x-xsrf-token", csrfToken);
    }
    const reqId = request.headers.get("x-request-id");
    if (reqId) headers.set("x-request-id", reqId);
    const origin = request.headers.get("origin");
    if (origin) headers.set("origin", origin);
    const referer = request.headers.get("referer");
    if (referer) headers.set("referer", referer);
    const host = request.headers.get("host");
    if (host) headers.set("x-forwarded-host", host);
    headers.set("x-forwarded-proto", request.nextUrl.protocol.replace(":", ""));
    const forwardedPort =
      request.nextUrl.port ||
      (request.nextUrl.protocol === "https:" ? "443" : "80");
    headers.set("x-forwarded-port", forwardedPort);

    const bearerToken = request.cookies?.get("auth")?.value;
    if (bearerToken) {
      headers.set("Authorization", `Bearer ${bearerToken}`);
    }

    const signal = combineSignals(request.signal, DEFAULT_TIMEOUT_MS);

    const res = await fetch(url.toString(), {
      method: request.method,
      headers,
      body,
      signal,
      redirect: "manual",
    });

    // Build response headers: for 204 No Content, omit Content-Type and body.
    // For other responses, always include content-type and forward safe headers.
    const responseHeaders = new Headers();
    if (res.status !== 204) {
      responseHeaders.set(
        "Content-Type",
        res.headers.get("content-type") ?? "application/json",
      );
    }

    const headerWithSetCookie = res.headers as Headers & {
      getSetCookie?: () => string[];
    };
    const setCookies = headerWithSetCookie.getSetCookie?.() ?? [];
    if (setCookies.length > 0) {
      for (const setCookie of setCookies) {
        responseHeaders.append("set-cookie", setCookie);
      }
    } else {
      const singleSetCookie = res.headers.get("set-cookie");
      if (singleSetCookie !== null)
        responseHeaders.append("set-cookie", singleSetCookie);
    }

    for (const name of FORWARDED_RESPONSE_HEADERS) {
      const value = res.headers.get(name);
      if (value !== null) responseHeaders.set(name, value);
    }

    // For 204 No Content, return immediately with no body (don't try to read response)
    if (res.status === 204) {
      return new NextResponse(null, {
        status: res.status,
        headers: responseHeaders,
      });
    }

    // Stream the upstream body back to the client when available fall back
    // to buffering for environments (or status codes) without a stream body.
    const upstreamBody = res.body ?? (await res.text());
    return new NextResponse(upstreamBody as BodyInit | null, {
      status: res.status,
      headers: responseHeaders,
    });
  } catch {
    return NextResponse.json(
      { detail: "Backend API unreachable" },
      { status: 502 },
    );
  }
}
