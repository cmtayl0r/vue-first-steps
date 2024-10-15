<template>
  <h1>Vue Test</h1>
  <h3>{{ name }}</h3>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <!-- input bound to newTask variable -->
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
  <br />
  <button @click="toggleStatus">Toggle Status</button>
</template>

<script setup>
// IMPORTS
import { onMounted, ref } from "vue";

// REACTIVE VARIABLES
const name = ref("Chris Taylor");
const status = ref("active");
const tasks = ref(["task1", "task2", "task3"]);
const newTask = ref(""); // new task input

//METHODS
const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value !== "") {
    // check if new task input is not empty
    tasks.value.push(newTask.value); // add new task to tasks array
    newTask.value = ""; // clear new task input
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1); // remove task from tasks array
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    // map through data and return only the title of each task
    // set the tasks array to the new array of task titles
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped></style>
