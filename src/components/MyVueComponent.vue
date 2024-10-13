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
  <br />
  <!-- Mouse events -->
  <!-- define $event to access the event object with other arguments -->
  <div class="box" @mouseover="handleEvent($event, 5)">mouseover</div>
  <div class="box" @mouseleave="handleEvent">mouseleave</div>
  <div class="box" @dblclick="handleEvent">double click</div>
  <div class="box" @mousemove="handleMouseMove">
    Position {{ x }} and {{ y }}
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

// Mouse events
const handleEvent = (e, data) => {
  console.log(e.type);
  if (data) {
    console.log(data);
  }
};
const x = ref(0);
const y = ref(0);
const handleMouseMove = (e) => {
  x.value = e.offsetX;
  y.value = e.offsetY;

  // Reset to 0 on mouse leave
  e.target.addEventListener("mouseleave", () => {
    x.value = 0;
    y.value = 0;
  });
};
</script>

// STYLES
<style scoped>
.box {
  padding: 100px;
  width: 400px;
  text-align: center;
  background-color: antiquewhite;
  margin: 20px;
  display: inline-block;
}
</style>
