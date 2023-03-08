<template>
  <div class="bg-primary min-h-screen overflow-x-hidden">
    <div class="pt-5 pb-20">
      <div class="max-md:px-10 max-lg:px-20 lg:px-36 z-50">
        <div class="flex justify-center text-white font-semibold mt-10">
          <NuxtLink to="/product/category">
          <p class="mr-5" :class="{ 'border-b': active == 'tersedia' }">
            {{ t('available') }}
          </p>
        </NuxtLink>
          <NuxtLink to="/product/hasilKebun" :class="{ 'border-b': active == 'tidak tersedia' }">
          <p> {{ t('product') }}</p>
        </NuxtLink>
        </div>
        <h1 class="text-2xl font-bold text-gray-50 my-10">Alpukat Miki</h1>
        <div
          class="grid gap-10 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-2"
        >
          <NuxtLink v-for="(gallery, index) in galleries" to="/product/detail">
            <div class="bg-gray-200 rounded-xl shadow" :key="index">
              <div
                :style="{ 'background-image': 'url(' + gallery.img + ')' }"
                class="w-full h-52 bg-cover rounded-xl bg-center"
              ></div>
              <div class="px-5 py-4">
                <p class="font-bold text-gray-800 text-lg leading-[1rem]">
                  {{ gallery.fruit }}
                </p>
                <small class="mb-2 font-bold text-gray-500">{{t('total')}} {{
                  gallery.qty
                }} {{t('fruit')}}</small>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n({
  useScope: "local",
});
const active = "tersedia";

const galleries = ref([
  {
    img: "/gallery/gallery-bananas.jpg",
    fruit: "Pisang",
    qty: "10",
  },
  {
    img: "/gallery/gallery-anggur.jpg",
    fruit: "Peer",
    qty: "10",
  },
  {
    img: "/gallery/gallery-fruit.jpg",
    fruit: "Buah Naga",
    qty: "10",
  },
  {
    img: "/gallery/gallery-oranges.jpg",
    fruit: "Jeruk",
    qty: "10",
  },
]);
</script>
<i18n lang="yaml">
en:
  available: "Available"
  contact: "Contact"
  product: "Garden products"
  total: "Total Fruit"
  fruit: "fruit"

id:
  available: "Tersedia"
  contact: "Kontak"
  product: "Hasil Kebun"
  total: "Total Buah"
  fruit: "Buah"

</i18n>