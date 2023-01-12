<script lang="ts" setup></script>

<template>
  <div>
    <div
      class="bg-[url(/gallery/mommy-vegetable-2x.jpg)] w-full h-screen bg-no-repeat bg-cover absolute z-[-1]"></div>
    <div class="w-full h-screen bg-black opacity-60 absolute z-[-1]"></div>
    <div class="w-full h-screen z-50 py-32 flex justify-center items-center">
      <div class="text-center">
        <button
          class="rounded-full border-2 font-[Poppins] border-white py-1 px-5 text-lg text-gray-100 font-semibold"
        >
          Articles
        </button>
        <br />
        <br />
        <p class="text-gray-100 text-3xl font-semibold font-[Poppins]">
          11 Desember 2022
        </p>

        <br />
        <p
          class="text-gray-100 text-3xl font-semibold font-[Poppins] w-6/12 text-center m-auto"
        >
          Upaya pengendalian hama dan Penyakit Tanaman Dalam Bidang Pertanian
        </p>
      </div>
    </div>

    <WrapperReadSection>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
        ullamcorper dui, et eleifend sem. Maecenas non lacus enim. Mauris a
        convallis velit. Ut eget elit at nisi consequat euismod ut quis ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt
        aliquam tempore repellat blanditiis. Quam, quae. Saepe rerum impedit
        minima in, molestias, ipsam blanditiis quae doloribus molestiae tenetur
        quia ullam praesentium dolorum officia, ratione totam sed dolor. Ipsa
        cum ea maiores, ipsum ratione perferendis adipisci asperiores deleniti
        eos eum illo obcaecati mollitia amet explicabo natus earum dolor.
        Voluptas dolorem molestiae error numquam odit reprehenderit rerum totam
        cupiditate? Repudiandae officia cupiditate veniam consequatur, quam
        itaque quo odit! Modi libero corporis totam blanditiis eligendi tempora
        neque natus quia, eaque iste doloribus officia esse consequatur dolorum
        consectetur? Eveniet iusto iste officiis provident eaque.
      </p>
      <img
        src="/gallery/mommy-vegetable-2x.jpg"
        alt=""
        class="m-auto w-8/12 mt-5 rounded"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt
        aliquam tempore repellat blanditiis. Quam, quae. Saepe rerum impedit
        minima in, molestias, ipsam blanditiis quae doloribus molestiae tenetur
        quia ullam praesentium dolorum officia, ratione totam sed dolor. Ipsa
        cum ea maiores, ipsum ratione perferendis adipisci asperiores deleniti
        eos eum illo obcaecati mollitia amet explicabo natus earum dolor.
        Voluptas dolorem molestiae error numquam odit reprehenderit rerum totam
        cupiditate? Repudiandae officia cupiditate veniam consequatur, quam
        itaque quo odit! Modi libero corporis totam blanditiis eligendi tempora
        neque natus quia, eaque iste doloribus officia esse consequatur dolorum
        consectetur? Eveniet iusto iste officiis provident eaque.
      </p>
    </WrapperReadSection>

    <WrapperSection class="font-medium text-base">
      <h1 class="text-2xl font-bold">See More</h1>
      <br />
      <div class="grid gap-20 grid-cols-3">
        <div class="rounded-xl">
          <img
            src="/gallery/mommy-vegetable.png"
            alt=""
            class="w-full rounded-xl"
          />
          <div class="px-2 py-4">
            <p class="text-gray-800 text-base mb-2 font-bold">
              Pertanian adalah sector ekonomi yang penting bagi keberlangsungan
              hidup
            </p>
            <small class="text-gray-500 font-bold">20 Juli 2020</small>
          </div>
        </div>
        <div class="rounded-xl">
          <img
            src="/gallery/mommy-vegetable.png"
            alt=""
            class="w-full rounded-xl"
          />
          <div class="px-2 py-4">
            <p class="text-gray-800 text-base mb-2 font-bold">
              Pertanian adalah sector ekonomi yang penting bagi keberlangsungan
              hidup
            </p>
            <small class="text-gray-500 font-bold">20 Juli 2020</small>
          </div>
        </div>
        <div class="rounded-xl">
          <img
            src="/gallery/mommy-vegetable.png"
            alt=""
            class="w-full rounded-xl"
          />
          <div class="px-2 py-4">
            <p class="text-gray-800 text-base mb-2 font-bold">
              Pertanian adalah sector ekonomi yang penting bagi keberlangsungan
              hidup
            </p>
            <small class="text-gray-500 font-bold">20 Juli 2020</small>
          </div>
        </div>
      </div>
    </WrapperSection>
  </div>
</template>
