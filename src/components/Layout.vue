<template>
  <div
    class="
      min-h-screen
      grid grid-cols-launchpad grid-rows-launchpad
      bg-white
      relative
      text-center
    "
  >
    <div
      class="
        border-b
        bg-gray-900
        text-gray-200
        border-gray-700
        flex
        items-center
        justify-center
        text-lg
      "
    >
      <FaIcon icon="align-left" size="lg" />
    </div>
    <div
      class="
        border-b
        text-gray-600
        border-gray-200
        flex
        items-center
        text-left
        px-5
        text-sm
      "
    >
      {{ projectTitle }}
    </div>
    <div class="bg-gray-900 text-gray-500 text-lg flex flex-col items-center">
      <FaIcon icon="tachometer-alt" class="my-4" />
      <FaIcon icon="terminal" class="my-4" />
      <FaIcon icon="code-branch" class="my-4" />
      <FaIcon icon="cog" class="my-4" />
    </div>
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
