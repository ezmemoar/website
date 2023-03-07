<template>
  <div class="bg-primary min-h-screen overflow-x-hidden">
    <div class="pb-20">
      <div class="absolute z-[-1] w-full overflow-x-hidden"></div>
      <div class="max-md:px-10 md:px-10 lg:px-36 z-50">
        <h1 class="text-2xl font-bold text-gray-50 mt-20 mb-10 font-[Poppins]">
          {{ t("available") }}
        </h1>
        <div class="grid gap-16 md:grid-cols-2 sm:grid-cols-1">
          <NuxtLink to="/product/alpukat-miki">
            <div class="bg-gray-200 rounded-xl shadow">
              <div
                class="w-full h-64 bg-center rounded-xl bg-cover bg-[url('/miki.jpg')]"
              >
                <div class="pb-10 relative h-full rounded-xl">
                  <div
                    class="bg-gradient-to-t from-black h-full w-full absolute rounded-xl opacity-60"
                  ></div>
                  <div class="absolute px-5 py-3" style="bottom: 0">
                    <p
                      class="font-semibold text-white text-xl mb-1 opacity-100"
                    >
                      Alpukat Miki
                    </p>
                    <small class="font-medium font-[Poppins] text-white">
                      Contact: 085881234491 (Andi Setiawan)
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/product/hasil-kebun">
            <div class="bg-gray-200 rounded-xl shadow">
              <div
                class="w-full h-64 bg-center rounded-xl bg-cover bg-[url('/hasil-kebun.jpg')]"
              >
                <div class="pb-10 relative h-full rounded-xl">
                  <div
                    class="bg-gradient-to-t from-black h-full w-full absolute rounded-xl opacity-60"
                  ></div>
                  <div class="absolute px-5 py-3" style="bottom: 0">
                    <p
                      class="font-semibold text-white text-xl mb-1 opacity-100"
                    >
                      Hasil Kebun
                    </p>
                    <small class="font-medium font-[Poppins] text-white">
                      Contact: 085736921243 (Sellvya Evitarani)
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

<script setup>
const { t } = useI18n();
</script>

<i18n lang="yaml">
en:
  available: "available"
id:
  available: "Tersedia"
</i18n>
