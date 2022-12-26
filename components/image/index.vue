<template>
  <NImage :src="imageUrl" :alt="aboutUs" class="rounded shadow-md" />
</template>

<script setup lang="ts">
import { NImage } from "naive-ui";

const props = defineProps<{
  src: string;
  alt?: string;
}>();

const aboutUs = computed(() => {
  const imageLastName = props.src.split("/")[props.src.split("/").length - 1];
  return props.alt || imageLastName;
});

const imageUrl = computed(() => require(props.src));
</script>
