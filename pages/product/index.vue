<template>
  <div class="bg-primary min-h-screen overflow-x-hidden">
    <div class="pb-20">
      <div class="absolute z-[-1] w-full overflow-x-hidden"></div>
      <div class="max-md:px-10 md:px-10 lg:px-36 z-50">
        <h1 class="text-2xl font-bold text-gray-50 mt-20 mb-10 font-[Poppins]">
          Tersedia
        </h1>
        <div class="grid gap-16 md:grid-cols-2 sm:grid-cols-1">
          <NuxtLink
            v-for="(data, index) in datas"
            to="/product/category"
            v:key="index"
            :img="data.img"
          >
            <div class="bg-gray-200 rounded-xl shadow">
              <div
                class="bg-[url('/gallery/miki.jpg')] w-full h-64 bg-center rounded-xl bg-cover"
              >
                <div class="pb-10 absolute relative h-full rounded-xl">
                  <div
                    class="bg-gradient-to-t from-black h-full w-full absolute rounded-xl opacity-60"
                  ></div>
                  <div class="absolute px-5 py-3" style="bottom: 0">
                    <p
                      class="font-semibold text-white text-xl mb-1 opacity-100"
                    >
                      {{ data.title }}
                    </p>
                    <small class="font-medium font-[Poppins] text-white"
                      >Contact: {{ data.contact }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<script setup>
let datas = [
  {
    title: "Alpukal Miki",
    contact: "085881234491 (Andi Setiawan)",
    items: [
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
    ],
  },
  {
    title: "Alpukal Miki 2",
    contact: "085881234491 (Andi Setiawan)",
    items: [
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
    ],
  },
];
</script>
