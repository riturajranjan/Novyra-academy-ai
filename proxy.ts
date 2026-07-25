import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";

// Authenticate-only gating. Onboarding-completion redirects (which step is
// incomplete, or bouncing a completed user away from onboarding) require a
// DB read and live in the (onboarding)/dashboard layouts instead, since
// Prisma can't run in the proxy/edge runtime.
const PUBLIC_ROUTES = new Set(["/", "/login", "/signin", "/forgot-password", "/reset-password"]);

const proxy = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = Boolean(req.auth);
  const isPublicRoute = PUBLIC_ROUTES.has(nextUrl.pathname);

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  if (isLoggedIn && (nextUrl.pathname === "/login" || nextUrl.pathname === "/signin")) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
});

export default proxy;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|svg|ico)$).*)"],
};
