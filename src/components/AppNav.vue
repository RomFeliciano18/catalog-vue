<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute();

const tutorialOpen = ref(false);

const { locale } = useI18n();
</script>

<template>
  <header class="relative flex items-center justify-center lg:justify-start">
    <RouterLink :to="`/${locale}`">
      <img src="/logo.png" alt="logo" class="w-96 px-10 py-4 lg:py-0" />
    </RouterLink>
    <nav class="hidden w-full grid-cols-3 bg-black px-10 text-neutral-400 lg:grid">
      <div>
        <RouterLink :to="`/${locale}`" :class="['hover:text-primary flex w-48 cursor-pointer items-center transition-colors', route.path === `/${locale}` ? 'active-link' : '']">
          <span class="montserrat-bold text-[8rem]">1</span>
          <span class="w-36 text-2xl uppercase">Select your Lookbooks</span>
        </RouterLink>
      </div>
      <div>
        <RouterLink :to="`/${locale}/upload-logo`" :class="['hover:text-primary flex w-48 cursor-pointer items-center transition-colors', route.path === `/${locale}/upload-logo` ? 'active-link' : '']">
          <span class="montserrat-bold text-[8rem]">2</span>
          <span class="w-36 text-2xl uppercase">Upload your Logo</span>
        </RouterLink>
      </div>
      <div :class="['hover:text-primary flex w-48 cursor-pointer items-center transition-colors', route.path === `/${locale}/enter-email` ? 'active-link' : '']">
        <span class="montserrat-bold text-[8rem]">3</span>
        <span class="w-36 text-2xl uppercase">Enter your email</span>
      </div>
    </nav>
    <i @click="tutorialOpen = true" class="ri-question-line absolute right-4 top-4 hidden cursor-pointer text-3xl text-yellow-500 lg:block"></i>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply text-primary;
}
</style>
