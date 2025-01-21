import { ossProjects, projects } from "~/constants/data";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section title="Projects" class="projects">
      <div class="wrapper py-[140px] space-y-20">
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
                {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
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

        <div>
          <h2 class="text-[clamp(1.6rem,0.5rem+3.5vw,3.5rem)] leading-[1.2] -tracking-[.028em]">
            OSS
          </h2>
          <p class="text-xl">Open source projects I've contributed to.</p>

          <div class="space-y-6 mt-5">
            {ossProjects.map((project, index) => (
              <div
                key={index}
                class="px-4 py-3 border  border-white/40 rounded-lg"
              >
                <p class="text-xl font-bold mb-1 text-[var(--accent)]">
                  {project.title}
                  {project.wip && <span class="opacity-70"> (🚧 WIP)</span>}
                </p>
                <p class="mb-2 text-lg max-w-[90%]">{project.description}</p>
                <div class="flex justify-between items-center mt-3">
                  <div class="flex gap-2">
                    {[...new Set(project.tags)].map((tag) => (
                      <p class="" key={tag}>
                        <span class="text-[var(--accent)]">#</span>
                        {tag}
                      </p>
                    ))}
                  </div>
                  <div class="flex gap-5 mt-3 *:flex *:gap-1.5">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        aria-labelledby="socialGitHub"
                        role="img"
                      >
                        <path
                          fill="#FFF"
                          fill-rule="evenodd"
                          d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                        />
                      </svg>
                      Repository
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <p>... and so much more!</p>
          </div>
        </div>
      </div>
    </section>
  );
});
