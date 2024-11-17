<template>
  <div class="gap-12 grid lg:grid-cols-3 md:grid-cols-2">
    <div v-for="n in 12" :key="n">
      <Card hover-shadow>
        <img src="https://via.placeholder.com/300" alt="image" />
        <div class="mt-4 text-center">
          <h2 class="text-xl">Title</h2>
          <p class="text-sm">Description</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang=""></style>
