import blueBee from "~/media/images/blue-bee.webp?jsx";
import polarisVillage from "~/media/images/polaris-village.webp?jsx";
import sanjuna from "~/media/images/sanjuna.webp?jsx";

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

export const projects = [
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
