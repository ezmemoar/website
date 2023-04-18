<template>
  <NSpin :show="pending" :class="{ 'py-20': pending }">
    <div v-if="res.length > 0 && teamGroup">
      <section
        class="w-full max-md:pt-6 md:pt-14 bg-cover bg-center bg-no-repeat"
      >
        <div class="px-10 text-center">
          <div class="max-md:text-3xl md:text-4xl font-bold text-primary">
            {{
              locale == "en"
                ? `${teamGroup.name} ${t("team")}`
                : `${t("team")} ${teamGroup.name}`
            }}
          </div>
        </div>
      </section>

      <section class="min-h-screen overflow-x-hidden">
        <div class="py-10">
          <div>
            <div class="max-md:px-10 md:px-36 z-50">
              <div class="mt-5 flex justify-center flex-wrap gap-10">
                <TeamCard
                  v-for="(val, index) in res"
                  :key="index"
                  v-bind="val"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div
      v-else-if="(res.length == 0 || !teamGroup) && !pending"
      class="flex justify-center items-center text-xl"
    >
      Belum ada tim yang tersedia
    </div>
  </NSpin>
</template>

<script lang="ts" setup>
import { NSpin } from "naive-ui";

const { API_LIST } = useApiUrl();
const { id } = useRoute().params;
const { t, locale } = useI18n();

const pending = ref(true);
const res = ref<any>([]);
const teamGroup = ref<any>({});

const loadData = async () =>
  await $fetch<any>(`${API_LIST.GET_TEAMS}/${id}`).then((val) => {
    if (val) {
      res.value = val.data;
    }
  });

const fetchTeamGroupName = async () =>
  await $fetch<any>(`${API_LIST.GET_TEAM_GROUP}/${id}`).then((val) => {
    if (val) {
      teamGroup.value = val.data;
    }
  });

const fetchData = async () => {
  pending.value = true;
  await fetchTeamGroupName();
  await loadData();
  pending.value = false;
};

watch(locale, () => fetchData(), { immediate: true });
</script>

<i18n lang="yaml">
en:
  team: "Team"
id:
  team: "Tim"
</i18n>
