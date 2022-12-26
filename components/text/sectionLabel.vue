<template>
  <div class="text-[#1D5796] border-b border-[#FAB705] inline-block font-bold text-lg">{{ title }}</div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>