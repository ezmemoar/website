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
      <div class="flex gap-10 justify-between">
        <div class="flex-1 mt-10 text-lg">
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
      </div>
    </div>
    <div class="mb-32">
      <br />
      <br />
      <div class="flex justify-evenly">
        <div class="w-[40%] flex items-center">
          <iframe
            title="location"
            width="350"
            height="300"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.676775967154!2d106.89297076476889!3d-6.1740106955301615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f520aed63795%3A0xd18f4ce7a8259dbb!2sKirana%20Boutique%20Office!5e0!3m2!1sen!2sid!4v1674612562833!5m2!1sen!2sid"
            class=""
          ></iframe>
          <div class="pl-5 text-base">
            <div
              @click="copyText('Kirana Boutiqe Office, Kirana Avenue III')"
              class="flex mb-5 text-gray-500 hover:text-black cursor-pointer"
            >
              <div class="text-[#1D5796]">
                <n-icon class="text-2xl mr-5 mt-1">
                  <LocationSharp />
                </n-icon>
              </div>
              <div>
                <h1 class="font-bold">Address</h1>
                <p class="text-base">
                  Kirana Boutiqe Office, Kirana Avenue III, Blok E 1 Nomor 3.
                  Kelapa Gading, Jakarta Utara – 14240.
                </p>
              </div>
            </div>
            <div
              @click="copyText('(021) 29365166')"
              class="flex mb-5 text-gray-500 hover:text-black cursor-pointer"
            >
              <div class="text-[#1D5796]">
                <n-icon class="text-2xl mr-5 mt-1">
                  <Call />
                </n-icon>
              </div>
              <div>
                <h1 class="font-bold">Phone</h1>
                <p class="text-base">(021) 29365166</p>
              </div>
            </div>
            <div
              @click="copyText('multi.propertindo@yahoo.com')"
              class="flex mb-5 text-gray-500 hover:text-black cursor-pointer"
            >
              <div class="text-[#1D5796]">
                <n-icon class="text-2xl mr-5 mt-1">
                  <Mail />
                </n-icon>
              </div>
              <div>
                <h1 class="font-bold">Email</h1>
                <p class="text-base">multi.propertindo@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[40%] flex items-center">
          <iframe
            title="location"
            width="350"
            height="300"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126890.38112247406!2d106.62429415913434!3d-6.352030335017695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69d765b4cd4279%3A0x95a1bccc0c7fe860!2sHappy%20Sentosa%20Garden%20(area%20Alpukat%20Miki)!5e0!3m2!1sid!2sid!4v1673860525792!5m2!1sid!2sid"
            class=""
          ></iframe>
          <div class="pl-5 text-base">
            <div
              @click="
                copyText(
                  'Kp Tamansari, RT.1/RW.5, Desa Karyasari, Leuwiliang, Kab.Bogor, Jawa Barat – 16640'
                )
              "
              class="flex mb-5 text-gray-500 hover:text-black cursor-pointer"
            >
              <div class="text-[#1D5796]">
                <n-icon class="text-2xl mr-5 mt-1">
                  <LocationSharp />
                </n-icon>
              </div>
              <div>
                <h1 class="font-bold">Address</h1>
                <p class="text-base">
                  Kp Tamansari, RT.1/RW.5, Desa Karyasari, Leuwiliang,
                  Kab.Bogor, Jawa Barat – 16640
                </p>
              </div>
            </div>
            <div
              @click="copyText('+628111111111')"
              class="flex mb-5 text-gray-500 hover:text-black cursor-pointer"
            >
              <div class="text-[#1D5796]">
                <n-icon class="text-2xl mr-5 mt-1">
                  <LogoWhatsapp />
                </n-icon>
              </div>
              <div>
                <h1 class="font-bold">Whatsapp</h1>
                <p class="text-base">+62 81-1111-1111</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, Call, LogoWhatsapp, LocationSharp } from "@vicons/ionicons5";

import { NIconWrapper, NIcon, useNotification } from "naive-ui";
const { t } = useI18n({
  useScope: "local",
});

const text = useText();
const notificationPopup = useNotification();

const copyText = (value: string) => {
  text.copyToClipboard(value);
  notificationPopup["success"]({ content: "Text copied", duration: 3000 });
};
</script>

<i18n lang="yaml">
en:
  aboutUsLabel: "Let's make a connection with us"
  aboutUsDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas ipsum! Ducimus debitis temporibus voluptatum. Facere, eaque? Esse deserunt assumenda suscipit corrupti? Non tenetur dicta expedita eius ipsa, totam est."
id:
  aboutUsLabel: "Mari jalin kerja sama dengan kami"
  aboutUsDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas ipsum! Ducimus debitis temporibus voluptatum. Facere, eaque? Esse deserunt assumenda suscipit corrupti? Non tenetur dicta expedita eius ipsa, totam est."
</i18n>
