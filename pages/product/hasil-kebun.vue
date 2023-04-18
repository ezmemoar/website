<template>
  <div class="min-h-screen overflow-x-hidden">
    <section
      class="w-full max-md:pt-6 md:pt-14 bg-cover bg-center bg-no-repeat pb-10"
    >
      <div class="px-10 text-center">
        <div class="max-md:text-3xl md:text-4xl font-bold text-primary">
          Hasil Kebun
        </div>
      </div>
    </section>
    <div class="pt-5 pb-20">
      <div class="max-md:px-10 max-lg:px-20 lg:px-36 z-50">
        <NSpin :show="pending" class="w-full">
          <template v-if="!pending">
            <div
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

            <NCard>
              <div class="px-5 py-3" style="bottom: 0">
                <p class="font-semibold text-2xl mb-1 opacity-100">
                  Hasil Kebun
                </p>
                <small class="text-lg font-medium font-[Poppins]">
                  Contact: 085736921243 (Sellvya Evitarani)
                </small>
              </div>
            </NCard>
          </template>
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
import { NCard, NModal, NSpin } from "naive-ui";

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
