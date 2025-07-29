<script setup>
import MainButton from './MainButton.vue';

const props = defineProps(['lookbook', 'selected']);
const emit = defineEmits(['toggle']);
</script>

<template>
  <div class="relative flex w-full cursor-pointer flex-col gap-5 rounded border-2 transition" @click="emit('toggle', lookbook)">
    <div class="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded border border-black bg-white text-3xl shadow-xl">
      <i v-if="selected" class="ri-check-fill"></i>
    </div>

    <img :src="`/images/thumbnails/${lookbook.name}.jpg`" :alt="lookbook.name" class="max-h-56 min-h-56 w-full rounded object-cover" />

    <div class="flex items-center justify-center gap-2">
      <h1>{{ lookbook.display }}</h1>
      <div v-if="lookbook.new === 1" class="relative bg-yellow-400 px-5 py-[0.1rem] text-center text-sm font-bold text-neutral-700 after:absolute after:left-[3px] after:top-[61%] after:h-[15px] after:w-[15px] after:rotate-45 after:border after:border-l-0 after:border-t-0 after:border-yellow-400 after:bg-yellow-400 after:content-['']">New</div>
    </div>

    <MainButton class="!w-full">Preview Catalog</MainButton>
  </div>
</template>

<style scoped></style>
