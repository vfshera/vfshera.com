import { component$ } from "@builder.io/qwik";
import Contact from "~/components/home/Contact";
import Hero from "~/components/home/Hero";
import Projects from "~/components/home/Projects";

export default component$(() => {
  return (
    <div id="home">
      <Hero />

      <Projects />

      <Contact />
    </div>
  );
});
