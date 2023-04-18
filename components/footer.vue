<template>
  <WrapperSection
    class="bg-gradient-to-b from-[#0d650ec7] via-[#0d650ede] to-[#0d650ec9] text-white md:hidden"
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
    class="bg-gradient-to-b from-[#0d650ec7] via-[#0d650ede] to-[#0d650ede] text-white max-md:hidden pt-10"
  >
    <div class="flex items-start gap-6">
      <div class="basis-1/3">
        <img src="/logo-white.svg" class="w-[10rem] m-auto" />
        <div class="flex gap-3 justify-center mt-5">
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
      <div class="basis-1/3">
        <div class="flex items-center mb-3">
          <NIcon :size="30"><Business /></NIcon>
          <p class="pl-2 text-lg font-bold">{{ t("office") }}</p>
        </div>
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
      <div class="basis-1/3">
        <div class="flex flex-col">
          <div class="">
            <div class="flex items-center mb-3">
              <NIcon :size="30"><Home /></NIcon>
              <p class="pl-2 text-lg font-bold">{{ t("plantation") }}</p>
            </div>
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
      <div class="flex justify-center text-white font-normal px-36 py-5">
        <div class="flex ">
          <p class="py-1 border-r border-white ">
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
  garden: "Garden Address"
  aboutMultiPropertindoIndonesia: "Multi Propertindo Indonesia was established to respond to corporate and public demand for practice which is efficient, effective, and Innovative in Resolving Agriculture Issues."
  contactInformation: "Contact Information"
  plantation: "Garden Address"
id:
  navigation: "Navigasi Menu"
  aboutUs: "Tentang Kami"
  csr: "CSR"
  product: "Produk"
  gallery: "Galeri"
  contactUs: "Kontak Kami"
  office: "Kantor Jakarta"
  garden: "Alamat Kebun"
  aboutMultiPropertindoIndonesia: "Multi Propertido Indonesia didirikan untuk menanggapi perusahaan dan permintaan publik untuk praktik yang efisien, efektif, dan Inovatif dalam menyelesaikan masalah pertanian."
  contactInformation: "Kontak Informasi"
  plantation: "Alamat Kebun"
</i18n>
