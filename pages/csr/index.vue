<template>
  <div class="min-h-screen overflow-x-hidden bg-[#f1f1f1]">
    <div class="py-1">
      <div class="absolute z-[-1] w-full overflow-x-hidden"></div>
      <div class="max-md:px-20 px-36 z-50">
        <h1 class="text-3xl font-bold mt-20 mb-10 text-center">
          CORPORATE SOCIAL RESPONSIBILITY
        </h1>
        <div class="pb-20 w-full">
          <div class="">
            <div class="md:flex py-5 m-auto" v-for="(card, index) in csr" :key="index">
            <div class="lg:w-4/12 md:w-6/12 max-md:mb-5">
              <img
              :src="card.img"
              alt=""
              class="w-full shadow-xl"
              />
            </div>
            <div class="md:px-7 max-md:w-full w-8/12">
              <small class="text-gray-600 font-[Poppins] font-semibold text-xs">
                {{ card.tanggal }}
              </small>  
              <p class="text-2xl mt-1 font-bold ">{{ card.title }}</p>
              <small class="font-[Poppins] font-semibold">{{ card.ket }}</small>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" setup>
const csr = ref([
{
  img: "/gallery/mommy-vegetable.png",
  tanggal: "8 desember 2023",
  title: "Upaya pengendalian hama tanaman dalam bidang pertanian",
  ket: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

},
{
  img: "/gallery/gallery-7.jpg",
  tanggal: "8 desember 2023",
  title: "Kolaborasi antara petani dan peneliti untuk memberikan solusi dalam mengatasi pertanian",
  ket: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

},
{
  img: "/gallery/gallery-8.jpg",
  tanggal: "8 desember 2023",
  title: "Pemberian pupuk dan irigasi dapat mempengaruhi kualitas hasil panen dari tanaman",
  ket: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

},
{
  img: "/gallery/gallery-9.jpg",
  tanggal: "8 desember 2023",
  title: "Pertanian adalah sektor ekonomi yang penting bagi keberlangsungan hidup",
  ket: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

}
]);
</script>