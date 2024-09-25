// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true }
// })
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['bootstrap/dist/css/bootstrap.min.css'],

  build: {
    transpile: ['bootstrap']
  },

  compatibilityDate: '2024-09-26'
})