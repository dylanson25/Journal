<template>
  <NavbarComponent />
  <main class="home">
    <div class="description">
      <h1 class="description__title">The Best Journal Web</h1>
      <q class="description__quote">
        This is an application in which you can create a diary of events that
        are saved with the date of the day, capable of searching by the text
        that was written and adding a relevant image.
      </q>
    </div>
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    NavbarComponent: defineAsyncComponent(() =>
      import("../components/Navbar-component.vue")
    ),
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.home {
  align-items: center;
  background-color: white;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 2rem;
}
.description {
  display: flex;
  flex-wrap: wrap;
  width: 45%;
}
.description__title {
  color: black;
  font-weight: 600;
  margin-bottom: 1rem;
}
.description__quote {
  font-size: 20px;
}
</style>
