import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { astroImageTools } from "astro-imagetools";
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

export default defineConfig({
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  markdown: {
    remarkPlugins: ['remark-gfm', 'remark-smartypants', remarkReadingTime],
  },
  site: 'http://localhost:3000/',
  integrations: [sitemap(), tailwind(), astroImageTools],
});