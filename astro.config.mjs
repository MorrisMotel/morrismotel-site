import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  markdown: {
    remarkPlugins: [ ],
  },
  site: "http://localhost:3000/",
  integrations: [sitemap(), tailwind()],
});

