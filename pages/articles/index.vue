<template>
  <div>
    <ContentList path="/articles" v-slot="{ list }">
      <div class="grid gap-6">
        <div v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">
            <Card hover-shadow>
              <h2
                class="text-xl text-text-primary font-semibold tracking-wide mb-2"
              >
                {{ article.title }}
              </h2>
              <h2 class="text-gray-600 text-sm mt-4">{{ article.date }}</h2>
              <p class="text-gray-600 mt-4">{{ article.description }}</p>
              <p class="text-gray-600">{{ getArticleInfo(article) }}</p>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
const getArticleInfo = (article: any) => {
  // console.log(article);
};
</script>
