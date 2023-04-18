<template>
  <NImage
    class="rounded transition-transform duration-150 shadow-md md:w-5/6"
    :preview-disabled="isPreviewable"
    :src="src"
    :alt="aboutUs"
    :class="dynamicClass"
  />
</template>

<script setup lang="ts">
import { NImage } from "naive-ui";

const props = defineProps<{
  src: string;
  alt?: string;
  isPreviewable?: boolean;
  isAnimated?: boolean;
}>();

const isPreviewable = computed(() => (!props.isPreviewable ? true : false));
const dynamicClass = computed(() => {
  let customClass = "";

  if (props.isPreviewable || props.isAnimated) {
    customClass += "hover:scale-105 hover:shadow-lg";
  }

  return customClass;
});
const aboutUs = computed(() => {
  const imageLastName = props.src.split("/")[props.src.split("/").length - 1];
  return props.alt || imageLastName;
});
</script>
