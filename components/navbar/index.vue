<template>
  <div
    class="w-full flex justify-between px-36 py-2 fixed transition-colors duration-150 z-50"
    :class="scrollClass"
  >
    <div class="flex items-center">
      <div>
        <img src="~/assets/logo.svg" alt="logo" class="w-32" />
      </div>
      <div class="ml-5 flex">
        <NavbarItem :class="itemClass" title="Tentang Kami" />
        <NavbarItem :class="itemClass" title="Bisnis" />
        <NavbarItem :class="itemClass" title="Keberlanjutan" />
        <NavbarItem :class="itemClass" title="Media & Publikasi" />
      </div>
    </div>
    <div class="flex items-center">
      <NavbarItem :class="itemClass" title="ID" />
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
