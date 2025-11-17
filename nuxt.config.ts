export default defineNuxtConfig({
  css: [
    "public/main.css",
      "bootstrap/dist/css/bootstrap.min.css",
  ],
  compatibilityDate: "2024-11-01",
  ssr: true,
  app: {
    head: {
      meta: [+
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    },
    baseURL: '/',
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
});
