# Uurtsaikh Nyambat Portfolio

Personal portfolio project. [Preview](https://portfolio-vvrtsaix.vercel.app/)

---

- NodeJS >= 18
- [Typescript 5.2](https://www.typescriptlang.org/) - Types for JS
- [Bun](https://bun.sh/docs/installation) - Package manager
- [Astro](https://docs.astro.build/en/getting-started/) - Astro web framework
- [Tailwind-CSS](https://tailwindcss.com/docs/guides/vite) - Utility css
- [React 18](https://react.dev/) - UI library

---

## Folder structure

- public - public assets ex: images, favicon.svg and language jsons
- src
  - components - general usage components
  - layouts - main layout
  - pages - all pages of platform
  - emails - email templates
  - data.ts - main data source
  - utils.ts - utility functions
- astro-i18next.config.ts - Astro i18n config file
- tailwind.config.cjs - Tailwind config file
- astro.config.mjs - Astro config file

## Setup

### 1. Environment Setup

- Install nodejs >= v18 (recommended installing with [NVM](https://github.com/nvm-sh/nvm))
- Install node module (`bun install`)
- Set up necessary variables in .env

  - env example

  ```env
  RESEND_API_KEY=******
  ```

### 2. Recommended vscode extensions

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Run commands

- Install node modules

  ```bash
  bun install
  ```

- Start development service

  ```bash
  bun dev
  ```

- Build the project

  ```bash
  bun build
  ```

- Start server with built files

  ```bash
  bun preview
  ```

- Generate i18n pages

  ```bash
  bunx astro-i18next generate
  ```

## Production and Development deployment

To main, you can merge the main branch. Thus, vercel will execute out an automatic application deployment.

- On the main branch, producation deployment is configured for CI/CD

  - Domain: [https://portfolio-vvrtsaix.vercel.app/]
