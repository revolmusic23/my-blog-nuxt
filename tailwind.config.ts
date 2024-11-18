/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,vue,ts}", // 確保包含了 components 目錄
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        // 如果要用 RGB，可以這樣用
        // "primary-rgb": {
        //   DEFAULT: "rgb(var(--primary-rgb))",
        //   light: "rgb(var(--primary-light-rgb))",
        //   dark: "rgb(var(--primary-dark-rgb))",
        // },
        secondary: "var(--secondary)",
        accent: "var(--accent)",

        text: {
          primary: "var(--text-primary)", // 主要文字顏色
          secondary: "var(--text-secondary)", // 次要文字顏色
          light: "var(--text-light)", // 淺色文字
          dark: "var(--text-dark)", // 深色文字
        },

        bg: {
          primary: "var(--bg-primary)", // 主背景色
          secondary: "var(--bg-secondary)", // 次要背景色
          card: "var(--bg-card)", // 卡片背景
          hover: "var(--bg-hover)", // hover 狀態背景
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
};
