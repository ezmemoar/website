<template>
  <div class="px-36 py-36">
    <div class="text-6xl font-bold">
      {{ t("aboutUsLabel") }}
    </div>
    <div class="w-3/4">
      <div class="mt-8">
        <div class="mt-8">
          <p>
            {{ t("aboutUsDesc") }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-20 flex gap-10 justify-between">
      <div class="flex-1 mt-10 text-lg">
        <h1 class="text-4xl font-bold pb-5">Contact Us</h1>
        <p class="pb-4 text-gray-600">Please contact us by email via the form below.</p>
        <div>
          <input
          type="text"
          class="w-full px-5 py-3 rounded bg-gray-200"
          placeholder="name"
          />
          <div class="mt-5">
            <input
            type="text"
            class="w-full px-5 py-3 rounded bg-gray-200"
            placeholder="email"
            />
            <div class="mt-5">
              <textarea
              placeholder="message"
              class="w-full px-5 py-3 rounded bg-gray-200"
              ></textarea>
            </div>
          </div>
          <div class="mt-5">
            <Button class="!rounded">send</Button>
          </div>
        </div>
      </div>
      <div class="flex-1 mt-10 text-lg">
        <h1 class="text-4xl font-bold pb-5">Contact information</h1>
        <p class="pb-4 text-gray-600">Please contact us by email via the form below.</p>
        <div class="">
          <div class="flex mb-5 text-gray-500 hover:text-black cursor-pointer">
            <div class="text-[#1D5796]">
              <n-icon class="text-2xl mr-5 mt-1">
                <LocationSharp />
              </n-icon>
            </div>
            <div>
              <h1 class="font-bold">Address</h1>
              <p class="text-base">
                Kirana Boutique Office, Kirana Avenue III Blok E 1 Nomor 3. Kelapa Gading, Jakarta Utara – 14240.
              </p>
            </div>
          </div>
          <div class="flex mb-5 text-gray-500 hover:text-black cursor-pointer">
            <div class="text-[#1D5796]">
              <n-icon class="text-2xl mr-5 mt-1">
                <LogoWhatsapp />
              </n-icon>
            </div>
            <div>
              <h1 class="font-bold">Phone</h1>
              <p class="text-base">
                (021) 29365166
              </p>
            </div>
          </div>
          <div class="flex mb-5 text-gray-500 hover:text-black cursor-pointer">
            <div class="text-[#1D5796]">
              <n-icon class="text-2xl mr-5 mt-1">
                <Call />
              </n-icon>
            </div>
            <div>
              <h1 class="font-bold">Phone</h1>
              <p class="text-base">
                +62 81218888066
              </p>
            </div>
          </div>
          <div class="flex mb-5 text-gray-500 hover:text-black cursor-pointer">
            <div class="text-[#1D5796]">
              <n-icon class="text-2xl mr-5 mt-1">
                <Mail />
              </n-icon>
            </div>
            <div>
              <h1 class="font-bold">Email</h1>
              <p class="text-base">
                legis_priori@yahoo.com
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <br>
      <div>
        <iframe
        title="location"
        width="100%"
        height="300"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const { t } = useI18n({
    useScope: "local",
  });
  import {
    Mail,
    Call,
    LogoWhatsapp,
    LocationSharp,
  } from "@vicons/ionicons5";
  
  import { NIconWrapper, NIcon } from "naive-ui";  
</script>

<i18n lang="yaml">
en:
  aboutUsLabel: "Let's make a connection with us"
  aboutUsDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas ipsum! Ducimus debitis temporibus voluptatum. Facere, eaque? Esse deserunt assumenda suscipit corrupti? Non tenetur dicta expedita eius ipsa, totam est."
id:
  aboutUsLabel: "Mari jalin kerja sama dengan kami"
  aboutUsDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas ipsum! Ducimus debitis temporibus voluptatum. Facere, eaque? Esse deserunt assumenda suscipit corrupti? Non tenetur dicta expedita eius ipsa, totam est."
</i18n>
