<script setup>
import { RouterView } from 'vue-router';
import AppNav from './components/AppNav.vue';
</script>

<template>
  <AppNav />
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
