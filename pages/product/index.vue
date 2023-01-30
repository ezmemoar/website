<template>
  <div class="bg-primary min-h-screen overflow-x-hidden">
    <div class="pb-20">
      <div class="absolute z-[-1] w-full overflow-x-hidden">
      </div>
      <div class="max-md:px-10 md:px-10 lg:px-36 z-50">
        <h1 class="text-2xl font-bold text-gray-50 my-14 font-[Poppins]">
          Product
        </h1>
        <div class="grid gap-16 md:grid-cols-2 sm:grid-cols-1">
          <NuxtLink to="/product/category" >
            <div class="bg-gray-200 rounded-xl shadow">
              <div class="bg-[url('/gallery/gallery-fruit.jpg')] w-full h-64 bg-center rounded-xl bg-cover ">
                <div class="pb-10 absolute relative h-full rounded-xl">
                  <div class="bg-black h-full w-full absolute rounded-xl opacity-60"></div>
                  <div class="absolute px-5 py-10" style="bottom:0;">
                    <p class="font-semibold text-white text-xl mb-2 opacity-100">
                      Produk Tersedia
                    </p>
                    <small class="font-medium font-[Poppins] text-white">Contact: (+62) 85871359105</small>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/product/category" >
            <div class="bg-gray-200 rounded-xl shadow">
              <div class="bg-[url('/gallery/gallery-fruit.jpg')] w-full h-64 bg-center rounded-xl bg-cover ">
                <div class="pb-10 absolute relative h-full rounded-xl">
                  <div class="bg-black h-full w-full absolute rounded-xl opacity-60"></div>
                  <div class="absolute px-5 py-10" style="bottom:0;">
                    <p class="font-semibold text-white text-xl mb-2 opacity-100">
                      Produk Tidak Tersedia
                    </p>
                    <small class="font-medium font-[Poppins] text-white">Contact: (+62) 85871359105</small>
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
