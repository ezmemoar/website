<template>
  <main>
    <section
      class="w-full py-48 bg-[url('~/assets/banner.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div class="px-36">
        <div class="text-6xl font-bold text-white">
          Hasil alam yang berkualitas,
          <br />
          untuk kepuasan pelanggan
          <br />
          yang tinggi
          <div class="mt-10">
            <Button class="text-base" title="Pelajari Lebih Lanjut" />
          </div>
        </div>
      </div>
    </section>

    <WrapperSection>
      <TextSectionLabel title="Tentang Kami" />
      <div class="mt-5 flex justify-between">
        <div class="w-[50%]">
          <div class="text-3xl font-bold">
            Perjalanan Kami dalam Dunia Pertanian
          </div>
          <div class="mt-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div class="mt-5">
              <Button class="text-base" title="Pelajari Lebih Lanjut" />
            </div>
          </div>
        </div>
        <div class="w-[40%]">
          <img src="~/assets/about-us.jpg" class="rounded" />
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
              <img src="~/assets/about-us.jpg" class="rounded" alt="" />
            </div>
          </div>
        </div>
      </div>
    </WrapperSection>

    <WrapperSection class="bg-[#1D5796]">
      <div class="w-[50%] text-3xl text-white font-bold">
        Tujuan kami selalu menjadikan petani sebagai tempat untuk menumbuhkan
        kehidupan yang lebih baik
        <hr class="bg-white mt-5 border-t-2" />
      </div>
      <div class="mt-14 grid grid-cols-3 gap-7">
        <img
          src="~/assets/gallery/gallery-1.jpg"
          class="rounded"
          alt="gallery 1"
        />
        <img
          src="~/assets/gallery/gallery-2.jpg"
          class="rounded"
          alt="gallery 2"
        />
        <img
          src="~/assets/gallery/gallery-3.jpg"
          class="rounded"
          alt="gallery 3"
        />
        <img
          src="~/assets/gallery/gallery-4.jpg"
          class="rounded"
          alt="gallery 4"
        />
        <img
          src="~/assets/gallery/gallery-5.jpg"
          class="rounded"
          alt="gallery 5"
        />
        <img
          src="~/assets/gallery/gallery-6.jpg"
          class="rounded"
          alt="gallery 6"
        />
      </div>

      <div class="mt-5 flex justify-center">
        <Button class="text-base" title="Lihat Semua" />
      </div>
    </WrapperSection>

    <WrapperSection>
      <div class="flex justify-around">
        <div class="text-center">
          <img
            src="~/assets/statistic/wheat.svg"
            alt="wheat"
            class="w-[60%] mx-auto"
          />
          <div class="mt-2 text-[#1D5796] text-2xl font-bold">12</div>
          <div class="mt-2 text-lg font-semibold">PERKEBUNAN</div>
        </div>
        <div class="text-center">
          <img
            src="~/assets/statistic/wheat.svg"
            alt="wheat"
            class="w-[60%] mx-auto"
          />
          <div class="mt-2 text-[#1D5796] text-2xl font-bold">1,000</div>
          <div class="mt-2 text-lg font-semibold">
            HEKTAR PERKEBUNAN
            <br />
            MILIK PERUSAHAAN
          </div>
        </div>
        <div class="text-center">
          <img
            src="~/assets/statistic/wheat.svg"
            alt="wheat"
            class="w-[60%] mx-auto"
          />
          <div class="mt-2 text-[#1D5796] text-2xl font-bold">130</div>
          <div class="mt-2 text-lg font-semibold">PETANI LADANG</div>
        </div>
      </div>
    </WrapperSection>

    <WrapperSection class="bg-[#F9F9F9]">
      <div class="flex">
        <div class="w-[20%] text-3xl font-bold">Berita</div>
        <div class="flex-1 grid grid-cols-2 gap-20">
          <NewsThumbnail
            image="~/assets/about-us.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
          />
          <NewsThumbnail
            image="~/assets/gallery/gallery-1.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
          />
          <NewsThumbnail
            image="~/assets/gallery/gallery-2.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
          />
          <NewsThumbnail
            image="~/assets/gallery/gallery-3.jpg"
            title="Efektivitas petani dalam kehidupan"
            date="Juli 20, 2022"
          />
        </div>
      </div>
    </WrapperSection>
  </main>
</template>

<script setup lang="ts"></script>
