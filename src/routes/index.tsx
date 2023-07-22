import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div id="home">
      <Hero />

      <Skills />

      <Projects />

      <Contact />
    </div>
  );
});
