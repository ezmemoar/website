<template>
  <div
    class="w-full flex justify-between px-36 py-2 fixed transition-colors duration-150 z-50"
    :class="scrollClass"
  >
    <div class="flex items-center">
      <div>
        <img src="/logo.svg" alt="logo" class="w-32" />
      </div>
      <div class="ml-5 flex">
        <NavbarItem :class="itemClass" :title="t('aboutUs')" />
        <NavbarItem :class="itemClass" :title="t('business')" />
        <NavbarItem :class="itemClass" :title="t('sustainability')" />
        <NavbarItem :class="itemClass" :title="t('mediaAndPublication')" />
      </div>
    </div>
    <div class="flex items-center">
      <select class="bg-transparent hover:cursor-pointer" v-model="locale">
        <option v-for="val in languageOption" :key="val" :value="val">
          {{ val }}
        </option>
      </select>
      <NavbarItem :class="itemClass">
        <NIcon size="20" class="translate-y-1">
          <Search />
        </NIcon>
      </NavbarItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@vicons/ionicons5";
import { NIcon } from "naive-ui";

const { t } = useI18n({
  useScope: "local",
});

const { locale } = useI18n();
const languageOption = ["id", "en"];

const scrollPosition = ref(0);

const scrollClass = computed(() =>
  scrollPosition.value > 0 ? "bg-white text-black" : "text-white"
);

const itemClass = computed(() =>
  scrollPosition.value > 0
    ? "p-5 transition-colors duration-150 text-black hover:underline"
    : "p-5 transition-colors duration-150 text-white hover:underline"
);

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => (scrollPosition.value = window.scrollY)
  );
});
</script>

<i18n lang="yaml">
en:
  aboutUs: "About Us"
  business: "Business"
  sustainability: "Sustainability"
  mediaAndPublication: "Media & Publication"
id:
  aboutUs: "Tentang Kami"
  business: "Bisnis"
  sustainability: "Keberlanjutan"
  mediaAndPublication: "Media & Publikasi"
</i18n>
