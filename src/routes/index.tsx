import Contact from "~/sections/Contact";
import Hero from "~/sections/Hero";
import Projects from "~/sections/Projects";
// import Skills from "~/sections/Skills";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div id="home">
      <Hero />

      {/* <Skills /> */}

      <Projects />

      <Contact />
    </div>
  );
});
