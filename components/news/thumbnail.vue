<template>
  <div class="flex items-center">
    <!-- <img v-if="image" :src="image" /> -->
    <img :src="image" class="w-[60%] rounded" />
    <div class="pl-3 space-y-1">
      <div class="text-gray-600">{{ date }}</div>
      <div class="font-bold text-lg">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  date: string;
  image?: string;
}>();
</script>
