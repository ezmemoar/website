<template>
  <div>
    <NCard class="text-center" bordered size="huge">
      <img src="/teams/team-1.png" class="w-32" />
      <div class="mt-5 text-xl font-bold text-primary">{{ $props.name }}</div>
      <div class="mt-3 text-xl text-gray-500">{{ $props.position }}</div>
    </NCard>
  </div>
</template>

<script setup lang="ts">
import { NCard } from "naive-ui";

defineProps<{
  name: string;
  position: string;
}>();
</script>
