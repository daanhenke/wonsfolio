<script setup lang="ts">
  import { footer as navigation } from '~/assets/config/navigation.json';
</script>

<template>
  <div class="footer">
    <div class="flavor">
      <h2>Amazing ideas?</h2>
      <span>Gaan we doen joh.</span>
    </div>
    <ul class="links">
      <li class="link-container" v-for="item in navigation" :key="item.slug">
        <a class="link">
          <div class="text">
            <h2>{{ item.label }}</h2>
            <span>{{ item.subtext }}</span>
          </div>
          <div class="button">
            >
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer {
  @apply flex justify-between p-12;

  .links {
    @apply flex flex-col;

    .link-container {
      @apply flex-grow;

      .link {
        @apply py-4 flex justify-between;
      }
    }
  }
}

</style>
