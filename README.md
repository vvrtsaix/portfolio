# Uurtsaikh Nyambat Portfolio

Personal portfolio site. [Preview](https://portfolio-vvrtsaix.vercel.app/)

Static site built with [Astro](https://docs.astro.build/) and [Tailwind CSS](https://tailwindcss.com/), deployed on Vercel.

## Folder structure

- `public` - static assets (favicons, CV)
- `src`
  - `assets` - images and fonts
  - `components` - page sections
  - `layouts` - main layout, header, footer
  - `pages` - routes
  - `styles` - global CSS
  - `data.ts` - main data source

## Commands

Requires Node.js 24 (see `.nvmrc`) and pnpm.

```bash
pnpm install   # install dependencies
pnpm dev       # start dev server
pnpm build     # build to dist/
pnpm preview   # serve built files
```

## Deployment

Pushing to `main` triggers an automatic Vercel production deployment.
