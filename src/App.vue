<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Microsoft YaHei';
  background: #F7F7F7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  min-width: 700px;
  font-size: 16px;
  min-width: 1010Px;//忽略单个属性的最简单的方法是在像素单元声明中使用大写
}
</style>
