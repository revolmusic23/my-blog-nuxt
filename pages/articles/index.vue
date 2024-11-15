<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">文章列表</h1>
    <ContentList path="/articles" v-slot="{ list }">
      <div class="grid gap-6">
        <div
          v-for="article in list"
          :key="article._path"
          class="p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <NuxtLink :to="article._path">
            <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
            <p class="text-gray-600">{{ article.description }}</p>
          </NuxtLink>
        </div>
      </div>
    </ContentList>
  </div>
</template>
