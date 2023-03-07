<template>
  <div class="bg-primary">
    <WrapperSection class="pt-10">
      <div class="mt-5 flex justify-between bg-gray-100 pt-5 pb-5 px-5 rounded-xl text-black">
        <div class="flex-1">
          <div class="rounded-xl max-md:h-52 md:h-72 bg-[url('/gallery/gallery-anggur.jpg')] bg-cover bg-center"/>
        </div>
        <div class="flex-1 flex pl-10">
          <div>
            <div class="max-md:text-2xl md:text-3xl font-bold border-b-[2px] border-primary md:pt-5 max-md:pb-1 md:pb-2">
              Anggur Merah
            </div>
            <div class="font-bold max-md:text-sm md:text-base pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. 
            </div>
          </div>
        </div>
      </div>
    </WrapperSection>

    <WrapperSection class="font-medium text-base text-gray-100 py-10">
      <h1 class="text-2xl font-semibold max-md:text-center py-5">{{t(('shop'))}}</h1>
      <div class="flex grid max-md:grid-cols-2 md:grid-cols-3 max-md:gap-10 md:gap-16 max-md:px-10" >
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
            >{{t(('total'))}} {{ shop.qty }} {{t(('fruit'))}}</small
            >
          </div>
        </div>
      </div>
    </WrapperSection>
  </div>
</template>
<script type="text/javascript" setup>
const { t } = useI18n({
  useScope: "local",
});
const shops = ref([
{
  pt: 'PT Testing 1',
  qty: 50
},
{
  pt: 'PT Testing 2',
  qty: 50
},
{
  pt: 'PT Testing 3',
  qty: 50
},
{
  pt: 'PT Testing 4',
  qty: 50
},
{
  pt: 'PT Testing 5',
  qty: 50
},
{
  pt: 'PT Testing 6',
  qty: 50
},
]);
</script>
<i18n lang="yaml">
en:
  shop: "Shop that Provides"
  total: "Total Fruit"
  fruit: "fruit"

id:
  shop: "Toko yang Menyediakan"
  total: "Total Buah"
  fruit: "Buah"

</i18n>