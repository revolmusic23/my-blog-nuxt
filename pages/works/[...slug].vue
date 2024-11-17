<template>
  <Card>
    <ContentDoc v-slot="{ doc }">
      <article class="prose prose-lg max-w-none">
        <h1>{{ doc.title }}</h1>
        <div class="text-gray-500 mb-8">
          {{ new Date(doc.date).toLocaleDateString() }}
        </div>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </Card>
</template>
