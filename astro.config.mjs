import { defineConfig } from 'astro/config';
import { remarkReadingTime } from '/src/lib/remark-reading-time.mjs';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import mdx from "@astrojs/mdx";
// import remarkGFM from "remark-gfm";
// import remarkSmartypants from "remark-smartypants";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      langs: [],
      wrap: true,
    },
  },
  site: 'http://localhost:3000/',
  integrations: [sitemap(), tailwind(), mdx()]
});