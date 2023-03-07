<template>
  <div class="bg-primary min-h-screen overflow-x-hidden">
    <div class="pt-5 pb-20">
      <div class="max-md:px-10 max-lg:px-20 lg:px-36 z-50">
        <h1 class="text-2xl font-bold text-gray-50 my-10">Hasil Kebun</h1>
        <NSpin stroke="white" :show="pending" class="w-full">
          <div
            v-if="res.data.length > 0"
            class="grid gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          >
            <div
              v-for="(val, index) in res.data"
              :key="index"
              @click="showContent(index)"
              class="cursor-pointer rounded"
            >
              <Image
                :src="val.attachment.image"
                :alt="val.attachment.image"
                is-animated
              />
            </div>
          </div>
        </NSpin>
        <NModal
          v-model:show="showModal"
          class="w-3/4 pb-5 px-5 pt-1"
          preset="card"
          transform-origin="center"
        >
          <div class="flex justify-between space-x-3">
            <img class="w-1/2 rounded" :src="selectedData.attachment.image" />
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
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NModal, NSpin } from "naive-ui";

const { API_LIST } = useApiUrl();

const pending = ref(true);
const res = ref<any>({ data: [] });
const showModal = ref(false);

const loadData = async () => {
  pending.value = true;

  await $fetch<any>(`${API_LIST.GET_PRODUCT_LIST}/${2}`)
    .then((val) => (res.value.data = val.data))
    .finally(() => (pending.value = false));
};

onMounted(() => loadData());

const selectedIndex = ref(0);
const selectedData = computed(() => res.value.data[selectedIndex.value]);
const showContent = (index: number) => {
  selectedIndex.value = index;
  showModal.value = true;
};
</script>
