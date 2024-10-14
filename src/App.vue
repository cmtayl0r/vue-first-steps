<template>
  <!-- <MyVueComponent /> -->
  <h1>My first Vue App</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">Click me</button>
  <Modal />
</template>

<script setup>
import { ref } from "vue";
import MyVueComponent from "./components/MyVueComponent.vue";
import Modal from "./components/Modal.vue";

const name = ref(null);

const handleClick = () => {
  console.log("clicked");
  name.value.focus();
  name.value.classList.add("active");
};
</script>

<style scoped></style>
