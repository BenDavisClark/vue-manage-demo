<template>
  <header class="el-header" style="height: 80px; background-color: rgb(64, 158, 255);">
    <img src="../../assets/logo.png" width="50" height="50" class="header-img">
    <div class="demo-typo-box typo-PingFang">
      <span>Vue管理系统</span>
    </div>
    <ul class="header-operations">
      <li>
         <span>
          欢迎您 admin &emsp;
          &emsp;&emsp; {{time | formatDate}}
           <span id="clock1"></span>
        </span>
      </li>
    </ul>
  </header>
</template>

<script>
    import '../../utils/digitClock.js'
    $(function(){
      $("#clock1").MyDigitClock({
        fontSize:13,
        fontFamily:"",
        fontColor: "#fff",
        fontWeight:"normal",
        bAmPm:false,
        background:'#409eff',
        bShowHeartBeat:false
      });
    })

    import {formatDate} from '../../utils/date.js'
    export default {
        name: "nav-bar",
        data(){
          return{
            time:new Date()
          }
        },
        filters: {
          formatDate(time) {
            let  date = new Date(time);
            return formatDate(date, "yyyy-MM-dd");
          }
        },
    }
</script>

<style lang="scss">
  @import '../../styles/mixin';

  .el-header{
    height:50px!important;
  }
  .header-operations li{
    height:50px;
    line-height:50px;
  }
  .demo-typo-box {
    height: 50px;
    width: auto;
    position: relative;
    font-size: 22px;
    color: #fff;
    text-align: center;
    line-height: 50px;
    display: inline-block;
    margin-left: 45px;
  }
  .header-operations span{
    opacity:1;
  }
  .header-img{
    position: absolute;
    width: 40px;
    height: 40px;
    top: 8px;
  }

</style>
