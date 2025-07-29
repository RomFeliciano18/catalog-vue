<script setup>
import { RouterView } from 'vue-router';
import AppNav from './components/AppNav.vue';
</script>

<template>
  <AppNav />
  <main class="container-padding">
    <RouterView />
  </main>
</template>

<style scoped></style>
