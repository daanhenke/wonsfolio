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
  css: [
    '~/assets/css/dark.css'
  ],
  devtools: { enabled: true }
})
