<template>
  <main>
    <section
      class="w-full py-44 bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div class="max-md:px-10 md:px-36">
        <div class="max-md:text-3xl md:text-6xl font-bold text-white">
          {{ t("mainText") }}
          <div class="mt-10">
            <Button bg-class="bg-secondary" :title="t('learnButton')" />
          </div>
        </div>
      </div>
    </section>
    <WrapperSection class="mt-10">
      <TextSectionLabel :title="t('aboutUsLabel')" />
      <div class="mt-10 md:flex md:justify-between">
        <div class="md:w-[50%] max-md:w-full">
          <div class="text-3xl font-bold">
            {{ t("aboutUsTitle") }}
          </div>
          <div class="mt-10">
            <p>
              {{ t("aboutUsDesc") }}
            </p>
            <p>
              {{ t("aboutUsDescc") }}
            </p>
            <Button
              class="my-10"
              bg-class="bg-secondary"
              :title="t('learnButton')"
            />
          </div>
        </div>
        <div class="max-md:w-full md:w-[40%] px-20">
          <Image src="/about-us.jpg" />
        </div>
      </div>

      <div class="flex justify-center px-10">
        <Quote
          class="w-[100%] md:w-[80%] xl:w-[60%] max-md:translate-y-[4rem] md:translate-y-[5rem] max-md:text-sm"
          :quote="t('quote')"
          creator="Joel Salatin"
        />
      </div>
    </WrapperSection>

    <WrapperSection class="bg-[#F9F9F9]">
      <br /><br /><br /><br /><br /><br />
      <div class="mt-5 md:flex">
        <div class="md:w-[30%] space-y-3">
          <TextSectionLabel :title="t('whatWeDoTitle')" />

          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            {{ t("whatWeDoPatnership") }}
          </div>
          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            {{ t("whatWeDoDevelopment") }}
          </div>
          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            {{ t("whatWeDoTopas") }}
          </div>
          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            {{ t("whatWeDoCommitment") }}
          </div>
        </div>
        <br class="md:hidden" />
        <br class="md:hidden" />

        <div class="md:w-[70%] space-y-8">
          <div class="font-bold text-2xl">
            {{ t("ecosystem") }}
          </div>
          <div class="md:flex">
            <div class="pr-5">
              <p>
                {{ t("acosystemAbout1") }}
              </p>
              <p class="mt-3">
                {{ t("acosystemAbout2") }}
              </p>
            </div>
            <br class="md:hidden" />
            <div class="w-[100%] max-md:px-5">
              <Image src="/about-us.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </WrapperSection>

    <WrapperSection class="bg-primary">
      <br /><br />
      <div
        class="max-md:w-full md:w-[50%] max-md:text-xl md:text-3xl text-white font-bold"
      >
        {{ t("ourGoal") }}

        <hr class="bg-white mt-5 border-t-2" />
      </div>
      <NSpin :show="pending">
        <div
          v-if="gallery.length > 0"
          class="mt-14 grid max-md:grid-cols-2 md:grid-cols-3 gap-7"
        >
          <Image
            v-for="(data, index) in gallery"
            :key="index"
            :is-previewable="true"
            :src="`http://localhost:8000${data.image}`"
            alt="gallery 1"
          />
        </div>
      </NSpin>

      <div class="mt-8 flex justify-center">
        <NuxtLink to="/gallery">
          <Button bg-class="bg-secondary" :title="t('seeAll')" />
        </NuxtLink>
      </div>
      <br /><br />
    </WrapperSection>

    <WrapperSection>
      <br /><br />
      <div class="flex justify-around">
        <div class="text-center">
          <Image
            src="/statistic/wheat.svg"
            alt="wheat"
            class="max-md:w-[50%] md:w-[60%] mx-auto"
          />
          <div class="mt-2 text-primary max-md:text-xl md:text-2xl font-bold">
            12
          </div>
          <div class="mt-2 max-md:text-base md:text-lg font-semibold">
            {{ t("plantation") }}
          </div>
        </div>
        <div class="text-center">
          <Image
            src="/statistic/wheat.svg"
            alt="wheat"
            class="max-md:w-[50%] md:w-[60%] mx-auto"
          />
          <div class="mt-2 text-primary max-md:text-xl md:text-2xl font-bold">
            1,000
          </div>
          <div class="mt-2 max-md:text-base md:text-lg font-semibold">
            {{ t("hectares") }}
            <br />
            {{ t("companyProperty") }}
          </div>
        </div>
        <div class="text-center">
          <Image
            src="/statistic/wheat.svg"
            alt="wheat"
            class="max-md:w-[50%] md:w-[60%] mx-auto"
          />
          <div class="mt-2 text-primary max-md:text-xl md:text-2xl font-bold">
            130
          </div>
          <div class="mt-2 max-md:text-base md:text-lg font-semibold">
            {{ t("farmersFields") }}
          </div>
        </div>
      </div>
    </WrapperSection>
    <br /><br />
    <WrapperSection class="bg-[#F9F9F9]">
      <br /><br />
      <div class="md:flex">
        <div class="w-[20%] max-md:text-2xl md:text-3xl font-bold">
          {{ t("news") }}
        </div>
        <br />
        <div class="md:flex-1 md:grid md:grid-cols-2 md:gap-20">
          <NewsThumbnail
            image="/about-us.jpg"
            :title="t('effective')"
            date="Juli 20, 2022"
            class="max-md:mb-10"
          />
          <NewsThumbnail
            image="/gallery/gallery-1.jpg"
            :title="t('effective')"
            date="Juli 20, 2022"
            class="max-md:mb-10"
          />
          <NewsThumbnail
            image="/gallery/gallery-2.jpg"
            :title="t('effective')"
            date="Juli 20, 2022"
            class="max-md:mb-10"
          />
          <NewsThumbnail
            image="/gallery/gallery-3.jpg"
            :title="t('effective')"
            date="Juli 20, 2022"
            class="max-md:mb-10"
          />
        </div>
      </div>
      <br /><br /><br /><br />
    </WrapperSection>

    <div class="fixed right-8 bottom-8 md:right-14 md:bottom-14">
      <WhatsappBubble />
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
const gallery = ref([]);
const { pending, data: posts } = useLazyFetch(
  "http://localhost:8000/api/gallery"
);
watch(posts, (newPosts: any) => {
  gallery.value.push(...newPosts.data);
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
  learnButton: "Learn further"
  ecosystem: "Upholding farmers' partnerships in maintaining balance
    agricultural ecosystem"
  acosystemAbout1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut neque eget nisl dapibus aliquam. Duis in velit eu orci aliquam laoreet imperdiet vitae turpis."
  acosystemAbout2: "Ut bibendum enim vel porttitor ornare. Nullam non accumsan elit, elementum rutrum ex. Morbi aliquam hendrerit semper. Ut mollis commodo lacus, eget viverra dui"
  ourGoal: "Our goal is to always make farmers a place to grow a better life"
  seeAll: "See All"
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
  learnButton: "Pelajari Lebih Lanjut"
  quote: "Pertanian adalah profesi terbaik di dunia. Anda dapat menanam, menyiram, dan merasakan kepuasan yang tak ternilai saat melihat hasilnya tumbuh dan tumbuh."
  ecosystem: "Menjunjung tinggi kemitraan petani dalam menjaga keseimbangan
    ekosistem pertanian"
  acosystemAbout1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut neque eget nisl dapibus aliquam. Duis in velit eu orci aliquam laoreet imperdiet vitae turpis."
  acosystemAbout2: "Ut bibendum enim vel porttitor ornare. Nullam non accumsan elit, elementum rutrum ex. Morbi aliquam hendrerit semper. Ut mollis commodo lacus, eget viverra dui"
  ourGoal: "Tujuan kami selalu menjadikan petani sebagai tempat untuk menumbuhkan kehidupan yang lebih baik"
  seeAll: "Lihat Semua"
  plantation: "PERKEBUNAN"
  hectares: "HEKTAR PERKEBUNAN"
  companyProperty: "PROPERTI PERUSAHAAN"
  farmersFields: "PETANI LADANG"
  news: "Berita"
  effective: "Efektivitas petani dalam kehidupan"
</i18n>
