import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import image from "@astrojs/image";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), compress()],
  output: "server",
  adapter: node({
    mode: "middleware",
  }),
});
