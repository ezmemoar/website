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

        <div class="mt-8">
          <div class="mt-8">
            <input
              type="text"
              class="w-full px-5 py-3 rounded bg-gray-200"
              placeholder="Name"
            />
            <div class="mt-5">
              <input
                type="text"
                class="w-full px-5 py-3 rounded bg-gray-200"
                placeholder="Email"
              />
              <div class="mt-5">
                <textarea
                  placeholder="Name"
                  class="w-full px-5 py-3 rounded bg-gray-200"
                ></textarea>
              </div>
            </div>
            <div class="mt-5">
              <Button class="!rounded">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20 flex justify-between">
      <div class="flex-1 mt-10 text-lg">
        <div class="mt-2">
          Kirana Boutique Office, Kirana Avenue III
          <br />
          Blok E 1 Nomor 3, Kelapa Gading,
          <br />
          Jakarta Utara - 14240.
          <div class="mt-1">Tel: (021)29365166</div>
        </div>
      </div>
      <div class="flex-1">
        <iframe
          width="500"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
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
