<template>
  <div class="bg-[#1D5796] text-center text-white text-lg p-5 rounded font-bold">
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
