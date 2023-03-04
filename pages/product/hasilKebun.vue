<template>
  <div class="bg-primary min-h-screen overflow-x-hidden">
    <div class="pt-5 pb-20">
      <div class="max-md:px-10 max-lg:px-20 lg:px-36 z-50">
        <div class="flex justify-center text-white font-semibold mt-10">
          <NuxtLink to="/product/category">
            <p class="mr-5" :class="{ 'border-b': active == 'tersedia' }">
              Tersedia
            </p>
          </NuxtLink>
          <NuxtLink
            to="/poduct/hasilKebun"
            :class="{ 'border-b': active == 'tidak tersedia' }"
          >
            <p>Hasil Kebun</p>
          </NuxtLink>
        </div>
        <h1 class="text-2xl font-bold text-gray-50 my-10">Alpukat Miki</h1>
        <div class="grid gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div
            v-for="(gallery, index) in galleries"
            :key="index"
            @click="showContent(index)"
            class="cursor-pointer rounded"
          >
            <Image :src="gallery.img" :alt="gallery.img" is-animated />
          </div>
        </div>
        <NModal
          v-model:show="showModal"
          class="w-3/4 pb-5 px-5 pt-1"
          preset="card"
          transform-origin="center"
        >
          <div class="flex justify-between space-x-3">
            <img class="w-1/2 rounded" src="/gallery/mommy-vegetable.png" />
            <div class="w-1/2 py-2">
              <div class="text-lg font-bold">
                {{ selectedGallery.title }}
              </div>
              <div class="mt-3 text-base overflow-y-auto max-h-52">
                {{ selectedGallery.desc }}
              </div>
            </div>
          </div>
        </NModal>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NModal } from "naive-ui";
const active = "tidak tersedia";
const showModal = ref(false);

const galleries = ref([
  {
    img: "/gallery/mommy-vegetable.png",
    title: "Upaya pengendalian hama tanaman dalam bidang pertanian",
    desc: "lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. ",
  },
  {
    img: "/gallery/mommy-vegetable.png",
    title: "Testing 123",
    desc: "lorem ipsum dolor sit amet 123",
  },
  {
    img: "/gallery/mommy-vegetable.png",
    title: "Testing 4324",
    desc: "lorem ipsum dolor sit amet 34534",
  },
  {
    img: "/gallery/mommy-vegetable.png",
    title: "Upaya pengendalian hama tanaman dalam bidang pertanian",
    desc: "lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. ",
  },
  {
    img: "/gallery/mommy-vegetable.png",
    title: "Testing 123",
    desc: "lorem ipsum dolor sit amet 123",
  },
  {
    img: "/gallery/mommy-vegetable.png",
    title: "Testing 4324",
    desc: "lorem ipsum dolor sit amet 34534",
  },
  {
    img: "/gallery/mommy-vegetable.png",
    title: "Upaya pengendalian hama tanaman dalam bidang pertanian",
    desc: "lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. lorem ipsum dolor sit amet 3463456. ",
  },
  {
    img: "/gallery/mommy-vegetable.png",
    title: "Testing 123",
    desc: "lorem ipsum dolor sit amet 123",
  },
  {
    img: "/gallery/mommy-vegetable.png",
    title: "Testing 4324",
    desc: "lorem ipsum dolor sit amet 34534",
  },
]);
const selectedIndex = ref(0);
const selectedGallery = computed(() => galleries.value[selectedIndex.value]);
const showContent = (index: number) => {
  selectedIndex.value = index;
  showModal.value = true;
};
</script>
