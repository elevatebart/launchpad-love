<template>
  <h1 class="text-3xl mt-12">Welcome to Cypress!</h1>
  <p class="text-gray-400 my-2 w-180 mx-auto">
    Before we get started with testing your project, please confirm which method
    of testing you would like to use for the initial tests that you’ll be
    writing.
  </p>
  <div>
    <TestingType />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TestingType from "./TestingType.vue";

export default defineComponent({
  components: {
    TestingType,
  },
  setup() {},
});
</script>
