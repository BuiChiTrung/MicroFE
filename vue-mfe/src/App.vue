<template>
  <FoodArticle imgSrc="https://i1-dulich.vnecdn.net/2022/04/27/thuanbuomxuoigio-1651050861-16-3491-4425-1651050980.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=fVmVQS-brnUgU6KRr6Na1Q"
               title="Món sashimi 'thuận buồm xuôi gió'"
               description="Sashimi cá bơn vàng thường được ăn vào dịp khai trương hoặc khởi động dự án do có nhiều ý nghĩa về sự thịnh vượng và khởi đầu thuận lợi."
  />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import FoodArticle from "@/components/FoodArticle";
export default {
  components: {FoodArticle}
}
</script>