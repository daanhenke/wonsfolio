<template>
  <div class="hero">
    <div class="top line">
      <span>
        Creative
      </span>
      <WireframeVideoContainer class="primary video" />
    </div>
    <div class="bottom line">
      <WireframeContainer class="primary grid scroller">
        Website
      </WireframeContainer>
      <span>
        Designer
      </span>
    </div>
  </div>
</template>

<style scoped>
.hero {
  @apply h-screen flex flex-col self-center w-3/4 pt-40;

  .line {
    @apply flex justify-between;

    span { @apply font-spacegrotesk font-bold text-6xl lg:text-10xl px-4 lg:px-8; }
  }
}

.scroller {
  @apply h-full text-4xl;
  background-size: 2vw 2vw;
}

.video { @apply flex-grow;
  background-image: url(~/assets/images/hero-video-thumbnail.png);
  background-size: cover;
}
</style>
