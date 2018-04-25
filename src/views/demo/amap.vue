<template>
  <div id="app">
    <el-row>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>导航二</el-breadcrumb-item>
        <el-breadcrumb-item>地图</el-breadcrumb-item>
      </el-breadcrumb>
      <br/>
    </el-row>

    <el-amap vid="amapDemo">
      <el-amap-marker v-for="marker in markers" :position="marker.position"></el-amap-marker>
    </el-amap>

    <router-view/>
  </div>
</template>


<script>
  export default {
    name: "#App",
    data(){
      return{
        markers: []
      }
    },
    methods: {

    },
    mounted(){
      // 为地图添加两个人
      this.markers = [
        {
          position: [120.15515, 30.27415]
        }, {
          position: [120.15111, 30.21115]
        }
      ];
      // 模拟实时更新位置
      // 开启一个1s的轮训，每个人的经纬度都自增0.00001
   /*   const step = 0.0001;
      setInterval(() => {
        this.markers.forEach((marker) => {
          marker.position = [marker.position[0] + step, marker.position[1] + step];
        });
      }, 1000);*/
    }
  }
</script>

<style>

</style>


