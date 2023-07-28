import { skills } from "@/data";
import { component$ } from "@builder.io/qwik";

const Skills = component$(() => {
  return (
    <section title="Skills" class="skills relative overflow-x-hidden">
      <div class="wrapper grid grid-cols-1 py-10 gap-6 bottom-border sm:grid-cols-2 sm:gap-y-[52px] sm:gap-x-6 sm:border-0 sm:pt-[52px] lg:grid-cols-3 lg:gap-y-[58px] lg:gap-x-[30px]">
        <h2 class="visually-hidden">Skills</h2>

        {skills.map((skill, index) => (
          <div key={index} class="skill text-center sm:text-left">
            <h3 class="  leading-[1.17] text-[clamp(2rem,0.3rem+7vw,3rem)] mb-0.5">
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

export default Skills;
