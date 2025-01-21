import blueBee from "~/media/images/blue-bee.webp?jsx";
import polarisVillage from "~/media/images/polaris-village.webp?jsx";
import sanjuna from "~/media/images/sanjuna.webp?jsx";
import jagFood from "~/media/images/jag-food.webp?jsx";

export const skills = [
  {
    title: "React",
    startYear: 2021,
  },
  {
    title: "Vue",
    startYear: 2020,
  },
  {
    title: "Astro",
    startYear: 2022,
  },
  {
    title: "Node",
    startYear: 2021,
  },
  {
    title: "Php",
    startYear: 2019,
  },
  {
    title: "Laravel",
    startYear: 2019,
  },
];
export const ossProjects: {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  link?: string;
  wip?: boolean;
}[] = [
  {
    title: "Shuriken UI - React",
    description:
      "Shuriken UI is a free and open-source Tailwind CSS UI Kit. It is a collection of components and templates that you can use to build your next Tailwind CSS project.",
    tags: ["UI Components", "React", "Tailwindcss", "Typescript"],
    repo: "https://github.com/shuriken-ui/react",
    link: "https://shurikenui.com/",
  },
  {
    title: "Fastify Directory Routes",
    description:
      "A Fastify plugin that enables file system-based routing, utilizing directories to specify URL segments matched by the router.",
    tags: ["Fastify Plugin", "Typescript"],
    repo: "https://github.com/vfshera/fastify-dir-routes",
    link: "https://www.npmjs.com/package/@vfshera/fastify-dir-routes",
  },
  {
    title: "Dep",
    description:
      "Your CPANEL Deployment Tool - Designed to simplify the process of deploying CPANEL sites.",
    tags: ["Qwik", "Tailwindcss", "Typescript", "Drizzle ORM"],
    repo: "https://github.com/vfshera/dep",
    wip: true,
  },
];

export const projects = [
  {
    photo: jagFood,
    name: "Hey!Jag Food",
    tags: ["Astro", "Tailwindcss", "Reactjs"],
    links: { demo: "https://heyjag-dashboard.vercel.app/", code: null },
  },
  {
    photo: blueBee,
    name: "Bluebee Care",
    tags: ["Astro", "Tailwindcss", "GSAP"],
    links: { demo: "http://astro-bluebee-care.vercel.app", code: null },
  },
  {
    photo: sanjuna,
    name: "Sanjuna Fashion",
    tags: ["Astro", "Tailwindcss"],
    links: { demo: "https://sanjuna-fashion.vercel.app", code: null },
  },
  {
    photo: polarisVillage,
    name: "Polaris Village",
    tags: ["Astro", "Tailwindcss"],
    links: { demo: "https://polaris-village.vercel.app", code: null },
  },
];
