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
        <NavbarItem to="/csr" :title="t('csr')" />
        <NavbarItem to="/product" :title="t('product')" />
        <NavbarItem to="/gallery" :title="t('gallery')" />
        <NavbarItem to="/contact-us" :title="t('contactUs')" />
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
