<template>
  <div class="w-full">
    <div class="py-20">
      <div class="px-60 text-base space-y-10">
        <slot />
      </div>
    </div>
    <slot name="end" />
  </div>
</template>

<script setup lang="ts"></script>
