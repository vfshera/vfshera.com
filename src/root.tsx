import { component$, isDev } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import "@fontsource-variable/space-grotesk/wght.css";
import "~/styles/global.css";
import Head from "~/components/Head";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <Head />

        <ServiceWorkerRegister />
      </head>
      <body
        lang="en"
        class="flex min-h-full flex-col bg-linear-to-br from-slate-800 via-slate-900 to-neutral-600 bg-fixed font-space-grotesk text-lg leading-6 text-white"
      >
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
