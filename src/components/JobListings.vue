<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobListing
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";

// CHILD COMPONENTS
import JobListing from "./JobListing.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

// DATA
// Set up a reactive reference to store the job listings
// Have an empty array as the initial value
const jobs = ref([]);
// Fetch the job listings from the API
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:9001/jobs");
    jobs.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style lang="scss" scoped></style>
