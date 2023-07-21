import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import node from "@astrojs/node";
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  site: "https://vfshera.com",
  experimental: {
    assets: true,
  },
  integrations: [tailwind(), compress(), alpinejs()],
  output: "server",
  image: {
    service: sharpImageService(),
  },
  adapter: node({
    mode: "middleware",
  }),
});
