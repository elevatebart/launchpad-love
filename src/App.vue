<template>
  <Layout>
    <Wizard />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "./components/Layout.vue";
import Wizard from "./components/Wizard.vue";
import { useStore } from "./store";

export default defineComponent({
  name: "App",
  components: {
    Layout,
    Wizard,
  },
});
</script>
