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
      <template v-if="isDataExist">
        <WrapperSection>
          <div class="md:my-20 max-md:my-10 md:flex md:justify-between">
            <div class="md:w-[50%]">
              <div class="">
                <TextSectionLabel :title="t('visionTitle')" class="" />
                <div class="w-full mt-5 md:hidden">
                  <Image src="/about-us.jpg" />
                </div>
                <p class="mt-5">
                  {{ data.vision }}
                </p>
                <TextSectionLabel :title="t('missionTitle')" class="mt-3" />
                <p class="mt-5">
                  {{ data.mission }}
                </p>
              </div>
            </div>
            <div class="w-[40%] max-md:hidden">
              <Image src="/about-us.jpg" />
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
              <Image src="/about-us.jpg" />
            </div>
            <div class="md:w-[50%]">
              <div class="mt-7">
                <TextSectionLabel
                  class="!text-white max-md:hidden"
                  :title="t('history')"
                />
                <p class="mt-5" v-html="data.history"></p>
              </div>
            </div>
          </div>
          <br />
        </WrapperSection>

        <WrapperSection class="text-white mt-10">
          <div class="py-5 text-center">
            <TextSectionLabel :title="t('ourTeamFarmer')" />
          </div>
          <div class="mt-5 flex flex-wrap justify-center border-none">
            <TeamCard
              v-for="team in teams.data"
              :name="team.name"
              :position="team.role"
              :image="team.image"
              class="max-md:w-6/12 md:w-4/12"
              v-show="team.group.name == 'Garden'"
            />
          </div>
          <br /><br />
        </WrapperSection>

        <WrapperSection class="text-white">
          <div class="py-5 text-center">
            <TextSectionLabel :title="t('ourTeamOperasional')" />
          </div>
          <div class="mt-5 flex flex-wrap justify-center border-none">
            <TeamCard
              v-for="team in teams.data"
              :name="team.name"
              :position="team.role"
              :image="team.image"
              class="max-md:w-6/12 md:w-4/12"
              v-show="team.group.name != 'Garden'"
            />
          </div>
          <br /><br />
        </WrapperSection>

        <WrapperSection class="bg-[#F9F9F9] py-10">
          <div class="py-1 text-center">
            <TextSectionLabel :title="t('happySentosaGarden')" />
            <img
              src="/happy-sentosa-garden.png"
              class="m-auto w-5/12 mb-5 mt-10"
            />
          </div>
          <div class="mt-5 text-center md:px-20 max-md:text-base md:text-lg">
            {{ data.happySentosaGarden }}
          </div>
        </WrapperSection>
      </template>
    </NSpin>
  </main>
</template>

<script setup lang="ts">
import { NSpin } from "naive-ui";

const { t, locale } = useI18n({
  useScope: "local",
});
const { API_LIST } = useApiUrl();

const isLoading = ref(true);
const data = ref<any>({
  mission: "",
  vision: "",
  history: "",
  happySentosaGarden: "",
});
const teams = ref({ data: [] });
const isDataExist = computed(() => Boolean(data.value.mission && data.value.vision && data.value.history && data.value.happySentosaGarden));

const setNewData = () => {
  data.value.mission = "";
  data.value.vision = "";
  data.value.history = "";
  data.value.happySentosaGarden = "";
}

const apivisi = async () => {
  setNewData();

  await $fetch<any>(API_LIST.GET_VISION, {
    params: {
      lang: locale.value,
    },
  }).then((val) => {
    data.value.mission = val.data.mission;
    data.value.vision = val.data.vision;
    data.value.history = val.data.history;
    data.value.happySentosaGarden = val.data.happy_sentosa_garden;
  });
};

const apiTeams = async () => {
  await $fetch<any>(API_LIST.GET_TEAMS, {
    params: {
      lang: locale.value,
    },
  }).then((val) => {
    teams.value.data.push(...val.data);
    console.log(teams.value);
  });
};

watch(
  locale,
  async () => {
    isLoading.value = true;
    teams.value.data = [];
    await apiTeams();
    await apivisi();
    isLoading.value = false;
  },
  { immediate: true }
);
</script>

<i18n lang="yaml">
id:
  aboutUs: "Tentang Kami"
  visionTitle: "Visi"
  missionTitle: "Misi"
  vision: "Visi kami adalah adalah menjadi perusahaan perkebunan dan pertanian terkemuka di dunia yang mampu memberikan nilai tambah bagi seluruh stakeholder."
  mission: "<ol><li>meningkatkan produktivitas perkebunan dan pertanian dengan menggunakan teknologi</li><li>fokus pada pengembangan program sosial yang bertujuan untuk meningkatkan kesejahteraan masyarakat setempat.</li></ol>"
  history: "Sejarah Kami"
  ourTeamFarmer: "Tim Kebun"
  ourTeamOperasional: "Tim Operasional"
  happySentosaGarden: "Happy Sentosa Garden"
en:
  aboutUs: "About Us"
  visionTitle: "Vision"
  missionTitle: "Mission"
  vision: "Our vision is to become a leading plantation and plantation company in the world that is able to provide added value to all stakeholders."
  mission: "<ol><li>increase the productivity of plantations and agriculture using technology</li><li>focus on developing social programs aimed at improving the welfare of local communities.</li></ol>"
  history: "Our History"
  ourTeamFarmer: "Garden Team"
  ourTeamOperasional: "Operational Team"
  happySentosaGarden: "Happy Sentosa Garden"
</i18n>
