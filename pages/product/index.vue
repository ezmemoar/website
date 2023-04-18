<template>
  <div class="min-h-screen overflow-x-hidden">
    <section
      class="w-full max-md:pt-6 md:pt-14 bg-cover bg-center bg-no-repeat pb-10"
    >
      <div class="px-10 text-center">
        <div class="max-md:text-3xl md:text-4xl font-bold text-primary">
          {{ t("product") }}
        </div>
      </div>
    </section>

    <div class="pb-20">
      <NSpin :show="pending">
        <div class="absolute z-[-1] w-full overflow-x-hidden"></div>
        <div
          v-if="res.data && Object.keys(res.data).length > 0"
          class="max-md:px-10 md:px-10 lg:px-36 z-50"
        >
          <div class="grid gap-16 md:grid-cols-3 sm:grid-cols-1">
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
                      <small
                        class="text-base font-medium font-[Poppins] text-white"
                      >
                        Contact: 085736921243 (Sellvya Evitarani)
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              v-for="(val, index) in res.data"
              :to="`/product/alpukat-miki/${val.id}`"
            >
              <div class="bg-gray-200 rounded-xl shadow" :key="index">
                <div
                  class="w-full h-52 bg-cover rounded-xl bg-center"
                  :style="{
                    'background-image': `url('${val.attachment.image}')`,
                  }"
                ></div>
              </div>
            </NuxtLink>
          </div>
          <div class="mt-10">
            <NCard>
              <div class="px-5 py-3" style="bottom: 0">
                <p class="font-semibold text-2xl mb-1 opacity-100">
                  Alpukat Miki
                </p>
                <small class="text-lg font-medium font-[Poppins]">
                  {{ t("Contact") }}: 085881234491 (Andi Setiawan)
                </small>
              </div>
            </NCard>
          </div>
        </div>
      </NSpin>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NCard, NSpin } from "naive-ui";

const { t, locale } = useI18n({
  useScope: "local",
});

const { API_LIST } = useApiUrl();
const res = ref<any>({ data: {} });
const pending = ref(true);

const loadData = async () => {
  pending.value = true;

  await $fetch<any>(`${API_LIST.GET_PRODUCT_LIST}/${1}`, {
    params: {
      lang: locale.value,
    },
  })
    .then((val) => {
      const newRes: any = {};

      res.value.data = val.data;
    })
    .finally(() => (pending.value = false));
};

onMounted(() => loadData());
</script>
<i18n lang="yaml">
en:
  product: "Product"
  contact: "Contact"
id:
  product: "Produk"
  contact: "Kontak"
</i18n>
