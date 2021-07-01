<template>
  <WizardLayout next="Install" alt="Install these packages manually">
    <PackagesList />
  </WizardLayout>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "../store";
import WizardLayout from "./WizardLayout.vue";
import PackagesList from "./PackagesList.vue";

function installIt() {}
function goToInstall() {}

export default defineComponent({
  components: {
    WizardLayout,
    PackagesList,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.setMeta({
        title: "Install Dev Dependencies",
        description:
          "We need to install the following packages in order for component testing to work.",
      });

      store.setAltFunction(() => {
        goToInstall();
      });

      store.setBackFunction(() => {
        store.resetComponentSetup();
      });

      store.setNextFunction(() => {
        installIt();
      });
    });
    return;
  },
});
</script>
