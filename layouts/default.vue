<template>
  <!-- <LoaderRoot /> -->
  <LayoutContent>
  <LayoutHeader />
    <slot />
  </LayoutContent>
  <LayoutFooter />
</template>

<style>
body { @apply bg-background text-text; }
#__nuxt { @apply overflow-hidden; }
</style>
