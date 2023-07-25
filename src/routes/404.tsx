import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div
      id="404Page"
      class="flex flex-col justify-center items-center relative  min-h-[80vh] md:min-h-[50vh] lg:mb-[20vh] "
    >
      <h1 class="text-[10rem]  font-bold leading-none">404</h1>
      <p class="text-4xl md:text-5xl mb-6">Page Not Found</p>
      <Link href="/" class="px-5  py-2 bg-white/5 shadow">
        Go back to home
      </Link>

      <svg
        class="rings absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50  hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="530"
        height="129"
      >
        <g fill="none" fill-rule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5"></ellipse>
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5"></ellipse>
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5"></ellipse>
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5"></ellipse>
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5"></ellipse>
        </g>
      </svg>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Not Found",
};
