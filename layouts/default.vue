<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-bg-secondary">
    <NavBar />

    <div class="container max-w-5xl mx-auto px-4 py-8">
      <div class="flex gap-6">
        <SideBar v-if="showSidebar" />
        <main class="flex-1">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

// const showSidebar = computed(() => route.meta.showSidebar);
const showSidebar = computed(() => {
  const sidebarRoutes = ["/note", "/article"];
  return sidebarRoutes.some((path) => route.path.startsWith(path));
});
</script>
