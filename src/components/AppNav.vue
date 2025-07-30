<script setup>
import { useLookbookStore } from '@/stores/lookbook';
import { useModalStore } from '@/stores/modal';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();

const storeLB = useLookbookStore();
const storeModal = useModalStore();

const handleGoToStep2 = () => {
  if (!storeLB.selectedLookbooks.length) return alert('SELECT A LOOKBOOK BEFORE GOING TO STEP 2!');
  router.push(`/${locale.value}/upload-logo`);
};
</script>

<template>
  <header class="relative flex items-center justify-center lg:justify-start">
    <RouterLink :to="`/${locale}`">
      <img src="/logo.png" alt="logo" class="w-96 px-10 py-4 lg:py-0" />
    </RouterLink>
    <nav class="hidden w-full grid-cols-3 bg-black px-10 text-neutral-400 lg:grid">
      <div>
        <RouterLink :to="`/${locale}`" :class="['flex w-48 cursor-pointer items-center transition-colors hover:text-primary', route.path === `/${locale}` ? 'active-link' : '']">
          <span class="montserrat-bold text-[8rem]">1</span>
          <span class="w-36 text-2xl uppercase">Select your Lookbooks</span>
        </RouterLink>
      </div>

      <div @click="handleGoToStep2" :class="['flex w-48 cursor-pointer items-center transition-colors hover:text-primary', route.path === `/${locale}/upload-logo` ? 'active-link' : '']">
        <span class="montserrat-bold text-[8rem]">2</span>
        <span class="w-36 text-2xl uppercase">Upload your Logo</span>
      </div>

      <div :class="['flex w-48 cursor-pointer items-center transition-colors hover:text-primary', route.path === `/${locale}/enter-email` ? 'active-link' : '']">
        <span class="montserrat-bold text-[8rem]">3</span>
        <span class="w-36 text-2xl uppercase">Enter your email</span>
      </div>
    </nav>
    <div class="absolute right-4 top-4 hidden cursor-pointer items-center gap-2 text-3xl text-yellow-500 lg:flex">
      <i @click="storeModal.open = true" class="ri-question-line"></i>
      <i class="ri-play-circle-line"></i>
    </div>
  </header>
</template>

<style scoped>
.active-link {
  @apply text-primary;
}
</style>
