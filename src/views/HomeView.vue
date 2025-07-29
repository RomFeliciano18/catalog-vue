<script setup>
import LookbookCard from '@/components/LookbookCard.vue';
import { useLookbookStore } from '@/stores/lookbook';
import { onMounted } from 'vue';

const storeLB = useLookbookStore();

onMounted(async () => {
  if (storeLB.lookbooks.length > 0) return;
  storeLB.getLookbooks();
});
</script>

<template>
  <div class="mt-24 text-center">
    <div class="grid grid-cols-3 gap-10">
      <LookbookCard v-for="lookbook in storeLB.lookbooks" :lookbook="lookbook" :key="lookbook._id" />
    </div>
  </div>
</template>

<style scoped></style>
