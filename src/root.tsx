import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import "~/global.css";
import Head from "~/components/common/Head";
// import { QwikPartytown } from "~/components/partytown";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        {/* <QwikPartytown forward={["_paq"]} /> */}
        <link rel="manifest" href="/manifest.json" />
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

        <script
          dangerouslySetInnerHTML={`
           var _paq = window._paq = window._paq || []; 
          _paq.push(['trackPageView']);
          _paq.push(['disableCookies']);          
          _paq.push(['enableLinkTracking']);
          _paq.push(['enableHeartBeatTimer']);
          _paq.push(['trackVisibleContentImpressions', true, 500]);
          (function() {
            var u="//a.vfshera.com/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '3']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
          `}
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
