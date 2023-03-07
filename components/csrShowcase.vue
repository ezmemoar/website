<template>
  <NSpin :show="pending" class="pb-20 w-full">
    <div class="md:flex-1 md:grid md:grid-cols-2 md:gap-20">
      <template v-if="res.data.length != 0">
        <div class="md:flex py-5 m-auto" v-for="(val, i) in res.data" :key="i">
          <div class="lg:basis-4/12 md:basis-6/12 max-md:mb-5">
            <img :src="val.attachment.image" alt="" class="w-full shadow-xl" />
          </div>
          <div class="md:px-7 max-md:basis-full basis-8/12">
            <small class="text-gray-600 font-[Poppins] font-semibold text-xs">
              {{ formatDate(val.created_at) }}
            </small>
            <p class="text-2xl mt-1 font-bold">{{ val.content.title }}</p>
          </div>
        </div>

        <div class="flex justify-center mt-5" v-if="res.links.next">
          <NButton @click="nextPage" :disabled="pending"> Load More </NButton>
        </div>
      </template>
    </div>
  </NSpin>
</template>
<script lang="ts" setup>
import { NButton, NSpin } from "naive-ui";

const { API_LIST } = useApiUrl();
const { formatDate } = useDate();

const page = ref(1);
const pending = ref(true);
const res = ref<any>({ data: [], links: {}, meta: {} });

const nextPage = () => page.value++;
const loadData = async () => {
  pending.value = true;

  await $fetch<any>(API_LIST.GET_CSR_LIST, {
    params: {
      page: page.value,
    },
  })
    .then((val) => {
      // console.log(val);
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
</script>
