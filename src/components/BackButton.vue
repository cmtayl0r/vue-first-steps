<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/jobs"
        class="text-green-500 hover:text-green-600 flex items-center"
      >
        <ArrowLeft class="mr-2" /> Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
</script>

<style lang="scss" scoped></style>
