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
          <div class="max-md:px-10">
            <div class="flex flex-wrap justify-center gap-6">
              <NCard
                v-for="(gallery, index) in res.data"
                :key="index"
                class="sm:w-full h-full md:w-[50vh]"
                :bordered="false"
              >
                <div
                  :style="`background-image: url('${gallery.image}'); bg-size: cover;`"
                  :alt="gallery.image"
                  class="h-[30vh] w-full md:h-[42vh] md:w-[42vh] bg-center rounded"
                ></div>
                <div class="py-3 font-bold text-base">
                  {{ gallery.content.title }}
                </div>
                {{ gallery.content.content }}
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
</script>
<i18n lang="yaml">
en:
  gallery: "Gallery"
id:
  gallery: "Galeri"
</i18n>
