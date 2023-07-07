<script setup lang="ts">
  import { header as navigation } from '~/assets/config/navigation.json';
</script>

<template>
  <nav class="header">
    <div class="logo">
      <WireframeLogo>Wessel Oud</WireframeLogo>
    </div>
    <ul class="links">
      <li class="link" v-for="item in navigation" :key="item.slug">
        <WireframeContainer v-if="item.slug === 'get-in-touch'">{{ item.label }}</WireframeContainer>
        <NuxtLink v-else to="/">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .header { @apply flex static bg-background z-10 justify-between items-center px-24 py-12; }
  .links { @apply flex items-center; }
  .link { @apply px-8 font-jost font-medium text-xl; }
</style>
