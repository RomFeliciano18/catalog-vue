import { computed, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { getLanguageAPI } from '@/utils/getLanguageApi';

const LOCAL_STORAGE_KEY = 'selectedLookbooks';

export const useLookbookStore = defineStore('lookbooks', () => {
  const { locale } = useI18n();
  const lookbooks = ref([]);

  // Load from localStorage on init
  const savedLookbooks = localStorage.getItem(LOCAL_STORAGE_KEY);
  const selectedLookbooks = ref(
    savedLookbooks ? JSON.parse(savedLookbooks) : []
  );

  // Sync to localStorage whenever selectedLookbooks changes
  watch(
    selectedLookbooks,
    (newVal) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newVal));
    },
    { deep: true }
  );

  // Computed feature array
  const lookbookFeatures = computed(() => {
    const features = selectedLookbooks.value.flatMap((lb) => {
      return lb.feature
        ? lb.feature
            .split('&')
            .map((f) => f.trim())
            .filter((f) => f !== '')
        : [];
    });
    return [...new Set(features)];
  });

  const getLookbooks = async () => {
    try {
      const res = await fetch(getLanguageAPI(locale.value));
      const data = await res.json();

      data.sort((a, b) => {
        const dateA = new Date(a.season);
        const dateB = new Date(b.season);
        return dateB - dateA;
      });

      lookbooks.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return { lookbooks, selectedLookbooks, lookbookFeatures, getLookbooks };
});
