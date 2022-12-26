<template>
  <button
    class="bg-[#FAB705] text-white px-10 py-3 rounded-full transition-colors duration-150 hover:bg-yellow-500"
  >
    <slot>
      {{ title }}
    </slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
