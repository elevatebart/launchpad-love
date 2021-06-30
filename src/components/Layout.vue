<template>
  <div class="grid grid-cols-launchpad bg-white relative text-center">
    <div
      class="
        h-15
        border-b
        bg-gray-900
        text-light-50
        border-gray-700
        flex
        items-center
        justify-center
      "
    >
      =
    </div>
    <div
      class="
        border-b
        text-gray-500
        border-gray-200
        flex
        items-center
        text-left
        px-4
      "
    >
      {{ projectTitle }}
    </div>
    <div class="h-150 bg-gray-900" />
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const projectTitle = "Project title";

    return { projectTitle };
  },
});
</script>
