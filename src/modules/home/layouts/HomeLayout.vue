<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Home view en proceso</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>

<style scoped>
</style>
