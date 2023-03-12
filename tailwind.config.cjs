/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        hideOut: "hideOut 5s infinite forwards",
      },
      keyframes: {
        hideOut: {
          "0%,50%,100%": {
            backgroundColor: "#e3e3e399",
            left: "0",
            transform: "rotate(0deg)",
          },
          "25%,75%,85%": {
            backgroundColor: "transparent",
            left: "100%",
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
