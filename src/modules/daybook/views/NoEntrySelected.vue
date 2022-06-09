<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
    <FabComponent @on:click="createNewEntry" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    FabComponent: defineAsyncComponent(() =>
      import("../components/Fab-Component.vue")
    ),
  },
  methods: {
    createNewEntry() {
      this.$router.push({ name: "entry", params: { id: "new" } });
    },
  },
};
</script>

<style lang='scss' scoped>
div {
  height: 100%;
}
</style>