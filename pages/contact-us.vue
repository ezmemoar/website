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
        <h1 class="text-4xl font-bold font-[Poppins] pb-5">Contact Us</h1>
        <p class="pb-4 text-gray-600 font-[Poppins]">Please contact us by email via the form below.</p>
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
        <h1 class="text-4xl font-bold font-[Poppins] pb-5">Contact information</h1>
        <p class="pb-4 text-gray-600 font-[Poppins]">Please contact us by email via the form below.</p>
        <div class="">
          <div class="flex mb-5 text-gray-500 hover:text-black cursor-pointer">
            <div class="text-[#1D5796]">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28" class="w-6 mt-1 mr-5"><g fill="none"><path d="M14 2.25c5.385 0 9.75 4.365 9.75 9.75c0 4.12-2.895 8.61-8.61 13.518a1.75 1.75 0 0 1-2.283-.002l-.378-.328C7.017 20.408 4.25 16.028 4.25 12c0-5.385 4.365-9.75 9.75-9.75zm0 6a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5z" fill="currentColor"></path></g></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" class="w-6 mt-1 mr-5"><g fill="none"><path d="M3.551 2.442c.854-.478 1.943-.59 2.984-.326c.507.128.94.457 1.2.91l.898 1.566a2.5 2.5 0 0 1-.829 3.354l-.79.502c-.327.207-.447.524-.372.775c.268.898.861 1.894 1.513 2.576c.194.204.55.252.898.049l.437-.255a2.5 2.5 0 0 1 3.44.938l.805 1.435c.263.47.306 1.031.12 1.536c-.371 1.003-1.086 1.812-1.965 2.217c-.893.411-1.938.394-2.884-.237c-1.498-.998-3.303-2.678-4.938-5.48c-1.656-2.84-2.073-5.257-2.026-7.059c.03-1.153.64-2.015 1.509-2.501zm9.192-.38a.5.5 0 1 0-.486.874l.384.214a8.5 8.5 0 0 1 4.33 6.584l.032.315a.5.5 0 1 0 .994-.1l-.031-.314a9.5 9.5 0 0 0-4.84-7.36l-.383-.213zm-1.172 2.68a.5.5 0 0 1 .686-.171l.124.074A6.5 6.5 0 0 1 15.45 9.15l.044.267a.5.5 0 1 1-.986.164l-.045-.266a5.5 5.5 0 0 0-2.595-3.813l-.124-.074a.5.5 0 0 1-.172-.686z" fill="currentColor"></path></g></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" class="w-6 mt-1 mr-5"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z" fill="currentColor"></path></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" class="w-6 mt-1 mr-5"><g fill="none"><path d="M18 7.373V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.746 4.558a.5.5 0 0 0 .508 0L18 7.373zM15.5 4a2.5 2.5 0 0 1 2.485 2.223L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4h11z" fill="currentColor"></path></g></svg>
            </div>
            <div>
              <h1 class="font-bold">Email</h1>
              <p class="text-base">
                legis_priori@yahoo.com
              </p>
            </div>
          </div>
          <!-- kirana boutique office kirana avenue iii
            <br />
            blok e 1 nomor 3 kelapa gading
            <br />
            jakarta utara 14240
            <div class="mt-1">tel 021 29365166</div> -->
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
  
</script>

<i18n lang="yaml">
en:
  aboutUsLabel: "Let's make a connection with us"
  aboutUsDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas ipsum! Ducimus debitis temporibus voluptatum. Facere, eaque? Esse deserunt assumenda suscipit corrupti? Non tenetur dicta expedita eius ipsa, totam est."
id:
  aboutUsLabel: "Mari jalin kerja sama dengan kami"
  aboutUsDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas ipsum! Ducimus debitis temporibus voluptatum. Facere, eaque? Esse deserunt assumenda suscipit corrupti? Non tenetur dicta expedita eius ipsa, totam est."
</i18n>
