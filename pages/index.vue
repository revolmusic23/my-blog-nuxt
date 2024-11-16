<!-- pages/index.vue -->
<template>
  <!-- <div class="max-w-4xl mx-auto"> -->
  <Card>
    <h1 class="text-4xl font-bold mb-8">歡迎來到我的部落格</h1>

    <!-- 最新筆記 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">最新筆記</h2>
      <ContentList path="/notes" :limit="3" v-slot="{ list }">
        <div class="grid gap-4">
          <div
            v-for="note in list"
            :key="note._path"
            class="p-4 border rounded-lg hover:shadow-lg transition-shadow">
            <NuxtLink :to="note._path">
              <h3 class="text-xl font-medium mb-2">{{ note.title }}</h3>
              <p class="text-gray-600">{{ note.description }}</p>
            </NuxtLink>
          </div>
        </div>
      </ContentList>
      <NuxtLink
        to="/notes"
        class="text-primary hover:underline mt-4 inline-block">
        查看所有筆記 →
      </NuxtLink>
    </section>

    <!-- 最新文章 -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">最新文章</h2>
      <ContentList path="/articles" :limit="3" v-slot="{ list }">
        <div class="grid gap-4">
          <div
            v-for="article in list"
            :key="article._path"
            class="p-4 border rounded-lg hover:shadow-lg transition-shadow">
            <NuxtLink :to="article._path">
              <h3 class="text-xl font-medium mb-2">{{ article.title }}</h3>
              <p class="text-gray-600">{{ article.description }}</p>
            </NuxtLink>
          </div>
        </div>
      </ContentList>
      <NuxtLink
        to="/articles"
        class="text-primary hover:underline mt-4 inline-block">
        查看所有文章 →
      </NuxtLink>
    </section>
  </Card>
</template>
