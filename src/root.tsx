import { component$, isDev } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import "~/styles/global.css";
import Head from "~/components/common/Head";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />

        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <ServiceWorkerRegister />
      </head>
      <body
        lang="en"
        class="bg-gradient-to-br min-h-full flex flex-col from-slate-800 font-space-grotesk text-lg leading-6 text-white via-slate-900 to-neutral-600 bg-fixed"
      >
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
