<template>
  <div class="wireframe-container" data-loader="box">
    <div class="corner left" />
    <div class="corner right" />
    <slot />
  </div>
</template>

<style scoped>
.wireframe-container { @apply relative border-2 flex justify-center items-center;
  /* animation: wireframe-test 1s linear infinite; */
  border-color: var(--wireframe-color);
}

.grid {
  background-position: 0 -1px;
  background-image:
    linear-gradient(to right, rgba(0, 255, 0, 0.2) 2px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 255, 0, 0.2) 2px, transparent 1px);

}

.secondary { --wireframe-color: var(--color-secondary); }
.primary { --wireframe-color: var(--color-primary); }

.corner {
  @apply absolute h-full w-.5;

  &.left {
    @apply left-0;
  }

  &.right {
    @apply right-0;
  }

  &::before {
    @apply absolute h-2;
    left: -.25rem;
    right: -.25rem;
    top: -.25rem;
    content: '';
    background-color: var(--wireframe-color);
  }

  &::after {
    @apply absolute h-2;
    left: -.25rem;
    right: -.25rem;
    bottom: -.25rem;
    content: '';
    background-color: var(--wireframe-color);
  }
}
</style>
