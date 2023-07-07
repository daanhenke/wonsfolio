export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
    '@nuxtjs/google-fonts',
    'nuxt-svgo'
  ],
  svgo: {
    autoImportPath: './assets/svg/'
  },
  googleFonts: {
    families: {
      'Space Grotesk': [ 700, 900 ],
      'Jost': true
    }
  },
  windicss: {
    analyze: true
  },
  devtools: { enabled: true },
  app: {
    baseURL: '/wonsfolio/'
  }
})
