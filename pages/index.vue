<template>
  <NSpin :show="pending">
    <main v-if="res">
      <section
        :style="`background: url(${res.data.title_image}) no-repeat center center; background-size: cover;`"
        class="w-full py-44 bg-cover bg-center bg-no-repeat"
      >
        <div class="max-md:px-10 md:px-36">
          <div class="max-md:text-3xl md:text-6xl font-bold text-white">
            {{ res.data.title }}
          </div>
        </div>
      </section>

      <WrapperSection class="py-20">
        <TextSectionLabel :title="t('aboutUsLabel')" />
        <div class="mt-10 md:flex md:justify-between">
          <div class="basis-1/2 max-md:w-full">
            <div class="mt-10">
              <p>
                {{ res.data.about }}
              </p>
            </div>
          </div>
          <div class="basis-1/2 max-md:w-full px-20">
            <Image v-if="res.data.about_image" :src="res.data.about_image" />
          </div>
        </div>
      </WrapperSection>

      <WrapperSection class="bg-primary">
        <GalleryShowcase />
      </WrapperSection>

      <WrapperSection class="bg-[#F9F9F9]">
        <CsrShowcase />
      </WrapperSection>

      <div class="fixed right-8 bottom-8 md:right-14 md:bottom-14">
        <WhatsappBubble />
      </div>
    </main>
  </NSpin>
</template>

<script setup lang="ts">
import { NSpin } from "naive-ui";

const { t, locale } = useI18n();
const { API_LIST } = useApiUrl();

const pending = ref(true);
const res = ref<any>({ data: {} });

const loadData = async () => {
  pending.value = true;

  await $fetch<any>(API_LIST.GET_HOME_VIEW, {
    params: {
      lang: locale.value,
    },
  })
    .then((val) => {
      if (val) {
        console.log(val);
        res.value.data = val.data;
      }
    })
    .finally(() => (pending.value = false));
};

watch(locale, () => loadData(), {
  immediate: true,
});
</script>

<i18n lang="yaml">
en:
  mainText: "High quality natural products, for customer satisfaction"
  learnMore: "Learn More"
  aboutUsLabel: "About Us"
  aboutUsTitle: "Our Journey in the Agricultural World"
  aboutUsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  aboutUsDescc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  whatWeDoTitle: "What we do"
  whatWeDoPatnership: "Partnership with farmers"
  whatWeDoDevelopment: "Research and development"
  whatWeDoTopas: "Topas seed"
  whatWeDoCommitment: "Ongoing commitment"
  quote: "Agriculture is the best profession in the world. You can make it, water, and feel invaluable satisfaction when you see the results grow and grow."
  plantation: "PLANTATION"
  hectares: "HECTARES OF PLANTATIONS"
  companyProperty: "COMPANY PROPERTY"
  farmersFields: "FARMERS FIELDS"
  news: "News"
  effective: "The effectiveness of farmers in life"

id:
  mainText: "Hasil alam yang berkualitas, untuk kepuasan pelanggan yang tinggi"
  learnMore: "Pelajari Lebih Lanjut"
  aboutUsLabel: "Tentang Kami"
  aboutUsTitle: "Perjalanan Kami dalam Dunia Pertanian"
  aboutUsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  aboutUsDescc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  whatWeDoTitle: "Apa yang kita lakukan"
  whatWeDoPatnership: "Kemitraan dengan petani"
  whatWeDoDevelopment: "Penelitian dan pengembangan"
  whatWeDoTopas: "Benih Topas"
  whatWeDoCommitment: "Komitmen Berkelanjutan"
  quote: "Pertanian adalah profesi terbaik di dunia. Anda dapat menanam, menyiram, dan merasakan kepuasan yang tak ternilai saat melihat hasilnya tumbuh dan tumbuh."
  plantation: "PERKEBUNAN"
  hectares: "HEKTAR PERKEBUNAN"
  companyProperty: "PROPERTI PERUSAHAAN"
  farmersFields: "PETANI LADANG"
  news: "Berita"
  effective: "Efektivitas petani dalam kehidupan"
</i18n>
