/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#141414",
          2: "#242424",
        },
        accent: "#4ce19e",
        gray: "#d9d9d9",
        red: "#ff6f5c",
      },
    },
  },
  plugins: [],
};
