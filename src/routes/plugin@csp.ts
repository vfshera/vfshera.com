import type { RequestHandler } from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";

export const onRequest: RequestHandler = (event) => {
  if (isDev) return;
  const nonce = Date.now().toString(36);
  event.sharedMap.set("@nonce", nonce);

  const csp = [
    `default-src 'self' `,
    `form-action 'self'`,
    `font-src 'self'  fonts.googleapis.com fonts.gstatic.com`,
    `frame-ancestors 'self'`,
    `img-src 'self'  data:`,
    `script-src 'self' 'unsafe-inline' https: 'nonce-${nonce}' 'strict-dynamic'`,
    `script-src-attr 'none'`,
    `style-src 'self' https: 'unsafe-inline'`,
    `frame-src 'self' 'nonce-${nonce}'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `upgrade-insecure-requests`,
  ];

  event.headers.set("Content-Security-Policy", csp.join("; "));
};

// font-src 'self' fonts.googleapis.com fonts.gstatic.com;default-src 'self';base-uri 'self';form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
