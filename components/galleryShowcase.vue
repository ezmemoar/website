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
            v-for="(gallery, index) in res.data.slice(0, 3)"
            :key="index"
            class="rounded"
          >
            <div
              :style="`background-image: url('${gallery.image}'); bg-size: cover;`"
              :alt="gallery.image"
              class="h-[30vh] w-full md:h-[42vh] md:w-[42vh] bg-center rounded"
            ></div>
            <div class="p-2 text-white">
              <div class="py-3 font-bold text-base">
                {{ gallery.content.title }}
              </div>
              {{ gallery.content.content }}
            </div>
          </div>
        </div>
      </NSpin>
    </div>

    <div class="mt-8 flex justify-center" v-if="res.data.length > 3">
      <NuxtLink to="/gallery">
        <Button bg-class="bg-secondary" :title="t('seeAll')" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NSpin } from "naive-ui";

const { API_LIST } = useApiUrl();
const { t, locale } = useI18n();

const page = ref(1);
const pending = ref(true);
const res = ref<any>({ data: [], links: {}, meta: {} });

const isShowModal = ref(false);

const selectedIndex = ref(0);
const selectedData = computed(() => res.value.data[selectedIndex.value]);

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
