<template>
  <div class="bg-primary min-h-screen overflow-x-hidden">
    <div class="pt-5 pb-20">
      <div class="max-md:px-10 max-lg:px-20 lg:px-36 z-50">
        <div class="flex justify-center text-white font-semibold mt-10"></div>
        <NSpin stroke="white" :show="pending">
          <template v-if="res.data && Object.keys(res.data).length > 0">
            <div v-for="(val, index) in res.data">
              <h1 class="text-2xl font-bold text-gray-50 my-10">
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
                        'background-image':
                          'url(' + productVal.attachment.image + ')',
                      }"
                    ></div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </template>
        </NSpin>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NSpin } from "naive-ui";

const active = "tersedia";

const { API_LIST } = useApiUrl();
const res = ref<any>({ data: {} });
const pending = ref(true);

const { locale } = useI18n();

const loadData = async () => {
  pending.value = true;

  await $fetch<any>(`${API_LIST.GET_PRODUCT_LIST}/${1}`, {
    params: {
      lang: locale.value,
    },
  })
    .then((val) => {
      const newRes: any = {};
      console.log(val);

      for (let product of val.data) {
        if (!newRes[product.company.name]) {
          newRes[product.company.name] = [];
        }

        newRes[product.company.name].push(product);
      }

      console.log(newRes);
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
