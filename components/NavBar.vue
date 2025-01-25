<template>
  <nav class="sticky top-0 bg-bg-primary shadow-md z-50">
    <div class="container mx-auto px-4 max-w-5xl">
      <div class="flex justify-between items-center h-16">
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-text-primary hover:text-primary-500 transition-colors tracking-wider"
        >
          MyBlog
        </NuxtLink>

        <!-- 桌面版選單 - 靠右對齊 -->
        <div class="hidden md:flex gap-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="hover:text-primary-400 transition-colors text-md tracking-wider"
            :class="{
              'text-primary-500': route.path.includes(item.path),
            }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- 手機版選單按鈕 -->
        <button
          class="md:hidden p-2"
          @click="isOpen = !isOpen"
          aria-label="Menu"
        >
          <div class="w-6 h-6 flex items-center justify-center">
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>
      </div>

      <!-- 手機版下拉選單 -->
      <div v-show="isOpen" class="md:hidden pb-4">
        <div class="space-y-2">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="block px-4 py-2 text-white hover:bg-[#C4A484] rounded-lg transition-colors"
            :class="{ 'bg-[#C4A484]': route.path.includes(item.path) }"
            @click="isOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
const isOpen = ref(false);

// 選單項目
const menuItems = [
  // { name: "筆記", path: "/notes" },
  { name: "文章", path: "/articles" },
  // { name: "作品集", path: "/works" },
];

// 當視窗大小改變時關閉手機版選單
if (process.client) {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      isOpen.value = false;
    }
  });
}
</script>
