<template>
  <NuxtLink to="/">
    <slot>{{ title }}</slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
