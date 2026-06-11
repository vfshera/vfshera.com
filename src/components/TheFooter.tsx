import Socials from "./Socials";
import { component$ } from "@builder.io/qwik";
import { APP } from "~/constants";

export default component$(() => {
  return (
    <footer class="footer bg-slate-800 pt-10 pb-15 sm:pt-7.5 sm:pb-10 lg:pt-12 lg:pb-23">
      <h2 class="visually-hidden">Footer</h2>
      <div class="wrapper">
        <nav class="flex flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:justify-start sm:gap-8 sm:text-left lg:pr-7.5">
          <h2 class="visually-hidden">Navigation</h2>
          <a
            href="/"
            class="shrink-0 grow basis-full text-center text-[clamp(1.5rem,1.02rem+2.04vw,2rem)] leading-none text-white no-underline sm:text-left md:basis-auto lg:mr-auto lg:shrink lg:grow-0"
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
