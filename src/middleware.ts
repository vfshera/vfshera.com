import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(({ request, url }, next) => {
  //   if (url.pathname.startsWith("/api")) {
  //     console.log("API REQ");
  //     console.log(request);
  //     console.log(url);
  //   }

  return next();
});
