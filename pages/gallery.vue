<template>
  <div class="bg-primary min-h-screen overflow-x-hidden">
    <div class="py-20">
      <div class="max-md:px-10 md:px-36 z-50">
        <h1 class="text-2xl font-bold text-gray-50">Gallery</h1>

        <div v-for="(title, index) in dateTitleSlice" :key="index">
          <h1 class="text-white text-base font-semibold pt-10 pb-5">
            {{ title }}
          </h1>
          <div class="grid max-md:gap-5 md:gap-10 md:grid-cols-3 max-md:grid-cols-2 sm:grid-cols-1">
            <div
              v-for="(gallery, index) in dateTitle"
              :key="index"
              @click="showContent(index)"
              class="cursor-pointer rounded"
              v-show="show(index, title)"
            >
              <Image
                :src="`http://localhost:8000${gallery.image}`"
                :alt="gallery.image"
                is-animated
              />
            </div>
          </div>
        </div>
        <NModal
          v-model:show="showModal"
          class="w-3/4 pb-5 px-5 pt-1"
          preset="card"
          transform-origin="center"
        >
          <div class="flex justify-between space-x-3">
            <img class="w-1/2 rounded" src="/gallery/mommy-vegetable.png" />
            <div class="w-1/2 py-2">
              <div class="text-lg font-bold">
                {{ selectedGallery.title }}
              </div>
              <div class="mt-3 text-base overflow-y-auto max-h-52">
                {{ selectedGallery.desc }}
              </div>
            </div>
          </div>
        </NModal>
      </div>
      <div class="flex justify-center pt-10" v-if="galleries.links.next">
      <button
        class="text-white border border-white py-2 px-3 hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-150"
        @click="nextPage"
        :disabled="pending"
      >
        {{ pending ? 'pending' : 'Load More' }}
      </button>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NModal } from "naive-ui";

const showModal = ref(false);

const galleries = ref({ data: [], links: {}, meta: {} });
const selectedIndex = ref(0);
const dateTitle = ref([]);
const dateTitleSlice = ref([]);
const page = ref(1);
const pending = ref(false);

const nextPage = () => page.value++;
const loadData = async () => {
  pending.value = true;

  await $fetch<any>("http://localhost:8000/api/gallery", {
    params: {
      page: page.value,
    },
  })
    .then((val) => {
      // console.log(val);
      if (val) {
        galleries.value.data.push(...val.data);
        galleries.value.links = val.links;
        galleries.value.meta = val.meta;
      }
    })
    .finally(() => {
      pending.value = false;
      dateTitle.value = [];
      dateTitle.value.push(...galleries.value.data);
      let filterArr = function (arr) {
        if (
          dateTitleSlice.value.includes(arr.created_at.slice(0, 7)) == false
        ) {
          dateTitleSlice.value.unshift(arr.created_at.slice(0, 7));
        }
      };
      dateTitle.value.filter(filterArr);
      dateTitleSlice.value.sort()
      dateTitleSlice.value.reverse()
      // console.log(galleries.value.data[1]);
pending.value = false
    });
};
watch(page, () => loadData(), {
  immediate: true,
});



const show = (index, title) => {
  return dateTitle.value[index].created_at.slice(0, 7) === title ? true : false;
};
const selectedGallery = computed(() => galleries.value.data[selectedIndex.value]);

const showContent = (index: number) => {
  selectedIndex.value = index;
  showModal.value = true;
};
</script>
