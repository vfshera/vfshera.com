import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import node from "@astrojs/node";

export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [tailwind(), compress()],
  output: "server",
  image: {
    service: sharpImageService(),
  },
  adapter: node({
    mode: "middleware",
  }),
});
