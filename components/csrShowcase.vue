<template>
  <div class="py-20">
    <NSpin :show="pending" class="w-full">
      <div class="md:flex-1 md:grid md:grid-cols-2 md:gap-20">
        <template v-if="res.data.length != 0">
          <div
            class="md:flex py-5 m-auto"
            v-for="(val, i) in res.data.slice(0, 2)"
            :key="i"
          >
            <div class="lg:basis-4/12 md:basis-6/12 max-md:mb-5">
              <div
                :style="`background-image: url('${val.attachment.image}'); bg-size: cover;`"
                :alt="val.attachment.image"
                class="h-[30vh] w-full md:h-[25vh] md:w-[25vh] bg-center rounded"
              ></div>
            </div>
            <div class="md:px-7 max-md:basis-full basis-8/12">
              <small class="text-gray-600 font-[Poppins] font-semibold text-xs">
                {{ formatDate(val.created_at) }}
              </small>
              <p class="text-2xl mt-1 font-bold">{{ val.content.title }}</p>
            </div>
          </div>
        </template>
      </div>
    </NSpin>

    <div class="mt-8 flex justify-center" v-if="res.data.length > 2">
      <NuxtLink to="/csr">
        <Button bg-class="bg-secondary" :title="t('seeAll')" />
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NSpin } from "naive-ui";

const { API_LIST } = useApiUrl();
const { formatDate } = useDate();
const { t } = useI18n();

const { locale } = useI18n();

const page = ref(1);
const pending = ref(true);
const res = ref<any>({ data: [], links: {}, meta: {} });

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
  seeAll: "See All"
id:
  seeAll: "Lihat Semua"
</i18n>
