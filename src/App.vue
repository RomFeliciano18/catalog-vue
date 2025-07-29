<script setup>
import { RouterView } from 'vue-router';
import AppNav from './components/AppNav.vue';
import AppFilter from './components/AppFilter.vue';
</script>

<template>
  <AppNav />
  <main class="container-padding mb-24">
    <AppFilter />
    <RouterView />
  </main>
</template>

<style scoped></style>
