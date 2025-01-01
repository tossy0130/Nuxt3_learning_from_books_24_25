// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro:{
    preset:'static'
  },
  ssr: false,
  app: {
    baseURL: '/nuxt3-app-01', // デフォルトのベースURL（任意でカスタマイズ）
  },


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  css:['@/assets/styles/main.scss'],
  modules: ['nuxtjs-naive-ui',
    '@pinia/nuxt',
 //   "@pinia-plugin-persistedstate/nuxt",
  ]
})