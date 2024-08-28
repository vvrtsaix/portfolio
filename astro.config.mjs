import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://portfolio-vvrtsaix.vercel.app',
  integrations: [tailwind(), react(), mdx(), sitemap()],
  adapter: vercel()
});
