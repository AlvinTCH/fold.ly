import { NextRequest } from "next/server";
import { proxyRequest } from "@/src/server/proxy";

export async function GET(request: NextRequest) {
  return proxyRequest(request, "/api/v1/data/urls");
}
