import type { RequestHandler } from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";

export const onRequest: RequestHandler = (event) => {
  if (isDev) return;

  const csp = [
    `default-src 'self' `,
    `form-action 'self'`,
    `font-src 'self' fonts.googleapis.com fonts.gstatic.com`,
    `frame-ancestors 'self'`,
    `img-src 'self'  data:`,
    `script-src 'self' https: 'unsafe-inline'`,
    `script-src-attr 'none'`,
    `style-src 'self' https: 'unsafe-inline'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `upgrade-insecure-requests`,
  ];

  event.headers.set("Content-Security-Policy", csp.join("; "));
};
