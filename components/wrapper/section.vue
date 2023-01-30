<template>
  <div class="w-full">
    <div class="">
      <div class="max-md:px-10 md:px-20 lg:px-36">
        <slot />
      </div>
    </div>
    <slot name="end" />
  </div>
</template>

<script setup lang="ts"></script>
