<template>
  <main>
    <section
      class="w-full py-44 bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div class="max-md:px-10 md:px-36">
        <div class="max-md:text-3xl md:text-6xl font-bold text-white">
          {{ t("mainText") }}
          <div class="mt-10">
            <Button bg-class="bg-secondary" title="Pelajari Lebih Lanjut" />
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
              title="Pelajari Lebih Lanjut"
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
          <TextSectionLabel title="Apa yang kami lakukan" />

          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            Kemitraan dengan petani
          </div>
          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            Penelitian dan pengembangan
          </div>
          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            Benih Topas
          </div>
          <div class="font-bold max-md:border-b max-md:border-gray-200 pb-1">
            Komitmen Berkelanjutan
          </div>
        </div>
        <br class="md:hidden" />
        <br class="md:hidden" />

        <div class="md:w-[70%] space-y-8">
          <div class="font-bold text-2xl">
            Menjunjung tinggi kemitraan petani dalam menjaga keseimbangan
            ekosistem pertanian
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
        Tujuan kami selalu menjadikan petani sebagai tempat untuk menumbuhkan
        kehidupan yang lebih baik
        <hr class="bg-white mt-5 border-t-2" />
      </div>
      <div class="mt-14 grid max-md:grid-cols-2 md:grid-cols-3 gap-7">
        <Image
          v-for="(data, index) in gallery"
          :key="index"
          :is-previewable="true"
          :src="`http://localhost:8000${data.image}`"
          alt="gallery 1"
        />
      </div>

      <div class="mt-8 flex justify-center">
        <NuxtLink to="/gallery">
          <Button bg-class="bg-secondary" title="Lihat Semua" />
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
            PERKEBUNAN
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
            HEKTAR PERKEBUNAN
            <br />
            MILIK PERUSAHAAN
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
            PETANI LADANG
          </div>
        </div>
      </div>
    </WrapperSection>
    <br /><br />
    <WrapperSection class="bg-[#F9F9F9]">
      <br /><br />
      <div class="md:flex">
        <div class="w-[20%] max-md:text-2xl md:text-3xl font-bold">Berita</div>
        <br />
        <div class="md:flex-1 md:grid md:grid-cols-2 md:gap-20">
          <NewsThumbnail
            image="/about-us.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
            class="max-md:mb-10"
          />
          <NewsThumbnail
            image="/gallery/gallery-1.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
            class="max-md:mb-10"
          />
          <NewsThumbnail
            image="/gallery/gallery-2.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
            class="max-md:mb-10"
          />
          <NewsThumbnail
            image="/gallery/gallery-3.jpg"
            title="Efektivitas petani dalam kehidupan"
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
  "http://localhost:8000/api/dashboard"
);
watch(posts, (newPosts) => {
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
id:
  mainText: "Hasil alam yang berkualitas, untuk kepuasan pelanggan yang tinggi"
  learnMore: "Pelajari Lebih Lanjut"
  aboutUsLabel: "Tentang Kami"
  aboutUsTitle: "Perjalanan Kami dalam Dunia Pertanian"
  aboutUsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  aboutUsDescc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</i18n>
