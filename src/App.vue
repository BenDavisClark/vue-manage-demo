<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
  export default {
    name:'App',
    data(){
      return {
        test:"测试"
      }
    }
  }
</script>

<style lang="scss">
  @import './styles/index.scss'; // 全局自定义的css样式
</style>
