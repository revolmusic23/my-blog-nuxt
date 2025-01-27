<template>
  <div
    class="bg-bg-primary rounded-md border-primary-200 shadow-md"
    :class="[cardClasses, isArticle ? 'p-0 md:p-4' : 'p-4']"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    hoverShadow?: boolean;
    isArticle?: boolean;
  }>(),
  {
    isArticle: false,
  },
);

const cardClasses = computed(() => ({
  "hover:shadow-lg": props.hoverShadow,
  "transition-shadow": props.hoverShadow,
}));
</script>
