<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-bg-secondary">
    <NavBar />

    <!-- 主要內容區 -->
    <div class="container max-w-5xl mx-auto px-4 py-8">
      <div class="flex gap-6">
        <!-- 側邊欄 -->
        <SideBar />

        <!-- 主內容區 -->
        <main class="flex-1">
          <!-- <div class="bg-bg-primary rounded-lg shadow-md p-4"> -->
          <slot />
          <!-- </div> -->
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
