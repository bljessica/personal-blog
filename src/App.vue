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
    // min-width: 780px;
    margin: 0;
    padding: 0;
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
}
</style>
