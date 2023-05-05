<template>
  <div class="min-h-screen overflow-x-hidden">
    <section
      class="w-full max-md:pt-6 md:pt-14 bg-cover bg-center bg-no-repeat pb-10"
    >
      <div class="px-10 text-center">
        <div class="max-md:text-3xl md:text-4xl font-bold text-primary">
          {{ t("product") }}
        </div>
      </div>
    </section>

    <div class="pb-20">
      <NSpin :show="pending">
        <div class="absolute z-[-1] w-full overflow-x-hidden"></div>
        <div
          v-if="res.data && Object.keys(res.data).length > 0"
          class="max-md:px-10 md:px-10 lg:px-36 z-50"
        >
          <div class="grid gap-16 md:grid-cols-3 sm:grid-cols-1">
            <NuxtLink to="/product/alpukat-miki">
              <div class="bg-gray-200 rounded-xl shadow">
                <div
                  class="w-full h-64 bg-center rounded-xl bg-cover bg-[url('/hasil-kebun.jpeg')]"
                >
                  <div class="pb-10 relative h-full rounded-xl">
                    <div
                      class="bg-gradient-to-t from-black h-full w-full absolute rounded-xl opacity-60"
                    ></div>
                    <div class="absolute px-5 py-3" style="bottom: 0">
                      <p
                        class="font-semibold text-white text-xl mb-1 opacity-100"
                      >
                        Alpukat Miki
                      </p>
                      <small
                        class="text-base font-medium font-[Poppins] text-white"
                      >
                        {{ t("Contact") }}: 0858 81234 491 (Andi Setiawan)
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>

            <div
              class="cursor-pointer"
              v-for="(val, index) in res.data"
              @click="showContent(index)"
            >
              <div class="bg-gray-200 rounded-xl shadow" :key="index">
                <div
                  class="w-full h-64 bg-cover rounded-xl bg-center"
                  :style="{
                    'background-image': `url('${val.attachment.image}')`,
                  }"
                ></div>
              </div>
            </div>
          </div>
          <div class="mt-10">
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
</template>

<script lang="ts" setup>
import { NCard, NModal, NSpin } from "naive-ui";

const { t, locale } = useI18n({
  useScope: "local",
});

const { API_LIST } = useApiUrl();
const res = ref<any>({ data: {} });
const pending = ref(true);

const loadData = async () => {
  pending.value = true;

  await $fetch<any>(`${API_LIST.GET_PRODUCT_LIST}/${2}`, {
    params: {
      lang: locale.value,
    },
  })
    .then((val) => {
      const newRes: any = {};

      res.value.data = val.data;
    })
    .finally(() => (pending.value = false));
};

const showModal = ref(false);
const selectedIndex = ref(0);
const selectedData = computed(() => res.value.data[selectedIndex.value]);
const showContent = (index: number) => {
  selectedIndex.value = index;
  showModal.value = true;
};

onMounted(() => loadData());
</script>
<i18n lang="yaml">
en:
  product: "Product"
  contact: "Contact"
id:
  product: "Produk"
  contact: "Kontak"
</i18n>
