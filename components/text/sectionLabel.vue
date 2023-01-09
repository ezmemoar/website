<template>
  <div class="text-primary border-b border-secondary inline-block font-bold text-lg">{{ title }}</div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>