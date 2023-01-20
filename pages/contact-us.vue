<template>
  <div class="px-36 py-20">
    <div class="w-8/12">
      <div class="text-4xl font-bold">
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
      <div class=" flex gap-10 justify-between">
        <div class="flex-1 mt-10 text-lg">
          <div>
            <input type="text" class="w-full px-5 py-3 rounded bg-gray-200" placeholder="name" />
            <div class="mt-5">
              <input type="text" class="w-full px-5 py-3 rounded bg-gray-200" placeholder="email" />
              <div class="mt-5">
                <textarea placeholder="message" class="w-full px-5 py-3 rounded bg-gray-200"></textarea>
              </div>
            </div>
            <div class="mt-5">
              <Button class="!rounded">send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-32">
      <br>
      <br>
      <div class="flex justify-between">
        <div>
          <iframe title="location" width="350" height="300" id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" class=""></iframe>
          <div class="pt-5 text-base">
            <p>Kirana Boutiqe Office, Kirana Avenue III</p>
            <p>Blok E 1 Nomor 3. Kelapa Gading,</p>
            <p>Jakarta Utara – 14240.</p>
            <p>Tel :  (021)29365166</p>
          </div>
        </div>
        <div>
          <iframe title="location" width="350" height="300" id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
          <div class="pt-5 text-base">
            <p>Kirana Boutiqe Office, Kirana Avenue III</p>
            <p>Blok E 1 Nomor 3. Kelapa Gading,</p>
            <p>Jakarta Utara – 14240.</p>
            <p>Tel :  (021)29365166</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    Mail,
    Call,
    LogoWhatsapp,
    LocationSharp,
  } from "@vicons/ionicons5";

  import { NIconWrapper, NIcon } from "naive-ui";
  const { t } = useI18n({
    useScope: "local",
  });
  
</script>

<i18n lang="yaml">
en:
  aboutUsLabel: "Let's make a connection with us"
  aboutUsDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas ipsum! Ducimus debitis temporibus voluptatum. Facere, eaque? Esse deserunt assumenda suscipit corrupti? Non tenetur dicta expedita eius ipsa, totam est."
id:
  aboutUsLabel: "Mari jalin kerja sama dengan kami"
  aboutUsDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas ipsum! Ducimus debitis temporibus voluptatum. Facere, eaque? Esse deserunt assumenda suscipit corrupti? Non tenetur dicta expedita eius ipsa, totam est."
</i18n>
