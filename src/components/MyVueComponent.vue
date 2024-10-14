<!-- TEMPLATE -->
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

  <!-- v-for and Attribute binding -->
  <h3>All books</h3>
  <ul>
    <li
      v-for="book in books"
      :class="{ fav: book.isFav }"
      @click="toggleFav(book)"
    >
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <img :src="book.img" :alt="book.title" />
    </li>
  </ul>
  <h3>Favourite books</h3>
  <ul>
    <li v-for="book in favBooks">
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <img :src="book.img" :alt="book.title" />
    </li>
  </ul>
  <!-- Mouse events -->
  <!-- define $event to access the event object with other arguments -->
  <div class="box" @mouseover="handleEvent($event, 5)">mouseover</div>
  <div class="box" @mouseleave="handleEvent">mouseleave</div>
  <div class="box" @dblclick="handleEvent">double click</div>
  <div class="box" @mousemove="handleMouseMove">
    Position {{ x }} and {{ y }}
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, computed } from "vue";

// Books
const books = ref([
  {
    title: "name of the wind",
    author: "patrick rothfuss",
    img: "assets/1.jpg",
    isFav: true,
  },
  {
    title: "the way of kings",
    author: "brandon sanderson",
    img: "assets/2.jpg",
    isFav: false,
  },
  {
    title: "the final empire",
    author: "brandon sanderson",
    img: "assets/3.jpg",
    isFav: true,
  },
]);
// Methods
const toggleFav = (book) => {
  book.isFav = !book.isFav; // toggle the isFav property
};
// Computed
const favBooks = computed(() => {
  return books.value.filter((book) => book.isFav);
});

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

<!-- STYLES -->
<style scoped>
.box {
  padding: 100px;
  width: 400px;
  text-align: center;
  background-color: antiquewhite;
  margin: 20px;
  display: inline-block;
}
li {
  list-style-type: none;
  background: #fff;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
li.fav {
  background: #ff9ed2;
  color: white;
}
</style>
