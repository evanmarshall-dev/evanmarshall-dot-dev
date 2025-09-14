import type { NextConfig } from "next";

// Use nonces or hashes for inline scripts/styles.
// The CSP below contains a '<NONCE>' placeholder; you must replace it with a per-request nonce when sending the header (via middleware or a custom server) and add the same nonce to inline tags.
// Update ALLOWED_CONNECT_SRC to include any third-party endpoints your app requires.
const ALLOWED_CONNECT_SRC = [
  "'self'",
  "https://api.example.com",
  "https://sentry.io",
  "https://www.google-analytics.com",
];

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'nonce-<NONCE>'",
  "style-src 'self' 'nonce-<NONCE>'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src ${ALLOWED_CONNECT_SRC.join(" ")}`,
  "object-src 'none'",
  "base-uri 'self'",
  // Prefer frame-ancestors for modern browsers; set to 'none' to disallow any framing.
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    const isProduction =
      process.env.NODE_ENV === "production" ||
      process.env.VERCEL_ENV === "production";

    // CSP is injected per-request in `middleware.ts` (includes a per-request nonce).
    const headers = [
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      // Keep X-Frame-Options for older browsers, but rely on frame-ancestors for modern control.
      { key: "X-Frame-Options", value: "DENY" },
      // X-XSS-Protection is deprecated; set to '0' to disable legacy XSS filters and document intent.
      { key: "X-XSS-Protection", value: "0" },
    ];

    if (isProduction) {
      headers.push({
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains; preload",
      });
    }

    return [
      {
        source: "/:path*",
        headers,
      },
    ];
  },
};

export default nextConfig;
