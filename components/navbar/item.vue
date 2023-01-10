<template>
  <NuxtLink :to="to" class="p-5 transition-colors duration-150 text-black hover:underline">
    <slot>{{ title }}</slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
  title?: string;
}>();
</script>
