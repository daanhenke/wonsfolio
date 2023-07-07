<template>
  <main class="content">
    <slot />
    <svgo-background-blob class="blob" />
  </main>
</template>

<style scoped>
.content {
  @apply relative flex flex-col;

  --content-cutoff-radius: 2rem;
  --content-circle-offset: 2rem;

  border-bottom-left-radius: var(--content-cutoff-radius);
  border-bottom-right-radius: var(--content-cutoff-radius);

  .blob {
    @apply absolute left-0 right-0;
    width: unset;
    height: unset;
    top: 60vh;
    filter: blur(80px);
  }

  &::before {
    @apply bg-secondary h-2 w-2 absolute rounded;
    bottom: var(--content-circle-offset);
    left: var(--content-circle-offset);
    content: '';
  }

  &::after {
    @apply bg-primary h-2 w-2 absolute rounded;
    bottom: var(--content-circle-offset);
    right: var(--content-circle-offset);
    content: '';
  }
}
</style>
