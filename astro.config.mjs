import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  markdown: {
    remarkPlugins: [],
  },
  site: 'http://localhost:8080/',
  server: { host: true, port: 8080 },
  integrations: [sitemap(), tailwind()],
});
