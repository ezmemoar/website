<template>
  <WrapperSection class="bg-primary">
    <div class="flex justify-around">
      <div class="w-[33%]">
        <img src="/logo.svg" class="w-[50%]" />
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

      <div class="w-[67%] text-white grid grid-cols-2 gap-10">
        <div>
          <div class="font-bold">Bisnis Kami</div>
          <div class="mt-2 flex flex-col">
            <a href="#">Perkebunan</a>
            <a href="#">Pabrik</a>
            <a href="#">Produk</a>
            <a href="#">Penelitian dan Pengembangan</a>
          </div>
        </div>

        <div>
          <div class="font-bold">Keberlanjutan</div>
          <div class="mt-2 flex flex-col">
            <a href="#">Kebijakan Keberlanjutan</a>
            <a href="#">Laporan Keberlanjutan</a>
            <a href="#">Standar & Sertifikasi</a>
            <a href="#">Program & inisiatif</a>
          </div>
        </div>

        <div>
          <div class="font-bold">Media & Publikasi</div>
          <div class="mt-2 flex flex-col">
            <a href="#">Siaran Pers</a>
            <a href="#">Berita</a>
            <a href="#">Artikel</a>
            <a href="#">Publikasi</a>
          </div>
        </div>

        <div>
          <div class="font-bold">Lainnya</div>
          <div class="mt-2 flex flex-col">
            <a href="#">Policy</a>
            <a href="#">Privacy</a>
          </div>
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
import { NIconWrapper, NIcon } from "naive-ui";
</script>
