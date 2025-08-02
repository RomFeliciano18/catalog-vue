<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  lookbook: Object,
  url: String,
});
const emit = defineEmits(['close']);

const handleKeydown = (e) => {
  if (e.key === 'Escape') emit('close');
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div class="relative h-[90vh] w-[90vw] overflow-hidden rounded-lg bg-white p-10 shadow-xl">
      <button class="absolute right-2 top-2 z-10 text-xl transition-all hover:text-red-500" @click="emit('close')">✖</button>
      <iframe v-if="url" :src="url" class="h-full w-full" :title="lookbook.name" />
      <div v-else class="flex h-full items-center justify-center text-3xl">
        <h1>Sorry, No Preview Available!</h1>
      </div>
    </div>
  </div>
</template>
