import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware to generate a per-request CSP nonce and set it as a cookie
// The page's server components can read this cookie via next/headers cookies() helper
// and add it to inline scripts/styles as the nonce attribute.

function generateNonce(length = 16) {
  // simple base64 nonce
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  try {
    const nonce = generateNonce(16);

    // Set a cookie with the nonce - httpOnly=false so server components can read it via next/headers
    // Cookie is short lived and used only for this request. We set SameSite=Lax to allow navigation.
    res.cookies.set({
      name: "__csp_nonce",
      value: nonce,
      httpOnly: false,
      sameSite: "lax",
      path: "/",
    });
    // Build a CSP that includes the generated nonce. Keep this in sync with next.config.ts ALLOWED_CONNECT_SRC.
    const connectSrc = [
      "'self'",
      "https://api.example.com",
      "https://sentry.io",
      "https://www.google-analytics.com",
    ].join(" ");
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}'`,
      `style-src 'self' 'nonce-${nonce}'`,
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      `connect-src ${connectSrc}`,
      "object-src 'none'",
      "base-uri 'self'",
      "frame-ancestors 'none'",
    ].join("; ");

    // Set the per-response CSP header including the nonce.
    res.headers.set("Content-Security-Policy", csp);
  } catch (e) {
    // If crypto is not available (older runtimes), skip nonce generation.
    // Next middleware on Vercel Edge runtime provides Web Crypto APIs.
    // No-op
  }

  return res;
}

export const config = {
  matcher: "/:path*",
};
