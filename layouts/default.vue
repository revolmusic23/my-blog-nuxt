<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-background">
    <!-- 頂部導航欄 -->
    <nav class="border-b">
      <div
        class="container mx-auto px-4 h-16 flex items-center justify-between">
        <!-- Logo/首頁連結 -->
        <NuxtLink to="/" class="text-xl font-bold"> My Blog </NuxtLink>

        <!-- 主導航選項 -->
        <div class="flex gap-6">
          <NuxtLink to="/notes" class="hover:text-primary transition-colors">
            Notes
          </NuxtLink>
          <NuxtLink to="/articles" class="hover:text-primary transition-colors">
            Articles
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- 主要內容區 -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex gap-6">
        <!-- 側邊欄 -->
        <aside class="w-64 shrink-0 hidden md:block">
          <!-- 根據路由動態顯示側邊欄內容 -->
          <div v-if="route.path.includes('/notes')" class="sticky top-8">
            <h3 class="font-semibold mb-4">所有筆記</h3>
            <ContentNavigation v-slot="{ navigation }" path="/notes">
              <div class="space-y-2">
                <NuxtLink
                  v-for="link in navigation"
                  :key="link._path"
                  :to="link._path"
                  class="block hover:text-primary transition-colors">
                  {{ link.title }}
                </NuxtLink>
              </div>
            </ContentNavigation>
          </div>

          <div v-if="route.path.includes('/articles')" class="sticky top-8">
            <h3 class="font-semibold mb-4">所有文章</h3>
            <ContentNavigation v-slot="{ navigation }" path="/articles">
              <div class="space-y-2">
                <NuxtLink
                  v-for="link in navigation"
                  :key="link._path"
                  :to="link._path"
                  class="block hover:text-primary transition-colors">
                  {{ link.title }}
                </NuxtLink>
              </div>
            </ContentNavigation>
          </div>
        </aside>

        <!-- 主內容區 -->
        <main class="flex-1">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
