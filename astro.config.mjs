import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  site: 'http://localhost:3000/',
  integrations: [sitemap(), tailwind()],
});
