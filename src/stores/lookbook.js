import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { getLanguageAPI } from '@/utils/getLanguageApi';

export const useLookbookStore = defineStore('lookbooks', () => {
  const lookbooks = ref([]);
  const selectedLookbooks = ref([]);
  const { locale } = useI18n();

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { lookbooks, selectedLookbooks, getLookbooks };
});
