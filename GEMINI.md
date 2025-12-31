# Cambridge Builders Group (Nuxt 3 Project)

## Project Overview

This is a web application built with **Nuxt 3** for Cambridge Builders Group. It showcases the company's portfolio, services, and team. The project leverages **Tailwind CSS v4** for styling and uses modern Vue 3 composition API patterns.

### Key Technologies

*   **Framework:** [Nuxt 3](https://nuxt.com/) (Vue.js)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (configured via `@tailwindcss/vite`)
*   **Icons:** [@heroicons/vue](https://github.com/tailwindlabs/heroicons)
*   **Utilities:** [VueUse](https://vueuse.org/) (`@vueuse/nuxt`)
*   **Animations:** [@formkit/auto-animate](https://auto-animate.formkit.com/)
*   **Images:** [@nuxt/image](https://image.nuxt.com/)

## Building and Running

### Prerequisites

*   Node.js (Ensure a recent stable version is installed)
*   Package manager: `npm` (preferred based on lockfile presence), `pnpm`, or `yarn`.

### Commands

| Action | Command | Description |
| :--- | :--- | :--- |
| **Install Dependencies** | `npm install` | Installs project dependencies. |
| **Development Server** | `npm run dev` | Starts the dev server at `http://localhost:3000`. |
| **Production Build** | `npm run build` | Builds the application for production. |
| **Preview Build** | `npm run preview` | Previews the production build locally. |
| **Start Production** | `npm run start` | Runs the built application (custom port support via `PORT`). |

## Directory Structure

*   `assets/css/`: Global styles (e.g., `main.css`).
*   `components/`: Reusable Vue components.
    *   `sections/`: Components specific to page sections (e.g., `HomeHero.vue`, `ServicesProvided.vue`).
*   `data/`: JavaScript files exporting data objects (e.g., `portfolioData.js`, `siteData.js`).
*   `layouts/`: Nuxt layouts (e.g., `default.vue`).
*   `pages/`: Application routes.
    *   `index.vue`: Homepage.
    *   `portfolio/`: Portfolio section with dynamic routing.
*   `public/`: Static assets (images, icons, robots.txt).
*   `utils/`: Utility functions (e.g., `autoScroll.js`).

## Development Conventions

*   **Vue Style:** Use the **Composition API** with `<script setup>`.
*   **Styling:** Primarily use **Tailwind CSS** utility classes. Custom CSS should be minimal and placed in `<style>` blocks or global CSS if necessary.
*   **Images:** Use the `<NuxtImg>` component for optimized image rendering.
*   **Icons:** Import icons from `@heroicons/vue` (e.g., `@heroicons/vue/24/solid`).
*   **Data Fetching:** Static data is currently stored in the `data/` directory.
*   **Imports:** Leverage Nuxt's auto-import feature for Vue composables (`ref`, `computed`) and project components.
