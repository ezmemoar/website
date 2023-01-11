<template>
  <main>
    <section class="w-full pt-14 bg-cover bg-center bg-no-repeat">
      <div class="px-36">
        <div class="text-4xl font-bold text-primary">
          {{ t("aboutUs") }}
        </div>
      </div>
    </section>

    <WrapperSection>
      <div class="mt-5 flex justify-between">
        <div class="w-[50%]">
          <div class="mt-7">
            <TextSectionLabel :title="t('visionAndMission')" />
            <p class="mt-5">
              {{ t("vision") }}
            </p>
            <p class="mt-5" v-html="t('mission')"></p>
          </div>
        </div>
        <div class="w-[40%]">
          <Image src="/about-us.jpg" />
        </div>
      </div>
    </WrapperSection>

    <WrapperSection class="bg-primary text-white">
      <div class="mt-5 flex justify-between">
        <div class="w-[40%]">
          <Image src="/about-us.jpg" />
        </div>
        <div class="w-[50%]">
          <div class="mt-7">
            <TextSectionLabel class="!text-white" :title="t('history')" />
            <p class="mt-5" v-html="t('historyDesc')"></p>
          </div>
        </div>
      </div>
    </WrapperSection>

    <WrapperSection class="text-white">
      <div class="py-5 text-center">
        <TextSectionLabel :title="t('ourTeam')" />
      </div>
      <div class="mt-5 flex justify-around">
        <TeamCard name="Testing" position="IT Staff" />
        <TeamCard name="Testing" position="IT Staff" />
        <TeamCard name="Testing" position="IT Staff" />
      </div>
    </WrapperSection>

    <WrapperSection class="bg-[#F9F9F9]">
      <div class="py-5 text-center">
        <TextSectionLabel :title="t('happySentosaGarden')" />
      </div>
      <div class="mt-5 text-center px-20 text-lg">
        {{ t("happySentosaGardenDesc") }}
      </div>
    </WrapperSection>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>

<i18n lang="yaml">
id:
  aboutUs: "Tentang Kami"
  visionAndMission: "Visi dan Misi"
  vision: "Visi kami adalah adalah menjadi perusahaan perkebunan dan pertanian terkemuka di dunia yang mampu memberikan nilai tambah bagi seluruh stakeholder."
  mission: "<ol><li>meningkatkan produktivitas perkebunan dan pertanian dengan menggunakan teknologi</li><li>fokus pada pengembangan program sosial yang bertujuan untuk meningkatkan kesejahteraan masyarakat setempat.</li></ol>"
  history: "Sejarah Kami"
  historyDesc: "Perusahaan ini didirikan oleh sekelompok petani dan pebisnis yang ingin meningkatkan produktivitas perkebunan dan pertanian di wilayah mereka. Sejak awal, perusahaan ini fokus pada pengembangan teknologi dan praktik-praktik yang baik untuk meningkatkan hasil produksi. Seiring berjalannya waktu, perusahaan ini berhasil meningkatkan produktivitas perkebunan dan pertanian di wilayah kerjanya."
  ourTeam: "Team Kami"
  happySentosaGarden: "Happy Sentosa Garden"
  happySentosaGardenDesc: "Merupakan salah satu usaha di bidang perkebunaan dalam naungan Multi Propertindo Indonesia. Dengan kegiatan yang mengusahakan tanaman mulai dari pembukaan dan persiapan lahan, proses pembibitan, pemeliharaan tanaman, panen, serta memasarkan hasil tanaman tersebut, dengan bantuan ilmu pengetahuan dan tenaga para petani yang profesional serta manajemen untuk mewujudkan kesejahteraan HSG"
en:
  aboutUs: "About Us"
  visionAndMission: "Vision And Mission"
  vision: "Visi kami adalah adalah menjadi perusahaan perkebunan dan pertanian terkemuka di dunia yang mampu memberikan nilai tambah bagi seluruh stakeholder."
  mission: "<ol><li>meningkatkan produktivitas perkebunan dan pertanian dengan menggunakan teknologi</li><li>fokus pada pengembangan program sosial yang bertujuan untuk meningkatkan kesejahteraan masyarakat setempat.</li></ol>"
  history: "Our History"
  historyDesc: "Perusahaan ini didirikan oleh sekelompok petani dan pebisnis yang ingin meningkatkan produktivitas perkebunan dan pertanian di wilayah mereka. Sejak awal, perusahaan ini fokus pada pengembangan teknologi dan praktik-praktik yang baik untuk meningkatkan hasil produksi. Seiring berjalannya waktu, perusahaan ini berhasil meningkatkan produktivitas perkebunan dan pertanian di wilayah kerjanya."
  ourTeam: "Our Team"
  happySentosaGarden: "Happy Sentosa Garden"
  happySentosaGardenDesc: "Merupakan salah satu usaha di bidang perkebunaan dalam naungan Multi Propertindo Indonesia. Dengan kegiatan yang mengusahakan tanaman mulai dari pembukaan dan persiapan lahan, proses pembibitan, pemeliharaan tanaman, panen, serta memasarkan hasil tanaman tersebut, dengan bantuan ilmu pengetahuan dan tenaga para petani yang profesional serta manajemen untuk mewujudkan kesejahteraan HSG"
</i18n>
