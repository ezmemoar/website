<template>
  <NIconWrapper
    :size="25"
    :border-radius="9999"
    class="bg-white hover:bg-white/[.6] p-5 text-center text-primary"
  >
    <NIcon :size="25">
      <slot />
    </NIcon>
  </NIconWrapper>
</template>

<script setup lang="ts">
import { NIcon, NIconWrapper } from "naive-ui";
</script>
