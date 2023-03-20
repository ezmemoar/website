<template>
  <div>
    <NCard class="text-center" style="border-style: none" size="huge">
      <img :src="$props.image" class="w-32 m-auto" />
      <div class="mt-5 text-xl font-bold text-primary max-md:text-base">
        {{ $props.name }}
      </div>
      <div class="mt-3 text-xl text-gray-500 max-md:text-base">
        {{ $props.position }}
      </div>
    </NCard>
  </div>
</template>

<script setup lang="ts">
import { NCard } from "naive-ui";

const { STORAGE_URL } = useRuntimeConfig().public;

defineProps<{
  name: string;
  position: string;
  image: string;
}>();
</script>
