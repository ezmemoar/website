<template>
  <div class="bg-primary min-h-screen">
    <div class="pt-5 pb-20">
      <div class="max-md:px-10 max-lg:px-20 lg:px-36 z-50">
        <NSpin stroke="white" :show="pending">
          <template v-if="res.data && Object.keys(res.data).length > 0">
            <div
              class="mt-28 flex justify-between bg-gray-100 pt-5 pb-5 px-5 rounded-xl text-black"
            >
              <div class="basis-4/12">
                <img class="w-full rounded" :src="res.data.attachment.image" />
              </div>
              <div class="basis-8/12 flex pl-10">
                <div>
                  <div
                    class="max-md:text-2xl md:text-3xl font-bold border-b-[2px] border-primary md:pt-5 max-md:pb-1 md:pb-2"
                  >
                    {{ res.data.content.title }}
                  </div>
                  <div class="font-bold max-md:text-sm md:text-base pt-3">
                    {{ res.data.content.content }}
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-14 space-y-4 bg-gray-100 p-5 rounded-xl text-black">
              <h1 class="text-2xl font-bold mb-5">Comment:</h1>
              <div v-for="val in res.data.comments" class="flex w-[80%] px-5">
                <div class="basis-1/12">
                  <!-- <img src="/images/testing.jpg" class="rounded-full w-20 h-20" /> -->
                </div>
                <div class="basis-9/12 ml-3">
                  <p>{{ val.name }}</p>
                  <p class="text-gray-500">{{ val.email }}</p>
                  <p class="mt-2">{{ val.content }}</p>
                </div>
              </div>
            </div>
          </template>
        </NSpin>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NSpin } from "naive-ui";

const { id } = useRoute().params;

const { API_LIST } = useApiUrl();
const res = ref<any>({ data: {} });
const pending = ref(true);

const { locale } = useI18n();

const loadData = async () => {
  pending.value = true;

  await $fetch<any>(`${API_LIST.GET_PRODUCT_LIST}/${1}/${id}`, {
    params: {
      lang: locale.value,
    }
  })
    .then((val) => {
      res.value.data = val.data;
    })
    .finally(() => (pending.value = false));
};

watch(locale, () => {
  res.value.data = {};
  loadData();
}, {
  immediate: true
});
</script>
