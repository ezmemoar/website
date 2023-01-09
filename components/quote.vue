<template>
  <div class="bg-primary text-center text-white text-lg p-5 rounded font-bold">
    "{{ quote }}"
    <div class="mt-3 italic">
      - {{ creator }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  quote: string;
  creator: string;
}>();
</script>
