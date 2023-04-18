<template>
  <div>
    <NCard class="text-center" size="huge">
      <div
        class="w-32 h-32 rounded-full !bg-cover mx-auto"
        :style="`background: url(${$props.image}) no-repeat center center;`"
      ></div>
      <div class="mt-5 text-xl font-bold text-primary max-md:text-base">
        {{ $props.name }}
      </div>
      <div class="mt-3 text-xl text-gray-500 max-md:text-base">
        {{ $props.role }}
      </div>
    </NCard>
  </div>
</template>

<script setup lang="ts">
import { NCard } from "naive-ui";

defineProps<{
  name: string;
  role: string;
  image: string;
}>();
</script>
