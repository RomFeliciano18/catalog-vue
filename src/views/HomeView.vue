<script setup>
import LookbookCard from '@/components/LookbookCard.vue';
import { useLookbookStore } from '@/stores/lookbook';
import { onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const storeLB = useLookbookStore();
const { locale } = useI18n();

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
      <LookbookCard v-for="lookbook in storeLB.lookbooks" :lookbook="lookbook" :key="lookbook._id" />
    </div>
  </div>
</template>

<style scoped></style>
