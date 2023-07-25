import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type RequestHandler, type DocumentHead } from "@builder.io/qwik-city";

import TheNavbar from "@/components/common/TheNavbar";
import TheFooter from "@/components/common/TheFooter";
import { APP, tagLine } from "@/data";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

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
      name: "og:image",
      content: "/og.webp",
    },
  ],
};
