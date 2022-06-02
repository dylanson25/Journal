<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name: 'entry', params: {id: 10}})"
  >
    <div class="entry-title">
      <span class="text-success fs-5 fw-bold">02</span>
      <span class="mx-1 fs-5">Junio</span>
      <span class="mx-2 fw-light">2022, jueves</span>
    </div>
    <div class="entry-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat suscipit dolorum mollitia. Dolor reprehenderit totam unde, iusto necessitatibus eos incidunt! Veniam esse quasi, excepturi ipsum odio similique. Corrupti, dolorem!
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.entry-description{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}
</style>