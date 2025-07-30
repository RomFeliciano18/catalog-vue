<!-- ModalPreview.vue -->
<script setup>
const props = defineProps({
  lookbook: Object,
  url: String,
});
const emit = defineEmits(['close']);
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div class="relative h-[90vh] w-[90vw] overflow-hidden rounded-lg bg-white p-10 shadow-xl">
      <button class="absolute right-2 top-2 z-10 text-xl" @click="emit('close')">✖</button>
      <iframe :src="url" class="h-full w-full" :title="lookbook.name" />
    </div>
  </div>
</template>
