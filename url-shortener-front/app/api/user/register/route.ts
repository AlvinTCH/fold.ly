import { NextRequest, NextResponse } from "next/server";

import type { UserAuthResponse } from "@/src/entities";

export async function POST(request: NextRequest) {
  try {
    const { username, password, name } = await request.json();

    // 1. Call your actual backend API to authenticate
    const backendResponse = await fetch(
      `${process.env.BACKEND_URL}/api/v1/user/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, name }),
      },
    );

    if (backendResponse.status === 204) {
      return new NextResponse(null, {
        status: backendResponse.status
      });
    }

    if (!backendResponse.ok) {
      const upstreamBody = backendResponse.body ?? (await backendResponse.text());
      return new NextResponse(upstreamBody as BodyInit | null, {
        status: backendResponse.status
      });
    }
    
    const { token, profile }: UserAuthResponse = await backendResponse.json();
    const { access_token, expiry } = token;
    const { profile_pic } = profile;

    const response = NextResponse.json({
      expiry: expiry,
      name: name,
      profile_pic: profile_pic,
    });

    response.cookies?.set("auth", access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(expiry),
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
