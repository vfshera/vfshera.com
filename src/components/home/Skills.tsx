import { component$ } from "@builder.io/qwik";
import { skills } from "~/constants/data";

export default component$(() => {
  return (
    <section title="Skills" class="skills relative overflow-x-hidden">
      <div class="wrapper bottom-border grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-13 sm:border-0 sm:pt-13 lg:grid-cols-3 lg:gap-x-7.5 lg:gap-y-14.5">
        <h2 class="visually-hidden">Skills</h2>

        {skills.map((skill, index) => (
          <div key={index} class="skill text-center sm:text-left">
            <h3 class="mb-0.5 text-[clamp(2rem,0.3rem+7vw,3rem)] leading-[1.17]">
              {skill.title}
            </h3>
            <p class=" ">
              {new Date().getFullYear() - skill.startYear} Years Experience
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});
