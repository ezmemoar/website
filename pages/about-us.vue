<template>
  <main class="min-h-[13rem]">
    <section
      class="w-full max-md:pt-6 md:pt-14 bg-cover bg-center bg-no-repeat pb-10"
    >
      <div class="px-10 text-center">
        <div class="max-md:text-3xl md:text-4xl font-bold text-primary">
          {{ t("aboutUs") }}
        </div>
      </div>
    </section>

    <NSpin :show="isLoading">
      <template v-if="data">
        <WrapperSection>
          <div class="md:my-20 max-md:my-10 md:flex md:justify-between">
            <div class="md:w-[50%]">
              <div class="">
                <TextSectionLabel :title="t('visionTitle')" class="" />
                <p class="mt-5">
                  {{ data.vision }}
                </p>
              </div>
              <div class="mt-16">
                <TextSectionLabel :title="t('missionTitle')" class="" />
                <p class="mt-5">
                  {{ data.mission }}
                </p>
              </div>
            </div>
            <div class="md:w-[50%] px-10 text-center flex justify-center">
              <n-card title="Happy Sentosa Garden">
                <div>
                  <img :src="data.hsg_image" class="m-auto w-full mb-5" />
                </div>
                <div>
                  <p class="textlimit">
                    {{ data.hsg }}
                  </p>
                  <NButton class="mt-3" @click="readMore = true">
                    {{ t("seeMore") }}
                  </NButton>
                </div>
              </n-card>
            </div>
          </div>
        </WrapperSection>

        <WrapperSection class="bg-primary text-white">
          <br />
          <div class="md:my-20 max-md:my-5 md:flex md:justify-between">
            <TextSectionLabel
              class="!text-white md:hidden mb-5"
              :title="t('history')"
            />
            <div class="md:w-[40%]">
              <Image v-if="data.history_image" :src="data.history_image" />
            </div>
            <div class="md:w-[50%]">
              <div class="mt-7">
                <TextSectionLabel
                  class="!text-white max-md:hidden"
                  :title="t('history')"
                />
                <p class="mt-5">
                  {{ data.history }}
                </p>
              </div>
            </div>
          </div>
          <br />
        </WrapperSection>

        <WrapperSection class="text-white py-20">
          <div class="py-5 text-center">
            <TextSectionLabel :title="t('ourTeam')" />
          </div>
          <div class="py-10 flex justify-center">
            <TeamCard class="basis-1/4" v-bind="director" />
          </div>
          <div
            class="mt-5 flex flex-col md:flex-row gap-4 justify-center flex-wrap"
          >
            <TeamGroupCard
              v-for="team in teams.data"
              v-bind="team"
              class="basis-full md:basis-1/4"
            />
          </div>
          <br /><br />
        </WrapperSection>
      </template>
    </NSpin>

    <NModal v-model:show="readMore" mask-closable>
      <NCard :bordered="false" role="dialog" aria-modal="true" size="huge">
        <div class="py-1 text-center">
          <TextSectionLabel :title="t('happySentosaGarden')" />
          <img :src="data.hsg_image" class="m-auto w-full mb-5 mt-10" />
        </div>
        <div class="">
          {{ data.hsg }}
        </div>
      </NCard>
    </NModal>
  </main>
</template>

<script setup lang="ts">
import { NSpin, NCard, NModal, NButton } from "naive-ui";

const { t, locale } = useI18n({
  useScope: "local",
});
const { API_LIST } = useApiUrl();

const isLoading = ref(false);
const data = ref<any>({});
const director = ref<any>();
const teams = ref<{ data: any[] }>({ data: [] });

const setNewData = () => {
  data.value.mission = "";
  data.value.vision = "";
  data.value.history = "";
  data.value.happySentosaGarden = "";
};

const apivisi = async () => {
  setNewData();

  await $fetch<any>(API_LIST.GET_VISION, {
    params: {
      lang: locale.value,
    },
  }).then((val) => {
    console.log(val.data);
    data.value = val.data;
  });
};

const apiTeams = async () => {
  await $fetch<any>(API_LIST.GET_TEAM_GROUP, {
    params: {
      lang: locale.value,
    },
  }).then((val) => {
    teams.value.data.push(...val.data);
  });
};

const apiDirector = async () => {
  await $fetch<any>(API_LIST.GET_DIRECTOR, {
    params: {
      lang: locale.value,
    },
  }).then((val) => (director.value = val.data));
};

watch(
  locale,
  async () => {
    isLoading.value = true;
    teams.value.data = [];
    await apiDirector();
    await apiTeams();
    await apivisi();
    isLoading.value = false;
  },
  { immediate: true }
);
const readMore = ref(false);
</script>
<style scoped>
.n-card {
  max-width: 300px;
}
.textlimit {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
<i18n lang="yaml">
id:
  aboutUs: "Tentang Kami"
  visionTitle: "Visi"
  missionTitle: "Misi"
  vision: "Visi kami adalah adalah menjadi perusahaan perkebunan dan pertanian terkemuka di dunia yang mampu memberikan nilai tambah bagi seluruh stakeholder."
  mission: "<ol><li>meningkatkan produktivitas perkebunan dan pertanian dengan menggunakan teknologi</li><li>fokus pada pengembangan program sosial yang bertujuan untuk meningkatkan kesejahteraan masyarakat setempat.</li></ol>"
  history: "Sejarah Kami"
  ourTeam: "Tim Kami"
  happySentosaGarden: "Happy Sentosa Garden"
  seeMore: "lihat selengkapnya"
en:
  aboutUs: "About Us"
  visionTitle: "Vision"
  missionTitle: "Mission"
  vision: "Our vision is to become a leading plantation and plantation company in the world that is able to provide added value to all stakeholders."
  mission: "<ol><li>increase the productivity of plantations and agriculture using technology</li><li>focus on developing social programs aimed at improving the welfare of local communities.</li></ol>"
  history: "Our History"
  ourTeam: "Our Team"
  happySentosaGarden: "Happy Sentosa Garden"
  seeMore: "See More"
</i18n>
