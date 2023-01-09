<template>
  <button class="text-base text-white py-3 px-8 rounded-full" :class="customClass">
    <slot>{{ title }}</slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  bgClass?: "bg-primary" | "bg-secondary";
}>();

const customClass = computed(() => props.bgClass || "bg-primary");
</script>
