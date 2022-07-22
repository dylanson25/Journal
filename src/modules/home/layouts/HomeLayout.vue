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
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="true"
      :timeout="3000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`../assets/${slide}.jpg`)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </main>
</template>

<script>
import { ref } from "vue";
import { defineAsyncComponent } from "vue";
import Carousel from "../components/Corousel-component.vue";
import Slide from "../components/CorouselSlide-component.vue";
export default {
  components: {
    NavbarComponent: defineAsyncComponent(() =>
      import("../components/Navbar-component.vue")
    ),
    Carousel,
    Slide,
  },

  setup() {
    const carouselSlides = ref(["HomeImage1", "HomeImage2", "HomeImage3"]);
    return {
      carouselSlides,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  align-items: center;
  display: flex;
  height: 90vh;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
}
.description {
  display: flex;
  flex-wrap: wrap;
  width: 40%;
}
.description__title {
  color: black;
  font-weight: 600;
  margin-bottom: 1rem;
}
.description__quote {
  font-size: 20px;
}
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 100%;
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 80%;
      height: 90%;
      object-fit: cover;
    }
  }
}
@media only screen and (max-width: 800px) {
  .home {
    flex-direction: column;
  }
  .description {
    width: 100%;
  }
  .carousel{
    width: 100%;
  }
}
</style>
