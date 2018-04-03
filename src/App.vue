<template>
  <div id="app">
    <img src="./assets/logo.png">

    <h1>{{msg}}</h1>
    <ul>
   <!--   <router-link to='/index' tag='li'><a href="/index">Index</a></router-link>
      <router-link to='/hello' tag='li'><a href="/hello">Hello</a></router-link>
      <router-link to='/form' tag='li'><a href="/form">Hello</a></router-link>-->
    </ul>
    <router-view/>


  </div>
</template>


<script>
export default {
  name: 'App',
  data(){
    return{
      msg:"welcome to Vue.js World"
    }
  }
}
</script>

<style>

</style>
