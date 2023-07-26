import { component$, useServerData } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import "@/global.css";
import Head from "@/components/common/Head";

export default component$(() => {
  const nonce = useServerData<string | undefined>("nonce");
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <Head />
        <ServiceWorkerRegister nonce={nonce} />
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
