<template>
  <WrapperSection class="bg-primary">
    <div class="w-full text-white flex justify-evenly">
      <div class="w-[33%]">
        <img src="/logo-white.svg" class="w-52" />
        <div class="mt-10 text-white">
          <div class="font-bold">Kantor Jakarta</div>
          <div class="mt-2">
            Kirana Boutique Office, Kirana Avenue III
            <br />
            Blok E 1 Nomor 3, Kelapa Gading,
            <br />
            Jakarta Utara - 14240.
            <div class="mt-1">Tel: (021)29365166</div>
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

      <div class="mt-5 w-[33%]">
        <div class="font-bold">Navigation Menu</div>
        <div class="mt-2 flex flex-col">
          <NuxtLink to="/about-us">Tentang Kami</NuxtLink>
          <NuxtLink to="/csr">CSR</NuxtLink>
          <NuxtLink to="/product">Produk</NuxtLink>
          <NuxtLink to="/gallery">Galeri</NuxtLink>
          <NuxtLink to="/contact-us">Kontak Kami</NuxtLink>
        </div>
      </div>

      <div class="mt-5 w-[33%]">
        <div class="font-bold">Contact Information</div>
        <div class="mt-2 flex flex-col">
          <p>
            Kirana Boutique Office, Kirana Avenue III Blok E 1 Nomor 3. Kelapa
            Gading, Jakarta Utara – 14240. Phone: (021) 29365166
          </p>
          <p>
            Email:
            <a href="#">loremipsum@gmail.com</a>
          </p>
        </div>
      </div>
    </div>

    <template #end>
      <hr class="opacity-20" />
      <div class="flex justify-between text-white font-semibold px-36 py-5">
        <div>
          © 2022 Multi Propertindo Indonesia. All rights reserved. | Policies &
          Privacy
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
} from "@vicons/ionicons5";
</script>
