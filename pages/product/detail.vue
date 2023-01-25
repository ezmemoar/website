<template>
  <div class="bg-primary">
    <WrapperSection>
      <div class="mt-5 flex justify-between">
        <div class="flex-1">
          <Image src="/gallery/gallery-anggur.jpg" class="rounded-xl"/>
        </div>
        <div class="flex-1 flex justify-center items-center text-gray-100 pl-10">
          <div>
            <div class="text-3xl font-semibold">
              Anggur Merah
            </div>
            <br>
            <div class="font-semibold text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </div>
          </div>
        </div>
      </div>
    </WrapperSection>

    <WrapperSection class="font-medium text-base text-gray-100">
      <h1 class="text-2xl font-semibold">Toko yang Menyediakan</h1>
      <br />
      <br />
      <div class="flex grid grid-cols-3 gap-16" >
        <div class="bg-gray-200 rounded-xl shadow" v-for="(shop,index) in shops">
          <img
          src="/gallery/mommy-vegetable.png"
          alt=""
          class="w-full rounded-xl"
          />
          <div class="px-5 py-2">
            <NuxtLink
            to="/csr/detail"
            class="font-bold text-gray-800 text-sm mb-2"
            >{{ shop.pt }}</NuxtLink
            >
            <br />
            <small class="font-bold text-gray-500 font-[Poppins]"
            >{{ shop.qty }}</small
            >
          </div>
        </div>
      </div>
    </WrapperSection>
  </div>
</template>
<script type="text/javascript" setup>
const shops = ref([
{
  pt: 'PT Testing 1',
  qty: 'Total Buah 50 Buah'
},
{
  pt: 'PT Testing 2',
  qty: 'Total Buah 50 Buah'
},
{
  pt: 'PT Testing 3',
  qty: 'Total Buah 50 Buah'
},
{
  pt: 'PT Testing 4',
  qty: 'Total Buah 50 Buah'
},
{
  pt: 'PT Testing 5',
  qty: 'Total Buah 50 Buah'
},
{
  pt: 'PT Testing 6',
  qty: 'Total Buah 50 Buah'
},
]);
</script>
