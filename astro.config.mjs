import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';
import mdx from "@astrojs/mdx";

import remarkGFM from "remark-gfm"
import remarkSmartypants from "remark-smartypants"

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkGFM, remarkSmartypants, remarkReadingTime]
  },
  site: 'http://localhost:3000/',
  integrations: [sitemap(), tailwind(), mdx()]
});