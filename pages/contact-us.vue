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

    <div class="mt-20 flex justify-between">
      <div class="flex-1 mt-10 text-lg">
        <div class="mt-2">
          kirana boutique office kirana avenue iii
          <br />
          blok e 1 nomor 3 kelapa gading
          <br />
          jakarta utara 14240
          <div class="mt-1">tel 021 29365166</div>
        </div>
      </div>
      <div class="flex-1">
        <iframe
          title="location"
          width="500"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
