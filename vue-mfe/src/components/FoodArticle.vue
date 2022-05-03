<template>
  <div class="article row">
    <img :src="imgSrc" class="col-4" alt="img">
    <div class="title-description col-8">
      <div class="title">{{ this.title }}</div>
      <div class="description">{{ this.description }}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FoodArticle",
  props: [
      'imgSrc',
      'title',
      'description'
  ]
}
</script>

<style scoped>

</style>