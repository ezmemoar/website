<template>
  <WrapperSection class="bg-gradient-to-r from-[#0d650ec7] via-[#0D650E]  to-[#0D650E]">
    <div class="flex justify-around">
      <div class="w-[50%]">
        <img src="/logo.svg" class="w-[50%]" />
        <div class="mt-10 text-white">
          <div class="font-bold">Kantor Jakarta</div>
          <div class="mt-2">
            MULTI PROPERTINDO INDONESIA was established to
            respond to corporate and public demand for
            practice which is efficient, effective, and innovative
            in resolving agriculture issues.
          </div>
        </div>
        
      </div>  

      <div class="w-[80%] flex text-white gap-10 pt-5">
        <div class="w-5/12 pl-10">
          <div class="font-bold text-lg">Navigation Menu</div>
          <div class="mt-4 flex flex-col leading-[2rem]">
            <a href="#">Tentang Kami</a>
            <a href="#">CSR</a>
            <a href="#">Produk</a>
            <a href="#">Galeri</a>
            <a href="#">Kontak Kami</a>
          </div>
        </div>

        <div class="w-6/12 pl-10">
          <div class="font-bold text-lg">Contact Information</div>
          <div class="mt-4 flex flex-col">
            <small class="text-xs">Kirana Boutique Office, Kirana Avenue III Blok E
              1 Nomor 3. Kelapa Gading, Jakarta Utara –
              14240.
            </small>
            
            <small class="text-xs">Phone: (021) 29365166</small>
            <br>
            <small class="text-xs">WhatsApps :    +6281218888066</small>
            <br>
            <small class="text-xs">Email : loremipsum@gmail.com</small>
          </div>
        </div>
      </div>
    </div>

    <template #end>
      <hr class="opacity-20" />
      <div class="flex justify-between text-white font-normal px-36 py-5">
        <div class="flex">
          <p class="py-1 border-r border-white">© 2022 Multi Propertindo Indonesia. All rights reserved.</p>
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
} from "@vicons/ionicons5";
import { NIconWrapper, NIcon } from "naive-ui";
</script>
