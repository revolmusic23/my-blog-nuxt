<template>
  <aside
    v-if="route.path.includes('/articles') || route.path.includes('/notes')"
    class="w-64 shrink-0 hidden md:block"
  >
    <div class="sticky top-8 bg-bg-primary shadow-md rounded-lg p-4">
      <ContentNavigation v-slot="{ navigation }" path="/notes">
        <div class="space-y-2">
          <NuxtLink
            v-for="link in navigation"
            :key="link._path"
            :to="link._path"
            class="hover:text-primary flex gap-2 mb-3"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </ContentNavigation>
    </div>

    <!-- <div v-if="route.path.includes('/articles')" class="sticky top-8">
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
    </div> -->
  </aside>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
