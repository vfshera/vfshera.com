import { projects } from "~/constants/data";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section title="Projects" class="projects">
      <div class="wrapper py-[140px]">
        <div class="grid grid-cols-2 gap-10 justify-center text-center sm:justify-start sm:text-left sm:gap-y-[60px] sm:gap-x-6 lg:gap-y-[70px] lg:gap-x-[30px]">
          <h2 class="col-span-2 sm:col-span-1 text-[clamp(2.2rem,0.5rem+6.5vw,4.5rem)] leading-[1.2] -tracking-[.028em]">
            Projects
          </h2>
          <a
            href="#contact"
            class="underline col-span-2 sm:col-span-1 sm:justify-self-end sm:self-center"
          >
            Contact me
          </a>

          {projects.map(({ photo: Photo, ...project }, index) => (
            <div
              key={index}
              class="project  group/project col-span-2 sm:col-span-1 lg:grid lg:grid-cols-1 lg:grid-rows-[repeat(4,auto)]"
            >
              <picture class="  block mb-5 lg:relative  lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:after:content-[''] lg:after:absolute lg:after:w-full lg:after:h-full lg:after:top-0 lg:after:bg-black lg:after:opacity-0 lg:after:transition-opacity lg:after:ease-in-out lg:group-focus-within/project:after:opacity-50 lg:group-hover/project:after:opacity-50 ">
                <Photo alt={project.name} />
              </picture>

              <h3 class="project-name text-2xl leading-[1.3] font-bold uppercase mb-[7px]">
                {project.name}
              </h3>
              <p class="project-tags sm:justify-start sm:gap-5 flex justify-center gap-3 mb-5 uppercase">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </p>
              <div class="project-links lg:group-focus-within/project:opacity-100 lg:group-hover/project:opacity-100 lg:z-[1] flex flex-col lg:col-start-1 lg:row-start-1 lg:row-end-2 lg:col-end-2 lg:self-center lg:justify-self-center lg:opacity-0 lg:transition-opacity lg:ease-in-out lg:duration-[400ms] items-center  sm:flex-row sm:gap-[30px] gap-5">
                <a href={project.links.demo} target="_blank" class="underline">
                  View Project
                </a>
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    class="underline"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
