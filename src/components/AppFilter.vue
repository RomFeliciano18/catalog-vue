<script setup>
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import MainButton from './MainButton.vue';
import { computed } from 'vue';
import { useLookbookStore } from '@/stores/lookbook';

const { locale, availableLocales } = useI18n();
const router = useRouter();
const route = useRoute();

const storeLB = useLookbookStore();

const test = () => {
  console.log(storeLB.selectedLookbooks);
};

const language = computed({
  get: () => locale.value,
  set: (newLocale) => {
    if (availableLocales.includes(newLocale)) {
      router.push({
        name: route.name,
        params: { ...route.params, locale: newLocale },
      });
    }
  },
});

const getLabel = (loc) => {
  const labels = {
    us: 'United States',
    ca: 'Canada - EN',
    fr: 'Canada - FR',
  };
  return labels[loc] || loc.toUpperCase();
};
</script>

<template>
  <div class="mt-10 flex items-center justify-between gap-4">
    <select v-model="language">
      <option v-for="loc in availableLocales" :key="loc" :value="loc">
        {{ getLabel(loc) }}
      </option>
    </select>
    <MainButton @click="test" variant="secondary" class="text-white">Next</MainButton>
  </div>
</template>

<style scoped>
select {
  @apply w-52 cursor-pointer rounded border border-neutral-500 p-2;
}
</style>
