// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/global.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lucide-icons'],
  app: {
    head: {
      title: 'Werlesson Vieira | Site Pessoal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My Nuxt.js application' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  }
})