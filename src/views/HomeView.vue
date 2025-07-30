<script setup>
import LookbookCard from '@/components/LookbookCard.vue';
import Modal from '@/components/Modal.vue';
import ModalPreview from '@/components/ModalPreview.vue';
import { useLookbookStore } from '@/stores/lookbook';
import { useModalStore } from '@/stores/modal';
import { onMounted, watch, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const storeLB = useLookbookStore();
const storeModal = useModalStore();

const { locale } = useI18n();

const activeLookbook = ref(null);

const previewUrls = {
  Jan25FR: 'https://gifting-fr-2025.vercel.app/',
  Jan25: 'https://gifting-2025.vercel.app/',
  Gifting24US: 'https://gifting-2024.vercel.app/',
  Gifting24FR: 'https://giftingfr-2024.vercel.app/',
  Gifting24CA: 'https://gifting-2024.vercel.app/',
  Gifting23US: 'https://gift-usa.vercel.app/',
  Gifting23CA: 'https://gift-canada.vercel.app/',
  Ora23: 'https://gifting-ora.vercel.app/',
  Ora23FR: 'https://gifting-ora-french.vercel.app/',
  Gifting23FR: 'https://gifting-french.vercel.app/',
  Jan24: 'https://jan-2024-us.vercel.app/',
  Jan24FR: 'https://jan-2024-fr.vercel.app/',
  TrendReportSetup24: 'https://trendreport-2024-us.vercel.app/',
  TrendReportSetup24FR: 'https://trendreport-2024-fr.vercel.app/',
  TrendReportSetup25: 'https://trendreport-2025-us.vercel.app/',
  TrendReportSetup25FR: 'https://trendreport-setup-2025-fr.vercel.app/',
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

const closeModal = () => {
  activeLookbook.value = null;
};

const previewUrl = computed(() => {
  return activeLookbook.value ? previewUrls[activeLookbook.value.name] : '';
});
</script>

<template>
  <div class="mt-10 text-center">
    <div class="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      <LookbookCard
        v-for="lookbook in storeLB.lookbooks"
        :key="lookbook._id"
        :lookbook="lookbook"
        :selected="storeLB.selectedLookbooks.some((l) => l._id === lookbook._id)"
        @toggle="
          (lb) => {
            const idx = storeLB.selectedLookbooks.findIndex((x) => x._id === lb._id);
            idx === -1 ? storeLB.selectedLookbooks.push(lb) : storeLB.selectedLookbooks.splice(idx, 1);
          }
        "
        @preview="(lb) => (activeLookbook = lb)"
      />
    </div>

    <!-- Modals -->
    <Modal :isOpenModal="storeModal.open" @close="storeModal.open = false"><h1>TEST</h1></Modal>

    <ModalPreview v-if="activeLookbook" :lookbook="activeLookbook" :url="previewUrl" @close="closeModal" />
  </div>
</template>
