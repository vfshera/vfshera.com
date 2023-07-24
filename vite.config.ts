import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import rawFonts from "./vite-plugin-raw-fonts";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), rawFonts([".ttf"])],
    optimizeDeps: { exclude: ['@resvg/resvg-js']},
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    }
  }
});

