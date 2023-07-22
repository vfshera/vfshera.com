import { APP, tagLine } from "@/data";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="hero sm:relative sm:-mt-[62px] lg:mt-0">
      <div class="wrapper pb-20 sm:pb-[60px] lg:pb-[100px] lg:relative bottom-border">
        <div class="flex items-center sm:items-start">
          <div class="relative text-center mt-[335px] sm:mt-28 sm:-mr-[30px] sm:text-left sm:z-[1] sm:flex-1 lg:basis-[58vw] lg:m-0">
            <h1 class="mb-6 sm:mb-[60px] sm:[&>br]:inline-block lg:mb-[43px] [&>br]:hidden text-[clamp(2.2rem,0.5rem+6.5vw,4.5rem)] leading-[1.2] -tracking-[.028em]">
              Great to have you here!
              <br /> I'm{" "}
              <span class="bg-gradient-to-r from-accent/75 to-accent/75 bg-[0_1.18em] bg-[length:8px_4px] bg-repeat-x">
                {APP.name}
              </span>
            </h1>
            <p class="mb-6 sm:mb-[34px] lg:mb-[66px] lg:w-[38ch]">{tagLine}</p>
            <a href="#contact" class="underline">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
