<template>
  <main>
    <section
      class="w-full py-48 bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div class="px-36">
        <div class="text-6xl font-bold text-white">
          {{ t("mainText") }}
          <div class="mt-10">
            <Button bg-class="bg-secondary" title="Pelajari Lebih Lanjut" />
          </div>
        </div>
      </div>
    </section>

    <WrapperSection>
      <TextSectionLabel :title="t('aboutUsLabel')" />
      <div class="mt-5 flex justify-between">
        <div class="w-[50%]">
          <div class="text-3xl font-bold">
            {{ t("aboutUsTitle") }}
          </div>
          <div class="mt-5">
            <div class="mt-5">
              <p>
                {{ t("aboutUsDesc") }}
              </p>
              <p>
                {{ t("aboutUsDescc") }}
              </p>
              <Button bg-class="bg-secondary" title="Pelajari Lebih Lanjut" />
            </div>
          </div>
        </div>
        <div class="w-[40%]">
          <Image src="/about-us.jpg" />
        </div>
      </div>

      <div class="flex justify-center">
        <Quote
          class="w-[100%] md:w-[80%] xl:w-[60%] translate-y-[8rem]"
          quote="Pertanian adalah profesi terbaik di dunia. Anda dapat menanam, menyiram, dan merasakan kepuasan yang tak ternilai saat melihat hasilnya tumbuh dan tumbuh."
          creator="Joel Salatin"
        />
      </div>
    </WrapperSection>

    <WrapperSection class="bg-[#F9F9F9]">
      <TextSectionLabel title="Apa yang kami lakukan" />
      <div class="mt-5 flex">
        <div class="w-[30%] space-y-3">
          <div class="font-bold">Kemitraan dengan petani</div>
          <div class="font-bold">Penelitian dan pengembangan</div>
          <div class="font-bold">Benih Topas</div>
          <div class="font-bold">Komitmen Berkelanjutan</div>
        </div>
        <div class="w-[70%] space-y-8">
          <div class="font-bold text-2xl">
            Menjunjung tinggi kemitraan petani dalam menjaga keseimbangan
            ekosistem pertanian
          </div>
          <div class="flex">
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
            <div class="w-[100%]">
              <Image src="/about-us.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </WrapperSection>

    <WrapperSection class="bg-primary">
      <div class="w-[50%] text-3xl text-white font-bold">
        Tujuan kami selalu menjadikan petani sebagai tempat untuk menumbuhkan
        kehidupan yang lebih baik
        <hr class="bg-white mt-5 border-t-2" />
      </div>
      <div class="mt-14 grid grid-cols-3 gap-7">
        <Image
          :is-previewable="true"
          src="/gallery/gallery-1.jpg"
          alt="gallery 1"
        />
        <Image
          :is-previewable="true"
          src="/gallery/gallery-2.jpg"
          alt="gallery 2"
        />
        <Image
          :is-previewable="true"
          src="/gallery/gallery-3.jpg"
          alt="gallery 3"
        />
        <Image
          :is-previewable="true"
          src="/gallery/gallery-4.jpg"
          alt="gallery 4"
        />
        <Image
          :is-previewable="true"
          src="/gallery/gallery-5.jpg"
          alt="gallery 5"
        />
        <Image
          :is-previewable="true"
          src="/gallery/gallery-6.jpg"
          alt="gallery 6"
        />
      </div>

      <div class="mt-8 flex justify-center">
        <Button bg-class="bg-secondary" title="Lihat Semua" />
      </div>
    </WrapperSection>

    <WrapperSection>
      <div class="flex justify-around">
        <div class="text-center">
          <Image
            src="/statistic/wheat.svg"
            alt="wheat"
            class="w-[60%] mx-auto"
          />
          <div class="mt-2 text-primary text-2xl font-bold">12</div>
          <div class="mt-2 text-lg font-semibold">PERKEBUNAN</div>
        </div>
        <div class="text-center">
          <Image
            src="/statistic/wheat.svg"
            alt="wheat"
            class="w-[60%] mx-auto"
          />
          <div class="mt-2 text-primary text-2xl font-bold">1,000</div>
          <div class="mt-2 text-lg font-semibold">
            HEKTAR PERKEBUNAN
            <br />
            MILIK PERUSAHAAN
          </div>
        </div>
        <div class="text-center">
          <Image
            src="/statistic/wheat.svg"
            alt="wheat"
            class="w-[60%] mx-auto"
          />
          <div class="mt-2 text-primary text-2xl font-bold">130</div>
          <div class="mt-2 text-lg font-semibold">PETANI LADANG</div>
        </div>
      </div>
    </WrapperSection>

    <WrapperSection class="bg-[#F9F9F9]">
      <div class="flex">
        <div class="w-[20%] text-3xl font-bold">Berita</div>
        <div class="flex-1 grid grid-cols-2 gap-20">
          <NewsThumbnail
            image="/about-us.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
          />
          <NewsThumbnail
            image="/gallery/gallery-1.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
          />
          <NewsThumbnail
            image="/gallery/gallery-2.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
          />
          <NewsThumbnail
            image="/gallery/gallery-3.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
          />
        </div>
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
