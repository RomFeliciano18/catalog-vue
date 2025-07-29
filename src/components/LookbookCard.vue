<script setup>
import MainButton from './MainButton.vue';

const props = defineProps(['lookbook']);
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <img :src="`/images/thumbnails/${lookbook.name}.jpg`" :alt="lookbook.name" class="max-h-56 min-h-56 w-full rounded object-cover" />
    <div class="flex items-center justify-center">
      <h1>{{ lookbook.display }}</h1>
    </div>
    <MainButton class="!w-full">Preview Catalog</MainButton>
  </div>
</template>

<style scoped></style>
