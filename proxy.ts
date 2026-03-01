import { NextRequest, NextResponse } from "next/server";
import { SIGN_IN_URL, SIGN_UP_URL } from "./constant/route";

const publicRoutes = new Set([SIGN_IN_URL, SIGN_UP_URL])

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isPublicRoute = publicRoutes.has(pathname)
  const isAuthRoute = pathname.startsWith('/auth')


  const isAuthenticated = true
  const token = null

  // 🔄 If user is authenticated and trying to access auth routes, redirect to dashboard
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  // ✅ If it's a public route, allow access regardless of token
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // 🔐 Otherwise, apply auth rules
  if (!isAuthenticated) {
    const response = NextResponse.redirect(new URL('/auth/sign-in', req.nextUrl))
    response.cookies.set('next-auth.session-token', '', { maxAge: 0 })
    return response
  }

  return NextResponse.next()
}

// ⬇️ This config ensures middleware only runs on relevant paths
export const config = {
  matcher: [
    /*
      Only apply middleware to pages, not API or static files
    */
    '/((?!api|_next|favicon.ico|.*\\.).*)',
  ],
}
