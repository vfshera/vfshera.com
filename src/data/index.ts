export const APP = {
  name: "Franklin Shera",
  logoText: "vfshera",
  DOMAIN: import.meta.env.DOMAIN,
} as const;

export const tagLine =
  "A Front-End Developer committed to delivering intuitive and visually stunning websites.";

// export const tagLine =
//   "Transforming Design into Seamless Web Experiences: Passionate Front-End Developer Building for Accessibility and User Satisfaction.";

export const contactDesc =
  "I'm excited to learn about your project and explore how I can assist you. Feel free to fill in the form, and I'll personally reach out to you as soon as possible";

export const socials = [
  {
    name: "Github",
    link: "https://github.com/vfshera",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/vfshera",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/1vfshera",
  },
] as const;

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

export const projects: {
  photo: string;
  name: string;
  tags: string[];
  links: { demo: string; code: string | null };
}[] = [
  {
    photo: "/images/blue-bee.webp",
    name: "Bluebee Care",
    tags: ["Astro", "Tailwindcss", "GSAP"],
    links: { demo: "http://astro-bluebee-care.vercel.app", code: null },
  },
  {
    photo: "/images/sanjuna.webp",
    name: "Sanjuna Fashion",
    tags: ["Astro", "Tailwindcss"],
    links: { demo: "https://sanjuna-fashion.vercel.app", code: null },
  },
  {
    photo: "/images/polaris-village.webp",
    name: "Polaris Village",
    tags: ["Astro", "Tailwindcss"],
    links: { demo: "https://polaris-village.vercel.app", code: null },
  },
];
