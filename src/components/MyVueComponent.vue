// TEMPLATE
<template>
  <h2>The count is {{ count }}</h2>
  <button @click="increment">UP ⬆️</button>
  <button @click="decrement">DOWN ⬇️</button>

  <p v-show="showLorem">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi dolorum
    maiores, suscipit dolores illum, necessitatibus unde placeat officiis quasi
    deserunt amet. Cum debitis amet ut quibusdam pariatur voluptatum harum?
  </p>
  <div>
    <button @click="toggleShowLorem">{{ buttonLabel }}</button>
  </div>
</template>

// SCRIPT SETUP
<script setup>
import { ref, computed } from "vue";

// Count
const count = ref(0); // ref() is a Vue 3 function that creates a reactive reference
const increment = () => count.value++;
const decrement = () => count.value--;

// Show/hide lorem text
const showLorem = ref(true);
const toggleShowLorem = () => {
  showLorem.value = !showLorem.value;
};
const buttonLabel = computed(() =>
  showLorem.value ? "Hide Lorem" : "Show Lorem"
);
</script>

// STYLES
<style scoped></style>
