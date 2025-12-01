import { NextRequest, NextResponse } from "next/server";

const BOT_UA = /(googlebot|adsbot|bingbot|duckduckbot|baiduspider|yandexbot)/i;
const MOBILE_UA = /(android|iphone|ipad|ipod|blackberry|iemobile|opera mini)/i;

export function proxy(req: NextRequest) {
  const ua = req.headers.get("user-agent")?.toLowerCase() || "";
  const { pathname } = req.nextUrl;

  // 🛑 1. Skip ALL Next.js internal assets
  if (pathname.startsWith("/_next")) return NextResponse.next();
  if (pathname.startsWith("/static")) return NextResponse.next();

  // 🛑 2. Skip ALL public images (png, jpg, svg, webp)
  if (pathname.match(/\.(png|jpg|jpeg|svg|webp|gif|ico)$/i)) {
    return NextResponse.next();
  }

  // Allow crawlers normally
  if (BOT_UA.test(ua)) return NextResponse.next();

  const isMobile = MOBILE_UA.test(ua);

  // Redirect desktop → homepage if accessing /mobile
  if (!isMobile && pathname.startsWith("/mobile")) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Redirect mobile → /mobile (except already inside)
  if (isMobile && !pathname.startsWith("/mobile")) {
    const url = req.nextUrl.clone();
    url.pathname = "/mobile";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)",
  ],
};