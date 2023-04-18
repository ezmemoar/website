<template>
  <section
    class="w-full max-md:pt-6 md:pt-14 bg-cover bg-center bg-no-repeat pb-10"
  >
    <div class="px-10 text-center">
      <div class="max-md:text-3xl md:text-4xl font-bold text-primary">
        {{ t("gallery") }}
      </div>
    </div>
  </section>

  <section class="min-h-screen overflow-x-hidden">
    <div class="py-20">
      <NSpin :show="pending">
        <div v-if="res.data.length > 0">
          <div class="max-md:px-10 md:px-36 z-50">
            <div class="mt-5 flex justify-center flex-wrap gap-10">
              <NCard
                v-for="(gallery, index) in res.data"
                :key="index"
                @click="showContent(index)"
                class="rounded w-[22rem] h-[22rem] p-5"
              >
                <div
                  :style="`background-image: url('${gallery.image}')`"
                  :alt="gallery.image"
                  class="w-full h-full bg-cover bg-center rounded hover:scale-105 transition duration-150"
                  is-animated
                ></div>
              </NCard>
            </div>
          </div>
          <div class="flex justify-center pt-10" v-if="res.links.next">
            <button
              class="text-white border border-white py-2 px-3 hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-150"
              @click="nextPage"
              :disabled="pending"
            >
              {{ pending ? "pending" : "Load More" }}
            </button>
          </div>
        </div>
      </NSpin>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { NCard, NSpin } from "naive-ui";

const { API_LIST } = useApiUrl();
const { t, locale } = useI18n();

const page = ref(1);
const pending = ref(true);
const res = ref<any>({ data: [], links: {}, meta: {} });

const isShowModal = ref(false);

const selectedIndex = ref(0);

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
  gallery: "Gallery"
id:
  gallery: "Galeri"
</i18n>
