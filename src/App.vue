<template>
  <div id="app">
    <img src="./assets/logo.png">

    <h1>{{msg}}</h1>
    <ul>
   <!--   <router-link to='/index' tag='li'><a href="/index">Index</a></router-link>
      <router-link to='/hello' tag='li'><a href="/hello">Hello</a></router-link>
      <router-link to='/form' tag='li'><a href="/form">Hello</a></router-link>-->
    </ul>
    <ul>
      <li v-for="(item,key) in data">{{item}}</li>
    </ul>
    <router-view/>


  </div>
</template>


<script>
  export default {
    name:'App',
    data(){
      return {
        data:[]
      }
    },
    mounted:function(){
      this.$.axios.get('/api/data').then(res =>{
        this.data = res.data;
        console.log(res);
      })
    }
  }
</script>

<style lang="scss">
  @import './styles/index.scss'; // 全局自定义的css样式
</style>
