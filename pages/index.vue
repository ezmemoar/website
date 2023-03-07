<template>
  <main>
    <section
      class="w-full py-44 bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div class="max-md:px-10 md:px-36">
        <div class="max-md:text-3xl md:text-6xl font-bold text-white">
          {{ t("mainText") }}
          <div class="mt-10">
            <Button bg-class="bg-secondary" :title="t('learnMore')" />
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
              class="mt-10"
              bg-class="bg-secondary"
              :title="t('learnMore')"
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
          quote="Pertanian adalah profesi terbaik di dunia. Anda dapat menanam, menyiram, dan merasakan kepuasan yang tak ternilai saat melihat hasilnya tumbuh dan tumbuh."
          creator="Joel Salatin"
        />
      </div>
    </WrapperSection>

    <WrapperSection class="bg-[#F9F9F9]">
      <br /><br /><br /><br /><br /><br />
      <div class="mt-5 md:flex">
        <div class="md:w-[30%] space-y-3">
          <TextSectionLabel :title="t('whatWeDo')" />

          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            {{ t("farmerPartnership") }}
          </div>
          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            {{ t("researchAndDevelopment") }}
          </div>
          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            {{ t("topazSeed") }}
          </div>
          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            {{ t("sustainableCommitment") }}
          </div>
        </div>
        <br class="md:hidden" />
        <br class="md:hidden" />

        <div class="md:w-[70%] space-y-8">
          <div class="font-bold text-2xl">
            {{ t('agriculturalBalance') }}
          </div>
          <div class="md:flex">
            <div class="pr-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ut neque eget nisl dapibus aliquam. Duis in velit eu orci
                aliquam laoreet imperdiet vitae turpis.
              </p>
              <p class="mt-3">
                Ut bibendum enim vel porttitor ornare. Nullam non accumsan elit,
                elementum rutrum ex. Morbi aliquam hendrerit semper. Ut mollis
                commodo lacus, eget viverra dui
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
        {{ t('ourGoal') }}
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
            :src="`${data.image}`"
            alt="gallery 1"
          />
        </div>
      </NSpin>

      <div class="mt-8 flex justify-center">
        <NuxtLink to="/gallery">
          <Button bg-class="bg-secondary" :title="t('learnMore')" />
        </NuxtLink>
      </div>
      <br /><br />
    </WrapperSection>

    <WrapperSection class="bg-[#F9F9F9] pt-20">
      <div class="space-y-5 md:space-y-0 md:flex md:gap-7">
        <div class="md:basis-1/12 max-md:text-2xl md:text-3xl font-bold">
          {{ t('csr') }}
        </div>
        <div class="md:basis-11/12">
          <CsrShowcase />
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
import { NSpin } from "naive-ui";

const { t } = useI18n();
const gallery = ref<any>([]);
const { pending, data: posts } = useLazyFetch(
  "http://localhost:8000/api/gallery"
);
watch(posts, (newPosts: any) => {
  gallery.value.push(...newPosts.data);
  // console.log(newPosts);
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
  whatWeDo: "What We Do"
  farmerPartnership: "Partnership with farmers"
  researchAndDevelopment: "Research and Development"
  topazSeed: "Topaz Seed"
  sustainableCommitment: "Sustainable Commitment"
  agriculturalBalance: "Uphold farmer partnerships in maintaining the balance of agricultural ecosystems"
  ourGoal: "Our goal has always been to make farmers a place to grow a better life"
  csr: "Corporate Social Responsibility"
id:
  mainText: "Hasil alam yang berkualitas, untuk kepuasan pelanggan yang tinggi"
  learnMore: "Pelajari Lebih Lanjut"
  aboutUsLabel: "Tentang Kami"
  aboutUsTitle: "Perjalanan Kami dalam Dunia Pertanian"
  aboutUsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  aboutUsDescc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  whatWeDo: "Apa yang kami lakukan"
  farmerPartnership: "Kemitraan dengan petani"
  researchAndDevelopment: "Penelitian dan pengembangan"
  topazSeed: "Benih Topas"
  sustainableCommitment: "Komitmen Berkelanjutan"
  agriculturalBalance: "Menjunjung tinggi kemitraan petani dalam menjaga keseimbangan ekosistem pertanian"
  ourGoal: "Tujuan kami selalu menjadikan petani sebagai tempat untuk menumbuhkan kehidupan yang lebih baik"
  csr: "Tanggung jawab sosial perusahaan"
</i18n>
