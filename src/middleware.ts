import { defineMiddleware } from "astro/middleware";
import { APP } from "./data";

export const onRequest = defineMiddleware(({ url }, next) => {
  if (url.pathname.startsWith("/api")) {
    if (url.origin != APP.DOMAIN) {
      return new Response(JSON.stringify({}), { status: 200 });
    }
  }

  return next();
});
