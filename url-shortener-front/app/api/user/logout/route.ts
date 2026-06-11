import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const bearerToken = request.cookies.get("auth")?.value;
    const backendResponse = await fetch(
      `${process.env.BACKEND_URL}/api/v1/user/logout`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(bearerToken
            ? {
                Authorization: `Bearer ${bearerToken}`,
              }
            : {}),
        },
      },
    );

    if (!backendResponse.ok) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const response = NextResponse.json({
      success: true,
    });

    response.cookies?.delete("auth");
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
