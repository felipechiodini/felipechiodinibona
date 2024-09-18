// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-gtag', '@nuxtjs/seo'],
  gtag: {
    id: 'G-EPZT5YQK03',
  },
  site: {
    url: 'https://www.felipechiodinibona.com.br',
    name: 'Felipe Chiodini Bona',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'pt-BR'
  }
})