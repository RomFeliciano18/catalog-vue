<script setup>
import LookbookCard from '@/components/LookbookCard.vue';
import { useLookbookStore } from '@/stores/lookbook';
import { onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const storeLB = useLookbookStore();
const { locale } = useI18n();

const toggleLookbook = (lookbook) => {
  const index = storeLB.selectedLookbooks.findIndex((item) => item._id === lookbook._id);

  if (index === -1) {
    storeLB.selectedLookbooks.push(lookbook);
  } else {
    storeLB.selectedLookbooks.splice(index, 1);
  }
};

const isSelected = (lookbook) => {
  return storeLB.selectedLookbooks.some((item) => item._id === lookbook._id);
};

const fetchLookbooks = async () => {
  await storeLB.getLookbooks();
};

onMounted(() => {
  if (storeLB.lookbooks.length > 0) return;
  fetchLookbooks();
});

watch(locale, () => {
  fetchLookbooks();
});
</script>

<template>
  <div class="mt-10 text-center">
    <div class="grid grid-cols-3 gap-10">
      <LookbookCard v-for="lookbook in storeLB.lookbooks" :key="lookbook._id" :lookbook="lookbook" :selected="isSelected(lookbook)" @toggle="toggleLookbook" />
    </div>
  </div>
</template>

<style scoped></style>
