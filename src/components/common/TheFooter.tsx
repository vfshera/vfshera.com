import { APP } from "~/constants";
import { component$ } from "@builder.io/qwik";
import Socials from "./Socials";

export default component$(() => {
  return (
    <footer class="footer bg-slate-800 pt-10 pb-[60px] sm:pt-[30px] sm:pb-10 lg:pt-12 lg:pb-[92px]">
      <h2 class="visually-hidden">Footer</h2>
      <div class="wrapper">
        <nav class="flex flex-wrap justify-center items-center gap-y-5 gap-x-6 sm:justify-start sm:text-left sm:gap-8 lg:pr-[30px]">
          <h2 class="visually-hidden">Navigation</h2>
          <a
            href="/"
            class="text-white leading-none no-underline flex-grow flex-shrink-0 text-center sm:text-left basis-full lg:mr-auto md:basis-[auto] lg:flex-grow-0 lg:flex-shrink text-[clamp(1.5rem,1.02rem+2.04vw,2rem)]"
          >
            {APP.logoText}
            <span class="text-[.8em]"> &copy; {new Date().getFullYear()}</span>
            <span class="visually-hidden">(to home page)</span>
          </a>

          <Socials />
        </nav>
      </div>
    </footer>
  );
});
