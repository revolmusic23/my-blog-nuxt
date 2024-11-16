export default defineNuxtConfig({
  app: {
    baseURL: "/my-blog-nuxt/",
    buildAssetsDir: "assets",
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
  typescript: {
    strict: true,
  },
});
