export default defineNuxtConfig({
  // 記得先在最上面引入所需的類型
  app: {
    baseURL: "/my-blog-nuxt/",
    buildAssetsDir: "assets",
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  css: ["~/assets/css/main.css"],
  // content 的設定要放在 runtimeConfig.public 裡面
  runtimeConfig: {
    public: {
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
    },
  },
  typescript: {
    strict: true,
  },
});
