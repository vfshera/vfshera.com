import { component$ } from "@builder.io/qwik";
import { APP, tagLine } from "~/constants";

export default component$(() => {
  return (
    <section title="Hero" class="hero sm:relative sm:-mt-15.5 lg:mt-0">
      <div class="wrapper bottom-border pb-20 sm:pb-15 lg:relative lg:pb-25">
        <div class="flex items-center sm:items-start">
          <header class="relative mt-37.5 text-center sm:z-1 sm:mt-28 sm:-mr-7.5 sm:flex-1 sm:text-left lg:m-0 lg:basis-[58vw]">
            <h1 class="mb-6 text-[clamp(2.2rem,0.5rem+6.5vw,4.5rem)] leading-[1.2] tracking-[-0.028em] sm:mb-15 lg:mb-10.75 [&>br]:hidden sm:[&>br]:inline-block">
              Great to have you here!
              <br /> I'm{" "}
              <span class="from-accent/75 to-accent/75 bg-[0_1.18em] bg-linear-to-r bg-size-[8px_4px] bg-repeat-x">
                {APP.name}
              </span>
            </h1>
            <p class="mb-6 sm:mb-8.5 lg:mb-16.5 lg:w-[38ch]">{tagLine}</p>
            <a href="#contact" class="underline">
              Contact me
            </a>
          </header>
        </div>
      </div>
    </section>
  );
});
