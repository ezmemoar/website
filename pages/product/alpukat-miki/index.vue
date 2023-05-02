<template>
  <div class="min-h-screen overflow-x-hidden">
    <div class="pt-5 pb-20">
      <div class="max-md:px-10 max-lg:px-20 lg:px-36 z-50">
        <div class="flex justify-center font-semibold mt-10"></div>
        <NSpin :show="pending">
          <template v-if="res.data && Object.keys(res.data).length > 0">
            <div v-for="(val, index) in res.data">
              <h1 class="text-2xl font-bold my-10">
                {{ index }}
              </h1>
              <div
                class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                <NuxtLink
                  v-for="productVal in val"
                  :to="`/product/alpukat-miki/${productVal.id}`"
                >
                  <div class="bg-gray-200 rounded-xl shadow" :key="index">
                    <div
                      class="w-full h-52 bg-cover rounded-xl bg-center"
                      :style="{
                        'background-image': `url('${productVal.attachment.image}')`,
                      }"
                    ></div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </template>
        </NSpin>

        <NCard class="mt-10">
          <div class="px-5 py-3" style="bottom: 0">
            <p class="font-semibold text-2xl mb-1 opacity-100">Alpukat Miki</p>
            <small class="text-lg font-medium font-[Poppins]">
              {{ t("Contact") }}: 085881234491 (Andi Setiawan)
            </small>
          </div>
        </NCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NCard, NSpin } from "naive-ui";

const { API_LIST } = useApiUrl();
const res = ref<any>({ data: {} });
const pending = ref(true);

const { locale, t } = useI18n();

const loadData = async () => {
  pending.value = true;

  await $fetch<any>(`${API_LIST.GET_PRODUCT_LIST}/${1}`, {
    params: {
      lang: locale.value,
    },
  })
    .then((val) => {
      const newRes: any = {};

      for (let product of val.data) {
        if (!newRes[product.company.name]) {
          newRes[product.company.name] = [];
        }

        newRes[product.company.name].push(product);
      }
      res.value.data = newRes;
    })
    .finally(() => (pending.value = false));
};

watch(
  locale,
  () => {
    res.value.data = {};
    loadData();
  },
  {
    immediate: true,
  }
);
</script>

<i18n lang="yaml">
en:
  contact: "Contact"
id:
  contact: "Kontak"
</i18n>
