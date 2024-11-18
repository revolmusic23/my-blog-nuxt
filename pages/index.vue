<template>
  <div>
    <div class="bg-bg-secondary">
      <div class="container mx-auto max-w-5xl py-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold tracking-wider mb-8">
              歡迎來到我的部落格
            </h1>
            <p class="text-xl text-text-secondary tracking-wider">
              一個喜歡編曲的前端工程師
            </p>
          </div>
          <img
            src="/images/revolc-font-logo.jpeg"
            alt="User Avatar"
            class="w-80 h-80 rounded-full"
          />
        </div>
      </div>
    </div>

    <div :class="[containerClass, 'py-8']">
      <div class="flex gap-12">
        <div v-for="section in sections" :key="section.path" class="flex-1">
          <TitlesSectionTitle :text="`${section.title}列表`" class="mb-6" />
          <ContentList :path="section.path" :limit="3" v-slot="{ list }">
            <div class="grid gap-4">
              <Card
                v-for="item in list"
                :key="item._path"
                class="border shadow-sm"
              >
                <NuxtLink :to="item._path">
                  <h3 class="text-xl font-medium mb-2">{{ item.title }}</h3>
                  <p class="text-gray-600">{{ item.description }}</p>
                </NuxtLink>
              </Card>
            </div>
          </ContentList>
          <NuxtLink
            :to="section.path"
            class="text-primary hover:underline mt-4 inline-block"
          >
            查看所有{{ section.title }} →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "full",
});

const containerClass = "container mx-auto max-w-5xl";

const sections = [
  {
    title: "文章",
    path: "/articles",
  },
  {
    title: "筆記",
    path: "/notes",
  },
];
</script>
