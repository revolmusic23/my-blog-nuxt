<template>
  <div>
    <!-- <h1 class="text-3xl font-bold mb-8">筆記列表</h1> -->
    <ContentList path="/notes" v-slot="{ list }">
      <div class="grid gap-6">
        <div v-for="note in list" :key="note._path">
          <NuxtLink :to="note._path">
            <div
              class="p-4 border rounded-lg hover:shadow-lg transition-shadow bg-bg-primary">
              <h2 class="text-xl font-semibold mb-2">{{ note.title }}</h2>
            </div>
          </NuxtLink>
        </div>
      </div>
    </ContentList>
  </div>
</template>
