<template>
  <WizardLayout>
    <BigSelect
      name="Front-end Framework"
      @select="setFEFramework"
      :options="frameworks"
      :value="selectedFrameworkId"
    />
    <BigSelect
      name="Bundler"
      @select="setFEBundler"
      :options="bundlers"
      :value="selectedBundlerId"
    />
  </WizardLayout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import WizardLayout from "./WizardLayout.vue";
import BigSelect from "./BigSelect.vue";
import {
  Framework,
  supportedFrameworks,
  supportedBundlers,
  Bundler,
} from "../statics";
import { useStore } from "../store";

export default defineComponent({
  components: { WizardLayout, BigSelect },
  props: {
    detectedFramework: {
      type: String,
      default: "none",
    },
    detectedBundler: {
      type: String,
      default: "none",
    },
  },
  setup(props) {
    const store = useStore();
    const selectedFramework = ref<Framework | undefined>(undefined);
    const selectedFrameworkId = ref(props.detectedFramework);
    const selectedBundlerId = ref(props.detectedBundler);

    const fwBundlerId = computed(() => selectedFramework?.value?.bundler);

    const setFEFramework = (framework: Framework) => {
      selectedFrameworkId.value = framework.id;
      selectedFramework.value = framework;
      store.setComponentFramework(framework);
      if (fwBundlerId.value) {
        const foundBundler = supportedBundlers.find(
          (bund) => bund.id === fwBundlerId.value
        );
        if (foundBundler) {
          setFEBundler(foundBundler);
        }
      }
    };

    const frameworks = supportedFrameworks.map(
      (framework: Framework & { description?: string }) => {
        if (framework.id === props.detectedFramework) {
          framework.description = "(detected)";
          setFEFramework(framework);
        }
        return framework;
      }
    );

    const setFEBundler = (bundler: Bundler) => {
      selectedBundlerId.value = bundler.id;
      store.setComponentBundler(bundler);
    };

    const bundlers = supportedBundlers.map(
      (bundler: Bundler & { description?: string }) => {
        if (bundler.id === props.detectedBundler) {
          bundler.description = "(detected)";
          setFEBundler(bundler);
        }
        return bundler;
      }
    );

    return {
      setFEFramework,
      setFEBundler,
      frameworks,
      selectedFrameworkId,
      bundlers,
      selectedBundlerId,
    };
  },
});
</script>
