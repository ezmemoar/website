<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <NNotificationProvider placement="bottom">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </NNotificationProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import {
  NConfigProvider,
  GlobalThemeOverrides,
  NNotificationProvider,
} from "naive-ui";
import { COLORS } from "./enums/colors";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: COLORS.PRIMARY,
  },
  Button: {
    colorPrimary: COLORS.PRIMARY,
  },
};
</script>
