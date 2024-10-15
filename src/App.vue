<template>
  <Navbar />
  <Hero title="Test Title" subtitle="Test Subtitle" />
  <HomeCards />
  <JobListings :limit="3" :show-button="true" />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import HomeCards from "./components/HomeCards.vue";
import JobListings from "./components/JobListings.vue";
</script>

<style lang="scss" scoped></style>
