<template>
  <div class="bg-primary min-h-screen overflow-x-hidden">
    <div class="pt-5 pb-20">
      <div class="max-md:px-10 max-lg:px-20 lg:px-36 z-50">
        <div class="flex justify-center text-white font-semibold mt-10">
          <p class="mr-5" :class="{ 'border-b': active == 'tersedia' }">
            Tersedia
          </p>
          <p>
            Dalam Kebun
          </p>
        </div>
        <h1 class="text-2xl font-bold text-gray-50 my-10">
          All fresh Product
        </h1>
        <div class="grid gap-10 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-2">
          <NuxtLink v-for="(gallery, index) in galleries" to="/product/detail">
            <div
            class="bg-gray-200 rounded-xl shadow"          
            :key="index">
            <div :class="[ `bg-[url('${gallery.img}')]` ]" class="w-full h-52 bg-cover rounded-xl bg-center"></div>
            <div class="px-5 py-4">
              <p class="font-bold text-gray-800 text-lg leading-[1rem]">
                {{ gallery.fruit }}
              </p>
              <small class="mb-2 font-bold text-gray-500">{{ gallery.qty }}</small>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>

const active = 'tersedia';

const galleries = ref([
{
  img: "/gallery/gallery-bananas.jpg",
  fruit: "Pisang",
  qty: "Total Buah 10 Buah",
},
{
  img: "/gallery/gallery-anggur.jpg",
  fruit: "Peer",
  qty: "Total Buah 10 Buah",
},
{
  img: "/gallery/gallery-fruit.jpg",
  fruit: "Buah Naga",
  qty: "Total Buah 10 Buah",
},
{
  img: "/gallery/gallery-oranges.jpg",
  fruit: "Jeruk",
  qty: "Total Buah 10 Buah",
},
]);



</script>
