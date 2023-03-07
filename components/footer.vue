<template>
  <WrapperSection
    class="bg-gradient-to-b from-[#0d650ec7] via-[#0D650E] to-[#0D650E] text-white md:hidden"
  >
    <img src="/logo-white.svg" class="w-[35%] m-auto" />
    <div class="flex space-x-3 w-full justify-center">
      <a href="#">
        <IconRoundWrapper>
          <LogoFacebook />
        </IconRoundWrapper>
      </a>
      <a href="#">
        <IconRoundWrapper>
          <LogoTwitter />
        </IconRoundWrapper>
      </a>
      <a href="#">
        <IconRoundWrapper>
          <LogoLinkedin />
        </IconRoundWrapper>
      </a>
      <a href="#">
        <IconRoundWrapper>
          <LogoYoutube />
        </IconRoundWrapper>
      </a>
      <a href="#">
        <IconRoundWrapper>
          <LogoInstagram />
        </IconRoundWrapper>
      </a>
    </div>
    <br />
    <div class="flex pt-5">
      <div class="w-full">
        <div class="font-bold text-lg">{{ t("navigation") }}</div>
        <div class="mt-4 flex flex-col leading-[2rem]">
          <NuxtLink to="/about-us">{{ t("aboutUs") }}</NuxtLink>
          <NuxtLink to="/csr">{{ t("csr") }}</NuxtLink>
          <NuxtLink to="/product">{{ t("product") }}</NuxtLink>
          <NuxtLink to="/gallery">{{ t("gallery") }}</NuxtLink>
          <NuxtLink to="/contact-us">{{ t("contactUs") }}</NuxtLink>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <div class="font-bold text-lg border-b border-[#FAB705]">
        {{ t("office") }}
      </div>
      <div class="mt-2">
        {{ t("aboutMultiPropertindoIndonesia") }}
      </div>
      <br />
      <div>Phone: (021) 29365166</div>
    </div>

    <div class="mt-10">
      <div class="font-bold text-lg border-b border-[#FAB705]">
        {{ t("plantation") }}
      </div>
      <div class="mt-2">
        Kp Tamansari, RT.1/RW.5, Desa Karyasari, Leuwiliang (Happy Garden
        (Villa)), Kab. Bogor, Leuwiliang, Jawa Barat, Indonesia, 16640
      </div>
    </div>
    <br />
    <template #end>
      <hr class="opacity-20" />
      <div class="flex text-white font-normal px-10 py-5">
        <div class="flex">
          <p class="py-1 border-r border-white">
            © 2022 Multi Propertindo Indonesia. All rights reserved.
          </p>
          <p class="py-1 pl-2 underline cursor-pointer">Policies & Privacy</p>
        </div>
      </div>
    </template>
  </WrapperSection>

  <WrapperSection
    class="bg-gradient-to-b from-[#0d650ec7] via-[#0D650E] to-[#0D650E] text-white max-md:hidden pt-10"
  >
    <div class="flex justify-around">
      <div class="w-3/12">
        <img src="/logo-white.svg" class="w-[10rem]" />
        <div class="mt-10">
          <div class="font-bold">{{ t("office") }}</div>
          <div class="mt-2">
            {{ t("aboutMultiPropertindoIndonesia") }}
          </div>
        </div>
        <div class="mt-10 flex space-x-3">
          <a href="#">
            <IconRoundWrapper>
              <LogoFacebook />
            </IconRoundWrapper>
          </a>
          <a href="#">
            <IconRoundWrapper>
              <LogoTwitter />
            </IconRoundWrapper>
          </a>
          <a href="#">
            <IconRoundWrapper>
              <LogoLinkedin />
            </IconRoundWrapper>
          </a>
          <a href="#">
            <IconRoundWrapper>
              <LogoYoutube />
            </IconRoundWrapper>
          </a>
          <a href="#">
            <IconRoundWrapper>
              <LogoInstagram />
            </IconRoundWrapper>
          </a>
        </div>
      </div>
      <div class="flex-1 flex justify-center gap-10 pt-5">
        <div class="w-5/12 pl-10">
          <div class="font-bold text-lg">{{ t("navigation") }}</div>
          <div class="mt-4 flex flex-col leading-[2rem]">
            <NuxtLink to="/about-us">{{ t("aboutUs") }}</NuxtLink>
            <NuxtLink to="/csr">{{ t("csr") }}</NuxtLink>
            <NuxtLink to="/product">{{ t("product") }}</NuxtLink>
            <NuxtLink to="/gallery">{{ t("gallery") }}</NuxtLink>
            <NuxtLink to="/contact-us">{{ t("contactUs") }}</NuxtLink>
          </div>
        </div>
      </div>

      <div class="w-4/12 pl-10 pt-5">
        <div class="font-bold text-lg">{{ t("contactInformation") }}</div>
        <div class="mt-4 flex flex-col">
          <div>
            <NIcon :size="30"><Business /></NIcon>
            <div>
              <div>
                Kirana Boutique Office,
                <br />
                Kirana Avenue III Blok E 1 No 3
                <br />
                Kelapa Gading, Jakarta Utara – 14240.
              </div>
              <div>Phone: (021) 29365166</div>
              <div>Email : multi.propertindo@yahoo.com</div>
            </div>
          </div>

          <div class="mt-8">
            <NIcon :size="30"><Home /></NIcon>
            <div>
              <div>
                Kp Tamansari, RT.1/RW.5, Desa Karyasari, Leuwiliang, Kab.Bogor,
                Jawa Barat – 16640
              </div>
              <div>Whatsapp : +62 81-1111-1111</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
    <template #end>
      <hr class="opacity-20" />
      <div class="flex justify-between text-white font-normal px-36 py-5">
        <div class="flex">
          <p class="py-1 border-r border-white">
            © 2022 Multi Propertindo Indonesia. All rights reserved.
          </p>
          <p class="py-1 pl-2 underline cursor-pointer">Policies & Privacy</p>
        </div>
      </div>
    </template>
  </WrapperSection>
</template>

<script setup lang="ts">
import {
  LogoFacebook,
  LogoTwitter,
  LogoLinkedin,
  LogoYoutube,
  LogoInstagram,
  Business,
  Home,
} from "@vicons/ionicons5";
import { NIcon, NIconWrapper } from "naive-ui";
const { t } = useI18n({
  useScope: "local",
});
</script>
<i18n lang="yaml">
en:
  navigation: "Navigation Menu"
  aboutUs: "About Us"
  csr: "CSR"
  product: "Product"
  gallery: "Gallery"
  contactUs: "Contact Us"
  office: "Jakarta Office"
  aboutMultiPropertindoIndonesia: "Multi Propertindo Indonesia was established to respond to corporate and public demand for practice which is efficient, effective, and Innovative in Resolving Agriculture Issues."
  contactInformation: "Contact Information"
  plantation: "Plantation"
id:
  navigation: "Navigasi Menu"
  aboutUs: "Tentang Kami"
  csr: "CSR"
  product: "Produk"
  gallery: "Galeri"
  contactUs: "Kontak Kami"
  office: "Kantor Jakarta"
  aboutMultiPropertindoIndonesia: "Multi Propertido Indonesia didirikan untuk menanggapi perusahaan dan permintaan publik untuk praktik yang efisien, efektif, dan Inovatif dalam menyelesaikan masalah pertanian."
  contactInformation: "Kontak Informasi"
  plantation: "Perkebunan"
</i18n>
