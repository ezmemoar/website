<template>
  <nav
    class="w-full flex justify-between px-36 py-2 fixed transition-colors duration-150 z-50 bg-white text-black max-md:hidden"
  >
    <div class="flex items-center">
      <NuxtLink to="/">
        <img src="/logo.svg" alt="logo" class="w-[9rem]" />
      </NuxtLink>
      <div class="ml-5 flex">
        <NavbarItem to="/" :title="t('home')" />
        <NavbarItem to="/about-us" :title="t('aboutUs')" />
        <NavbarItem to="/product" :title="t('product')" />
        <NavbarItem to="/gallery" :title="t('gallery')" />
        <NavbarItem to="/csr" :title="t('csr')" />
        <NavbarItem to="/contact-us" :title="t('contactUs')" />
      </div>
    </div>
    <div class="flex items-center">
      <select
        class="bg-transparent hover:cursor-pointer outline-none"
        v-model="$i18n.locale"
      >
        <option v-for="(val, i) in languageOption" :key="i" :value="val">
          {{ val }}
        </option>
      </select>
    </div>
  </nav>
  <nav
    class="w-full px-5 py-4 fixed transition-colors duration-150 z-50 bg-white text-black md:hidden"
  >
    <div class="flex justify-between">
      <NuxtLink to="/">
        <img src="/logo.svg" alt="logo" class="w-[70px]" />
      </NuxtLink>
      <div>
        <select
          class="bg-transparent hover:cursor-pointer outline-none"
          v-model="$i18n.locale"
        >
          <option v-for="(val, i) in languageOption" :key="i" :value="val">
            {{ val }}
          </option>
        </select>
        <NIcon
          size="30"
          class="ml-4 translate-y-1 py-1 cursor-pointer hover:origin-center hover:rotate-45 duration-150"
          :class="[navbarItem.items == false ? 'hidden' : '']"
          @click="navbarItem.items = !navbarItem.items"
        >
          <Menu />
        </NIcon>
        <NIcon
          size="30"
          class="ml-4 translate-y-1 py-1 cursor-pointer hover:origin-center hover:rotate-45 duration-150"
          :class="[navbarItem.items == true ? 'hidden' : '']"
          @click="navbarItem.items = !navbarItem.items"
        >
          <Close />
        </NIcon>
      </div>
    </div>
    <div class="pt-5 pb-2 block" :class="{ hidden: navbarItem.items }">
      <NIcon size="20" class="translate-y-1 p-5">
        <Search />
      </NIcon>

      <NavbarItem to="/about-us" :title="t('aboutUs')" class="block" />
      <NavbarItem to="/csr" :title="t('csr')" class="block" />
      <NavbarItem to="/product" :title="t('product')" class="block" />
      <NavbarItem to="/gallery" :title="t('gallery')" class="block" />
      <NavbarItem to="/contact-us" :title="t('contactUs')" class="block" />
    </div>
  </nav>
</template>
<script setup lang="ts">
import { Search, Menu, Close } from "@vicons/ionicons5";
import { NIcon } from "naive-ui";

const { t, locale } = useI18n();
const route = useRoute();
let navbarItem = ref({
  items: true,
});

const languageOption = ["en", "id"];

watch(toRef(route, "path"), () => (navbarItem.value.items = true));
</script>

<i18n lang="yaml">
en:
  home: "Home"
  aboutUs: "About Us"
  csr: "CSR"
  product: "Product"
  gallery: "Gallery"
  contactUs: "Contact Us"
id:
  home: "Beranda"
  aboutUs: "Tentang Kami"
  csr: "CSR"
  product: "Produk"
  gallery: "Galeri"
  contactUs: "Kontak Kami"
</i18n>
