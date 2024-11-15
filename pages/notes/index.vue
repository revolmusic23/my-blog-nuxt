<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">筆記列表</h1>
    <ContentList path="/notes" v-slot="{ list }">
      <div class="grid gap-6">
        <div
          v-for="note in list"
          :key="note._path"
          class="p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <NuxtLink :to="note._path">
            <h2 class="text-xl font-semibold mb-2">{{ note.title }}</h2>
            <p class="text-gray-600">{{ note.description }}</p>
          </NuxtLink>
        </div>
      </div>
    </ContentList>
  </div>
</template>
