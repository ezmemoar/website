<template>
  <WrapperSection class="px-36 py-20">
    <div class="text-6xl font-bold">
      {{ t("aboutUsLabel") }}
    </div>
    <div class="mt-8">
      <div class="mt-8">
        <p>
          {{ t("aboutUsDesc") }}
        </p>
      </div>
    </div>
    <div class="mt-20 flex gap-10 justify-between">
      <div class="flex-1 mt-10 text-lg">
        <h1 class="text-4xl font-bold pb-5">Contact Us</h1>
        <p class="pb-4 text-gray-600">
          Please contact us by email via the form below.
        </p>
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
        <p class="pb-4 text-gray-600">
          Please contact us by email via the form below.
        </p>
        <div>
          <NNotificationProvider>
            <div
              @click="
                copyText(
                  'Kp Tamansari, RT.1/RW.5, Desa Karyasari, Leuwiliang (Happy Garden (Villa)), Kab. Bogor, Leuwiliang, Jawa Barat, Indonesia, 16640'
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
                  Kp Tamansari, RT.1/RW.5, Desa Karyasari, Leuwiliang (Happy
                  Garden (Villa)), Kab. Bogor, Leuwiliang, Jawa Barat,
                  Indonesia, 16640
                </p>
              </div>
            </div>
          </NNotificationProvider>
          <div
            @click="copyText('(021) 29365166')"
            class="flex mb-5 text-gray-500 hover:text-black cursor-pointer"
          >
            <div class="text-[#1D5796]">
              <n-icon class="text-2xl mr-5 mt-1">
                <LogoWhatsapp />
              </n-icon>
            </div>
            <div>
              <h1 class="font-bold">Phone</h1>
              <p class="text-base">(021) 29365166</p>
            </div>
          </div>
          <div
            @click="copyText('+62 81218888066')"
            class="flex mb-5 text-gray-500 hover:text-black cursor-pointer"
          >
            <div class="text-[#1D5796]">
              <n-icon class="text-2xl mr-5 mt-1">
                <Call />
              </n-icon>
            </div>
            <div>
              <h1 class="font-bold">Phone</h1>
              <p class="text-base">+62 81218888066</p>
            </div>
          </div>
          <div
            @click="copyText('legis_priori@yahoo.com')"
            class="flex mb-5 text-gray-500 hover:text-black cursor-pointer"
          >
            <div class="text-[#1D5796]">
              <n-icon class="text-2xl mr-5 mt-1">
                <Mail />
              </n-icon>
            </div>
            <div>
              <h1 class="font-bold">Email</h1>
              <p class="text-base">legis_priori@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-20">
      <iframe
        title="location"
        width="100%"
        height="300"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0912202328645!2d106.62632069999997!3d-6.635592800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69d765b4cd4279%3A0x95a1bccc0c7fe860!2sHappy%20Sentosa%20Garden%20(area%20Alpukat%20Miki)!5e0!3m2!1sen!2sid!4v1673860609524!5m2!1sen!2sid"
      ></iframe>
    </div>
  </WrapperSection>
</template>

<script setup lang="ts">
import { Mail, Call, LogoWhatsapp, LocationSharp } from "@vicons/ionicons5";
import { NIcon, useNotification } from "naive-ui";
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
