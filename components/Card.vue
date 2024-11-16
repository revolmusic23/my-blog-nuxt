<template>
  <div class="bg-bg-primary rounded-md shadow-md p-4" :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  hoverShadow?: boolean;
}>();

const cardClasses = computed(() => ({
  "hover:shadow-lg": props.hoverShadow,
  "transition-shadow": props.hoverShadow,
}));
</script>
