<template>
  <nav
    class="w-full flex justify-between px-36 py-2 fixed transition-colors duration-150 z-50 bg-white text-black"
  >
    <div class="flex items-center">
      <NuxtLink to="/">
        <img src="/logo.svg" alt="logo" class="w-32" />
      </NuxtLink>
      <div class="ml-5 flex">
        <NavbarItem to="/about-us" :title="t('aboutUs')" />
        <NavbarItem to="/" :title="t('business')" />
        <NavbarItem to="/" :title="t('sustainability')" />
        <NavbarItem to="/" :title="t('mediaAndPublication')" />
      </div>
    </div>
    <div class="flex items-center">
      <select class="bg-transparent hover:cursor-pointer" v-model="locale">
        <option v-for="val in languageOption" :key="val" :value="val">
          {{ val }}
        </option>
      </select>
      <NavbarItem to="#">
        <NIcon size="20" class="translate-y-1">
          <Search />
        </NIcon>
      </NavbarItem>
    </div>
  </nav>
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
