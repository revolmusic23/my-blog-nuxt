<template>
  <component
    :is="tag"
    class="font-semibold tracking-wider relative py-4 mb-4"
    :class="size"
  >
    <span>{{ text }}</span>
    <span
      class="absolute bottom-0 left-0 h-1 bg-accent"
      :class="underlineWidth"
    ></span>
  </component>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    default: "h1",
  },
  text: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "text-3xl",
  },
  underlineWidth: {
    type: String,
    default: "w-20",
  },
});
</script>
