/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { "space-grotesk": ["Space Grotesk", "sans-serif"] },
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
