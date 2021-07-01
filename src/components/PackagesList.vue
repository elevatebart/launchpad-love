<template>
  <div
    v-for="(pkg, index) in listOfNecessaryPackages"
    class="flex text-left"
    :class="index > 0 ? 'border-t border-t-gray-200' : undefined"
  >
    <div class="p-5">
      <h2 class="text-indigo-600">{{ pkg.name }}</h2>
      <p class="text-gray-400 text-sm">
        Allows Cypress to mount each Vue component using cy.mount()
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Bundler } from "../statics/bundler";
import { Framework } from "../statics/frameworks";
import { useStore } from "../store";

function getPackages(framework: Framework, bundler: Bundler) {
  const libraryPackage = `@cypress/${framework.library}`;
  const bundlerPackage = `@cypress/${bundler.id}-dev-server`;

  return [
    {
      name: libraryPackage,
    },
    {
      name: bundlerPackage,
    },
  ];
}

export default defineComponent({
  setup() {
    const store = useStore();
    const framework = computed(() => store.getState().component?.framework);
    const bundler = computed(() => store.getState().component?.bundler);
    const listOfNecessaryPackages = getPackages(
      framework.value!,
      bundler.value!
    );
    return { listOfNecessaryPackages };
  },
});
</script>
