<template>
  <button
    :key="type.id"
    v-for="type in testingTypes"
    class="h-100 w-100 border border-gray-200 m-5 p-9"
  >
    <FaIcon :icon="type.icon" size="6x" class="m-15 mt-5 text-gray-400" />
    <p class="text-purple-600">{{ type.name }}</p>
    <p class="text-gray-400 text-sm">{{ type.description }}</p>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const testingTypes: Array<{
      name: string;
      icon: string;
      description: string;
      id: string;
    }> = [
      {
        name: "Component Testing",
        icon: "code",
        description:
          "Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur.",
        id: "component",
      },
      {
        name: "E2E Testing",
        icon: "archive",
        description:
          "Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur.",
        id: "e2e",
      },
    ];
    return { testingTypes };
  },
});
</script>
