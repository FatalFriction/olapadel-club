import { NextRequest, NextResponse } from "next/server";

const BOT_UA = /(googlebot|adsbot|bingbot|duckduckbot|baiduspider|yandexbot)/i;
const MOBILE_UA = /(android|iphone|ipad|ipod|blackberry|iemobile|opera mini)/i;

export function proxy(req: NextRequest) {
  const ua = req.headers.get("user-agent")?.toLowerCase() || "";
  const { pathname } = req.nextUrl;

  if (BOT_UA.test(ua)) return NextResponse.next();

  const isMobile = MOBILE_UA.test(ua);

  if (isMobile && !pathname.startsWith("/mobile")) {
    const url = req.nextUrl.clone();
    url.pathname = "/mobile";
    return NextResponse.redirect(url);
  }

  if (!isMobile && pathname.startsWith("/mobile")) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml|api).*)",
  ],
};
