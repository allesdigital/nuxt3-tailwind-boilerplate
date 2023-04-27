// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        clientPort: 1011,
      },
    },
  },
  css: ["@/assets/css/fonts.css"],
  modules: ["@nuxtjs/tailwindcss"],
});
