// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules : [
    '@nuxtjs/tailwindcss'
  ],
  app : {
     head: {
      title: "Nuxt Dojo",
      meta : [
        { name: "description", content: "Belajar Nuxt JS By Ninja Dojo" },
      ],
      link: [
        {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
      ]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
