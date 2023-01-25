<template>
  <a href="https://wa.me/+6281218888066" target="_blank">
    <NIconWrapper
      :size="60"
      :border-radius="9999"
      class="bg-green-500/100 hover:bg-green-600 p-5 text-center text-primary z-50"
    >
      <NIcon :size="35" class="text-white">
        <LogoWhatsapp />
      </NIcon>
    </NIconWrapper>
  </a>
</template>

<script setup lang="ts">
import { LogoWhatsapp } from "@vicons/ionicons5";

import { NIcon, NIconWrapper } from "naive-ui";
</script>
