import { component$, Slot } from "@builder.io/qwik";
import { type RequestHandler, type DocumentHead } from "@builder.io/qwik-city";

import TheNavbar from "~/components/common/TheNavbar";
import TheFooter from "~/components/common/TheFooter";
import { APP, tagLine } from "~/constants";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <TheNavbar />
      <main class="flex-1">
        <Slot />
      </main>
      <TheFooter />
    </>
  );
});

export const head: DocumentHead = {
  title: APP.name,
  meta: [
    {
      name: "description",
      content: tagLine,
    },
    {
      property: "og:image",
      content: APP.DOMAIN + "/og-image",
    },
  ],
  links: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/webmanifest",
    },
  ],
};
