<script setup lang="ts">
import WireframeContainer from '~/components/wireframe/container.vue';

let elements = ref([]);
let isDone = ref(false);

const lookup = {
  'box': WireframeContainer
}

onMounted(() =>
{
  setTimeout(() =>
  {
    elements.value = [];
    const loadableElements = document.querySelectorAll('[data-loader]');
    loadableElements.forEach(el =>
    {
      const bbox = el.getBoundingClientRect();
      console.log(bbox);
      elements.value.push({
        el,
        type: el.dataset['loader'],
        style: {
          position: 'absolute',
          left: `${bbox.left}px`,
          top: `${bbox.top}px`,
          width: `${bbox.width}px`,
          height: `${bbox.height}px`
        }
      });
    });

    console.log(elements.value.map(el => el.style));

    setTimeout(() =>
    {
      isDone.value = true;
    }, 1000);

  }, 10);
});

</script>

<template>
  <div class="loader" :class="{'finished': isDone}">
    <component v-for="el in elements" :v-key="el" :is="lookup[el.type]" :style="el.style">
    </component>
  </div>
</template>

<style scoped>
.loader {
  @apply absolute bg-white left-0 right-0 top-0 bottom-0 z--5;
}

.loader.finished {
  transition: opacity 1s;
  opacity: 0;
}
</style>
