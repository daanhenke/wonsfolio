<template>
  <div class="wireframe-container" data-loader="box">
    <div class="corner left" />
    <div class="corner right" />
    <slot />
  </div>
</template>

<style scoped>
.wireframe-container { @apply relative border-secondary border-2 w-40 h-16 flex justify-center items-center;
  /* animation: wireframe-test 1s linear infinite; */
  background-size: 20% 50%;
  background-position: 0 -1px;
  background-image:
    linear-gradient(to right, rgba(0, 255, 0, 0.2) 2px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 255, 0, 0.2) 2px, transparent 1px);
}

.corner {
  @apply absolute h-full w-.5;

  &.left {
    @apply left-0;
  }

  &.right {
    @apply right-0;
  }

  &::before {
    @apply bg-secondary absolute h-2;
    left: -.25rem;
    right: -.25rem;
    top: -.25rem;
    content: '';
  }

  &::after {
    @apply bg-secondary absolute h-2;
    left: -.25rem;
    right: -.25rem;
    bottom: -.25rem;
    content: '';
  }
}
</style>
