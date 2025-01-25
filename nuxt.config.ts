export default defineNuxtConfig({
  app: {
    baseURL: "/my-blog-nuxt/",
    buildAssetsDir: "assets",
    head: {
      title: "雷歐音樂",
      link: [
        {
          rel: "icon",
          href: "/images/revolc-font-logo.jpeg",
        },
      ],
    },
  },
  // 開啟開發者工具，就像遊戲的除錯模式
  devtools: { enabled: true },
  // 告訴網站："我要使用 @nuxt/content 這個功能來管理我的文章"
  modules: ["@nuxt/content"],
  css: ["~/assets/scss/main.scss"],
  // 設定 CSS 的處理工具
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}, // 自動確保 CSS 在不同瀏覽器都能正常運作
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
    markdown: {
      toc: {
        depth: 6, // 目錄導覽顯示到第幾層標題
        searchDepth: 6, // 可以搜尋到第幾層標題
      },
      anchorLinks: false, // 點擊標題不要把標題加入網址
    },
  },
  typescript: {
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/article.scss" as *;',
        },
      },
    },
  },
});
