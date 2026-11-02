import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// Static by default; routes with `export const prerender = false` run on Vercel functions.
export default defineConfig({
  site: 'https://portfolio-vvrtsaix.vercel.app',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  adapter: vercel()
});
