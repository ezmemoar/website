<template>
  <div class="bg-primary min-h-screen overflow-x-hidden">
    <div class="py-20">
      <div class="absolute z-[-1] w-full overflow-x-hidden"></div>
      <div class="px-36 z-50">
        <h1 class="text-2xl font-bold text-gray-50 my-14 font-[Poppins]">
          Corporate social responsibility
        </h1>
        <div class="grid gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div class="bg-gray-200 rounded-xl shadow">
            <img
              src="/gallery/mommy-vegetable.png"
              alt=""
              class="w-full rounded-xl"
            />
            <div class="px-5 py-2">
              <NuxtLink
                to="/csr/detail"
                class="font-bold text-gray-800 text-lg mb-2 font-[Poppins]"
                >Upaya pengendalian hama tanaman dalam bidang
                pertanian</NuxtLink
              >
              <br />
              <small class="font-bold text-gray-500 font-[Poppins]"
                >08 Desember 2022</small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
