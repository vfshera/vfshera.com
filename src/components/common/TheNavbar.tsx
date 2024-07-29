import { APP } from "~/data";
import { component$ } from "@builder.io/qwik";
import Socials from "./Socials";

export default component$(() => {
  return (
    <header class="relative z-[1] mt-5 sm:mt-[30px] lg:mt-10 lg:mb-[127px]">
      <h2 class="visually-hidden">Header</h2>
      <div class="wrapper">
        <nav class="flex flex-wrap justify-center items-center gap-y-5 gap-x-6 sm:justify-start sm:text-left sm:gap-8 lg:pr-[30px]">
          <h2 class="visually-hidden">Navigation</h2>
          <a
            href="/"
            class="text-white leading-none no-underline flex-grow text-center sm:text-left flex-shrink-0 basis-full md:mr-auto md:basis-[auto] lg:flex-grow-0 lg:flex-shrink text-[clamp(1.5rem,1.02rem+2.04vw,2rem)]"
          >
            {APP.logoText}
            <span class="visually-hidden">(to home page)</span>
          </a>
          <Socials />
        </nav>
      </div>
    </header>
  );
});
