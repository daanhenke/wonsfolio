<template>
  <div class="hero">
    <div class="top line">
      <span>
        Creative
      </span>
      <div>
        Video
      </div>
    </div>
    <div class="bottom line">
      <div>
        Pijlding
      </div>
      <span>
        Designer
      </span>
    </div>
  </div>
</template>

<style scoped>
.hero {
  @apply h-screen flex flex-col self-center w-2/3 pt-40;

  .line {
    @apply flex justify-between;

    span { @apply font-spacegrotesk font-bold text-11xl; }
  }
}
</style>
