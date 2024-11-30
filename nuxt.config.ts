export default defineNuxtConfig({
  ssr: false,
  target: 'static',

  typescript: {
    shim: false,
  },
  app: {
    baseURL: '/hadher-dashboard', // Replace with your GitHub repository name
    head: {
      title: 'Hadher admin',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap',
        },
      ],
    },
  },
  modules: ['@nuxtjs/supabase', 'nuxt-vue3-google-signin'],
  googleSignIn: {
    clientId:
      '749487479027-e4anm19k3h8g4ko193l050e69ehv6k49.apps.googleusercontent.com',
  },
  build: {
    transpile: ['vuetify'],
  },
  nitro: {
    serveStatic: true,
  },
  devServer: {
    port: process.env.PORT || '5000',
    host: '0.0.0.0',
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],

  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },

  plugins: ['~/plugins/supabase.client.js'],
});
