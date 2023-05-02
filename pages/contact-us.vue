<template>
   <div class="max-md:px-10 md:px-36 pt-20">
      <div class="w-full">
         <div class="max-md:text-2xl md:text-4xl font-bold max-md:text-center">
            {{ t("aboutUsLabel") }}
         </div>
         <div class="w-full max-md:text-center mb-20">
            <div class="mt-8">
               <div class="mt-8">
                  <p>
                     {{ t("aboutUsDesc") }}
                  </p>
                  <NuxtLink
                     to="https://wa.me/085736921243/?text=Saya Tertarik dengan produk ini"
                     target="_blank"
                  >
                     <button class="flex items-center text-white py-2 px-3 rounded my-5 hover:scale-105 transition duration-150" style="background: #25d366;">
                        <LogoWhatsapp class="w-6" />
                        <p class="px-1">Silvya Evitarani</p>
                     </button>
                  </NuxtLink>
               </div>
            </div>
         </div>
      </div>
      <p class="text-center font-bold max-md:text-xl md:text-2xl my-5">
         {{ t("ourAddress") }}
      </p>
      <div class="mb-32">
         <br />
         <div class="justify-evenly gap-16">
            <p class="font-bold max-md:text-base md:text-xl mb-5">
               {{ t("office") }}
            </p>
            <div class="md:flex md:justify-between">
               <div class="w-full items-center">
                  <iframe
                     title="location"
                     id="gmap_canvas"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.676775967154!2d106.89297076476889!3d-6.1740106955301615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f520aed63795%3A0xd18f4ce7a8259dbb!2sKirana%20Boutique%20Office!5e0!3m2!1sen!2sid!4v1674612562833!5m2!1sen!2sid"
                     class="md:w-full md:h-[300px] max-md:w-full max-md:h-52"
                  ></iframe>
               </div>
               <div class="md:pl-5 text-base text-left w-full max-md:mt-5">
                  <div
                     @click="
                        copyText(
                           'Kirana Boutiqe Office, Kirana Avenue III, Blok E 1 Nomor 3. Kelapa Gading, Jakarta Utara – 14240'
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
                        <h1 class="font-bold">{{ t("address") }}</h1>
                        <p class="text-base">Kirana Boutiqe Office,</p>
                        <p class="text-base">
                           Kirana Avenue III, Blok E 1 Nomor 3.
                        </p>
                        <p class="text-base">
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
            <br />
            <br />
            <p class="font-bold max-md:text-base md:text-xl mb-5">
               Alamat Kebun
            </p>
            <div class="w-full md:flex md:justify-between">
               <div class="w-full">
                  <iframe
                     title="location"
                     id="gmap_canvas"
                     class="md:w-full md:h-[300px] max-md:w-full max-md:h-52"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126890.38112247406!2d106.62429415913434!3d-6.352030335017695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69d765b4cd4279%3A0x95a1bccc0c7fe860!2sHappy%20Sentosa%20Garden%20(area%20Alpukat%20Miki)!5e0!3m2!1sid!2sid!4v1673860525792!5m2!1sid!2sid"
                  ></iframe>
               </div>
               <div class="max-md:mt-5 md:pl-5 text-base w-full">
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
                        <h1 class="font-bold">{{ t("address") }}</h1>
                        <p class="text-base">
                           Kp Tamansari, RT.1/RW.5, Desa Karyasari, Leuwiliang,
                           Kab.Bogor, Jawa Barat – 16640
                        </p>
                     </div>
                  </div>
                  <div
                     @click="copyText('081282622599')"
                     class="flex mb-5 text-gray-500 hover:text-black cursor-pointer"
                  >
                     <div class="text-[#1D5796]">
                        <n-icon class="text-2xl mr-5 mt-1">
                           <LogoWhatsapp />
                        </n-icon>
                     </div>
                     <div>
                        <h1 class="font-bold">Whatsapp</h1>
                        <p class="text-base">081282622599</p>
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
   aboutUsLabel: "Contact Us"
   send: "Send"
   aboutUsDesc: "To order garden products, please contact the Whatsapp number, 085736921243 (Silvya Evitarani)."
   ourAddress: "OUR ADDRESS"
   office: "Jakarta Office"
   address: "Address"
   message: "Message"
   name: "Name"

id:
   aboutUsLabel: "Hubungi Kami"
   aboutUsDesc: "Untuk pemesanan hasil kebun silahkan hubungi nomor Whatsapp, 085736921243 (Silvya Evitarani)."
   send: "Kirim"
   ourAddress: "ALAMAT KAMI"
   office: "KANTOR JAKARTA"
   address: "Alamat"
   message: "Pesan"
   name: "Nama"
</i18n>
