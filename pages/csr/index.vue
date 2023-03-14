<template>
  <div class="min-h-screen overflow-x-hidden bg-[#f1f1f1]">
    <div class="py-1">
      <div class="absolute z-[-1] w-full overflow-x-hidden"></div>
      <div class="max-md:px-20 px-36 z-50">
        <h1 class="text-3xl font-bold mt-20 mb-10 text-center">
          {{ t("csr") }}
        </h1>
        <NSpin :show="pending" class="pb-20 w-full">
          <template v-if="res.data.length != 0">
            <div
              class="md:flex py-5 m-auto"
              v-for="(val, i) in res.data"
              :key="i"
            >
              <div class="lg:basis-4/12 md:basis-6/12 max-md:mb-5">
                <img
                  :src="val.attachment.image"
                  alt=""
                  class="w-full shadow-xl"
                />
              </div>
              <div class="md:px-7 max-md:basis-full basis-8/12">
                <small
                  class="text-gray-600 font-[Poppins] font-semibold text-xs"
                >
                  {{ formatDate(val.created_at) }}
                </small>
                <p class="text-2xl mt-1 font-bold">{{ val.content.title }}</p>
                <small class="font-[Poppins] font-semibold">{{
                  val.content.content
                }}</small>
              </div>
            </div>

            <div class="flex justify-center mt-5" v-if="res.links.next">
              <NButton @click="nextPage" :disabled="pending">
                Load More
              </NButton>
            </div>
          </template>
        </NSpin>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NButton, NSpin } from "naive-ui";

const { API_LIST } = useApiUrl();
const { formatDate } = useDate();
const { t, locale } = useI18n();

const page = ref(1);
const pending = ref(true);
const res = ref<any>({ data: [], links: {}, meta: {} });

const nextPage = () => page.value++;
const loadData = async () => {
  pending.value = true;

  await $fetch<any>(API_LIST.GET_CSR_LIST, {
    params: {
      page: page.value,
      lang: locale.value,
    },
  })
    .then((val) => {
      if (val) {
        res.value.data.push(...val.data);
        res.value.links = val.links;
        res.value.meta = val.meta;
      }
    })
    .finally(() => (pending.value = false));
};

watch(page, () => loadData(), {
  immediate: true,
});

watch(locale, () => {
  res.value.data = [];

  if (page.value == 1) {
    loadData();
  } else {
    page.value = 1;
  }
});
</script>

<i18n lang="yaml">
en:
  csr: "Corporate Social Responsibility"
id:
  csr: "Tanggung jawab sosial perusahaan"
</i18n>
