import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const ownerToken = req.cookies.get("ownerToken");
  const userToken = req.cookies.get("userToken");

  if (!ownerToken && !userToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/owner/:path*", "/user/:path*"],
};
