import { NextRequest } from "next/server";
import { proxyRequest } from "@/src/server/proxy";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const urlId = searchParams.get("url_id");

  return proxyRequest(request, `/api/v1/data/analytics?url_id=${urlId}`);
}
