<template>
  <div class="py-20">
    <div
      class="max-md:w-full md:w-[50%] max-md:text-xl md:text-3xl text-white font-bold"
    >
      {{ t("ourGoal") }}

      <hr class="bg-white mt-5 border-t-2" />
    </div>

    <div class="py-5">
      <NSpin stroke="white" :show="pending">
        <div
          class="mt-5 grid max-md:gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="(gallery, index) in res.data"
            :key="index"
            @click="showContent(index)"
            class="cursor-pointer rounded"
          >
            <Image :src="gallery.image" :alt="gallery.image" is-animated />
          </div>
        </div>
        <NModal
          v-model:show="isShowModal"
          class="w-3/4 pb-5 px-5 pt-1"
          preset="card"
          transform-origin="center"
        >
          <div class="flex justify-between space-x-3">
            <img class="w-1/2 rounded" :src="selectedData.image" />
            <div class="w-1/2 py-2">
              <div class="text-lg font-bold">
                {{ selectedData.content.title }}
              </div>
              <div class="mt-3 text-base overflow-y-auto max-h-52">
                {{ selectedData.content.content }}
              </div>
            </div>
          </div>
        </NModal>
      </NSpin>
    </div>

    <div class="mt-8 flex justify-center">
      <NuxtLink to="/gallery">
        <Button bg-class="bg-secondary" :title="t('seeAll')" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NModal, NSpin } from "naive-ui";

const { API_LIST } = useApiUrl();
const { t, locale } = useI18n();

const page = ref(1);
const pending = ref(true);
const res = ref<any>({ data: [], links: {}, meta: {} });

const isShowModal = ref(false);

const selectedIndex = ref(0);
const selectedData = computed(() => res.value.data[selectedIndex.value]);

const nextPage = () => page.value++;
const loadData = async () => {
  pending.value = true;

  await $fetch<any>(API_LIST.GET_GALLERY_LIST, {
    params: {
      page: page.value,
      lang: locale.value,
    },
  })
    .then((val) => {
      if (val) {
        console.log(val);
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

const showContent = (index: number) => {
  selectedIndex.value = index;
  isShowModal.value = true;
};
</script>

<i18n lang="yaml">
en:
  ourGoal: "Our goal is to always make farmers a place to grow a better life"
  seeAll: "See All"
id:
  ourGoal: "Tujuan kami selalu menjadikan petani sebagai tempat untuk menumbuhkan kehidupan yang lebih baik"
  seeAll: "Lihat Semua"
</i18n>
