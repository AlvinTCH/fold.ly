import { NextRequest } from "next/server";
import { proxyRequest } from "@/src/server/proxy";

export async function POST(request: NextRequest) {
  return proxyRequest(request, "/api/v1/subscription/subscribe");
}
