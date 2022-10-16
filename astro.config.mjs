import { defineConfig } from 'astro/config';
import { remarkReadingTime } from '/src/lib/remark-reading-time.mjs';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from "@astrojs/mdx";

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true
  },
  site: 'http://localhost:3000/',
  integrations: [tailwind(), sitemap(), mdx()]
});