<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from "naive-ui";
import { COLORS } from "./enums/colors";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: COLORS.PRIMARY,
  },
  Button: {
    colorPrimary: COLORS.PRIMARY,
  }
};
</script>
