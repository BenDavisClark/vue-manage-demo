<template>
  <section class="el-container is-vertical main-container">
    <navbar></navbar>
    <section class="el-container">
         <toggle-side></toggle-side>
         <main class="el-main">
           <!-- 路由出口 -->
           <!-- 路由匹配到的组件将渲染在这里 -->
           <app-main></app-main>
         </main>
    </section>
  </section>
</template>

<script>
    import Navbar from './Navbar'
    import ToggleSide from './ToggleSide'
    import AppMain from './AppMain'
    export default {
      name: "home",
      components: {
        Navbar,
        ToggleSide,
        AppMain
      }
    }
</script>


<style lang="scss">
  @import '../../styles/mixin';
  .main-container{
    height:100%;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>

