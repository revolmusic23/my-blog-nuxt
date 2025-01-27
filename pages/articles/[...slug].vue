<template>
  <Card isArticle>
    <ContentDoc v-slot="{ doc }">
      <article class="article prose prose-lg max-w-none p-4">
        <h1 class="text-3xl font-semibold tracking-wider mb-4">
          {{ doc.title }}
        </h1>
        <div class="text-gray-500 mb-6 text-sm lg:text-base">
          {{ new Date(doc.date).toLocaleDateString("zh-TW") }}
        </div>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </Card>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
