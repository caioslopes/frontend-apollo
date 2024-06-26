import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");
  const spotifyAccessToken = req.cookies.get("spotify_accessToken");

  if (!accessToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/owner/:path*", "/user/:path*"],
};
