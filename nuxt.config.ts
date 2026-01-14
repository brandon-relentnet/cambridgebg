// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: { plugins: [tailwindcss()] },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/seo",
  ],

  site: {
    url: "https://cambridgebg.com",
    name: "Cambridge Building Group",
    description: "Building excellence through communication, integrity, and dedicated craftsmanship.",
    defaultLocale: "en",
  },
});