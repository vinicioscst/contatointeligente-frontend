import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  const token = request.cookies.get("auth_token")?.value;

  const loginURL = new URL("/login", request.url);
  const dashboardURL = new URL("/dashboard", request.url);

  if (!token) {
    if (
      request.nextUrl.pathname === "/" ||
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register"
    ) {
      return NextResponse.next();
    }

    return NextResponse.redirect(loginURL);
  }

  if (
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register"
  ) {
    return NextResponse.redirect(dashboardURL);
  }
};

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*"],
};

export default middleware;
