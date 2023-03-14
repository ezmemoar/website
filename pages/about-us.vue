<template>
  <main>
    <section
      class="w-full max-md:pt-6 md:pt-14 bg-cover bg-center bg-no-repeat"
    >
      <div class="px-10 text-center">
        <div class="max-md:text-3xl md:text-4xl font-bold text-primary">
          {{ t("aboutUs") }}
        </div>
      </div>
    </section>

    <WrapperSection>
      <div class="md:my-20 max-md:my-10 md:flex md:justify-between">
        <div class="md:w-[50%]">
          <div class="mt-7">
            <TextSectionLabel :title="t('visionAndMission')" />
            <div class="w-full mt-5 md:hidden">
              <Image src="/about-us.jpg" />
            </div>
            <p class="mt-5">
              {{ data.vision }}
            </p>
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
            <p class="mt-5" v-html="t('historyDesc')"></p>
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
          v-show="team.role == 'Petani'"
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
          v-show="team.role != 'Petani'"
        />
      </div>
      <br /><br />
    </WrapperSection>

    <WrapperSection class="bg-[#F9F9F9] py-10">
      <div class="py-1 text-center">
        <TextSectionLabel :title="t('happySentosaGarden')" />
        <img src="/happy-sentosa-garden.png" class="m-auto w-5/12 mb-5 mt-10" />
      </div>
      <div class="mt-5 text-center md:px-20 max-md:text-base md:text-lg">
        {{ t("happySentosaGardenDesc") }}
      </div>
    </WrapperSection>
  </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({
  useScope: "local",
});
const { API_LIST } = useApiUrl();

const data = ref<any>({ mission: {}, vision: {} });
const teams = ref({data: []});
const apivisi = async () => {
  await $fetch<any>(API_LIST.GET_VISION, {
    params: {
      lang: locale.value,
    },
  }).then((val) => {
    data.value.mission = val.data.mission;
    data.value.vision = val.data.vision;
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
  () => {
    teams.value.data = [];
    apivisi();
    apiTeams();
  },
  { immediate: true }
);
</script>

<i18n lang="yaml">
id:
  aboutUs: "Tentang Kami"
  visionAndMission: "Visi dan Misi"
  vision: "Visi kami adalah adalah menjadi perusahaan perkebunan dan pertanian terkemuka di dunia yang mampu memberikan nilai tambah bagi seluruh stakeholder."
  mission: "<ol><li>meningkatkan produktivitas perkebunan dan pertanian dengan menggunakan teknologi</li><li>fokus pada pengembangan program sosial yang bertujuan untuk meningkatkan kesejahteraan masyarakat setempat.</li></ol>"
  history: "Sejarah Kami"
  historyDesc: "Perusahaan ini didirikan oleh sekelompok petani dan pebisnis yang ingin meningkatkan produktivitas perkebunan dan pertanian di wilayah mereka. Sejak awal, perusahaan ini fokus pada pengembangan teknologi dan praktik-praktik yang baik untuk meningkatkan hasil produksi. Seiring berjalannya waktu, perusahaan ini berhasil meningkatkan produktivitas perkebunan dan pertanian di wilayah kerjanya."
  ourTeamFarmer: "Tim Kebun"
  ourTeamOperasional: "Tim Operasional"
  happySentosaGarden: "Happy Sentosa Garden"
  happySentosaGardenDesc: "Merupakan salah satu usaha di bidang perkebunaan dalam naungan PT Multi Propertindo Indonesia. Dengan kegiatan yang mengusahakan tanaman mulai dari pembukaan dan persiapan lahan, proses pembibitan, pemeliharaan tanaman, panen, serta memasarkan hasil tanaman tersebut, dengan bantuan ilmu pengetahuan dan tenaga para petani yang profesional serta manajemen untuk mewujudkan kesejahteraan Happy Sentosa Garden"
en:
  aboutUs: "About Us"
  visionAndMission: "Vision And Mission"
  vision: "Our vision is to become a leading plantation and plantation company in the world that is able to provide added value to all stakeholders."
  mission: "<ol><li>increase the productivity of plantations and agriculture using technology</li><li>focus on developing social programs aimed at improving the welfare of local communities.</li></ol>"
  history: "Our History"
  historyDesc: "This company was founded by a group of farmers and businessmen who wanted to increase the productivity of plantations and agriculture in their area. Since its inception, the company has focused on developing technology and good practices to increase production output. Over time, this company has succeeded in increasing the productivity of plantations and agriculture in its working area."
  ourTeamFarmer: "Garden Team"
  ourTeamOperasional: "Operational Team"
  happySentosaGarden: "Happy Sentosa Garden"
  happySentosaGardenDesc: "Is one of the businesses in the plantation sector under the auspices of PT Multi Propertindo Indonesia. With activities that cultivate plants starting from land clearing and preparation, nursery processes, plant maintenance, harvesting, and marketing of these crops, with the help of science and professional farmers and management to realize the welfare of Happy Sentosa Garden"
</i18n>
