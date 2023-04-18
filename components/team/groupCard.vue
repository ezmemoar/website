<template>
  <div>
    <NCard class="text-center" size="large">
      <div class="text-lg font-bold text-primary max-md:text-base">
        {{ $props.name }}
      </div>
      <div class="mt-5 text-lg text-gray-500 max-md:text-base">
        <NuxtLink :to="`/team/${id}`">
          <NButton>{{ t("seeAllTeam") }}</NButton>
        </NuxtLink>
      </div>
    </NCard>
  </div>
</template>

<script setup lang="ts">
import { NButton, NCard } from "naive-ui";

const { t } = useI18n();

defineProps<{
  name: string;
  id: number;
}>();
</script>

<i18n lang="yaml">
en:
  seeAllTeam: "See All Team"
id:
  seeAllTeam: "Lihat Semua Tim"
</i18n>
