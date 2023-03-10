// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  typescript: {
    // strict: true,
    // typeCheck: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  i18n: {
    strategy: "no_prefix",
    locales: ["en", "id"],
    defaultLocale: "id",
    vueI18n: {
      legacy: false,
      locale: "en",
    },
  },
  ssr: false,
});
