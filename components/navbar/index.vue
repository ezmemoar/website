<template>
  <nav
    class="w-full flex justify-between px-36 py-2 fixed transition-colors duration-150 z-50 bg-white text-black max-md:hidden"
  >
    <div class="flex items-center">
      <NuxtLink to="/">
        <img src="/logo.svg" alt="logo" class="w-[9rem]" />
      </NuxtLink>
      <div class="ml-5 flex">
        <NavbarItem to="/about-us" :title="t('aboutUs')" />
        <NavbarItem to="/csr" :title="t('csr')" />
        <NavbarItem to="/product" :title="t('product')" />
        <NavbarItem to="/gallery" :title="t('gallery')" />
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
      <div class="">
        <img src="/logo.svg" alt="logo" class="w-[70px]" />
      </div>
      <div>
        <NIcon
          size="30"
          class="translate-y-1 py-1 cursor-pointer hover:origin-center hover:rotate-45 duration-150"
          :class="[navbarItem.items == false ? 'hidden' : '']"
          @click="navbarItem.items = !navbarItem.items"
        >
          <Menu />
        </NIcon>
        <NIcon
          size="30"
          class="translate-y-1 py-1 cursor-pointer hover:origin-center hover:rotate-45 duration-150"
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

      <NavbarItem
        to="/about-us"
        :title="t('aboutUs')"
        class="block"
        @click="navbarItem.items = !navbarItem.items"
      />
      <NavbarItem
        to="/csr"
        :title="t('csr')"
        class="block"
        @click="navbarItem.items = !navbarItem.items"
      />
      <NavbarItem
        to="/product"
        :title="t('product')"
        class="block"
        @click="navbarItem.items = !navbarItem.items"
      />
      <NavbarItem
        to="/gallery"
        :title="t('gallery')"
        class="block"
        @click="navbarItem.items = !navbarItem.items"
      />
      <NavbarItem
        to="/contact-us"
        :title="t('contactUs')"
        class="block"
        @click="navbarItem.items = !navbarItem.items"
      />
    </div>
  </nav>

</template>
<script setup lang="ts">
import { Search, Menu, Close } from "@vicons/ionicons5";
import { NIcon } from "naive-ui";

const { t, locale } = useI18n();
let navbarItem = ref({
  items: true,
});

const languageOption = ["en", "id"];
</script>
<i18n lang="yaml">
en:
  aboutUs: "About Us"
  csr: "CSR"
  product: "Product"
  gallery: "Gallery"
  contactUs: "Contact Us"
id:
  aboutUs: "Tentang Kami"
  csr: "CSR"
  product: "Produk"
  gallery: "Galeri"
  contactUs: "Kontak Kami"
</i18n>
