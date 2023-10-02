// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore
  modules: [
    '@pinia/nuxt',
    '@ant-design-vue/nuxt'
  ],
// @ts-ignore
  css: [
    'primevue/resources/themes/mdc-light-indigo/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],
  plugins: [{ src: '@/plugins/primevue.js'}],
  build: {
    transpile: ['primevue']
  },
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  }
})
