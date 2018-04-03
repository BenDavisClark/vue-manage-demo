<template>
  <section class="el-container is-vertical main-container">
    <header class="el-header" style="height: 80px; background-color: rgb(64, 158, 255);">
      <div class="demo-typo-box typo-PingFang">
        Vue管理系统
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
    <section class="el-container">
          <aside class="el-aside" style="width: 250px;">
            <el-row class="tac" style="height: 100%;">
              <el-col :span="24" style="height:100%">
                <el-menu
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                      <!-- 使用 router-link 组件来导航. -->
                      <!-- 通过传入 `to` 属性指定链接. -->
                      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
                      <router-link to='/home/index'><el-menu-item index="1-3"><i class="fa fa-home fa-fw"></i>index</el-menu-item></router-link>
                      <router-link to='/home/form'><el-menu-item index="1-2"><i class="fa fa-home fa-fw"></i>form</el-menu-item></router-link>
                      <router-link to='/home/hello'><el-menu-item index="1-4"><i class="fa fa-home fa-fw"></i>hello</el-menu-item></router-link>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-setting"></i>
                      <span>导航二</span>
                    </template>
                    <el-menu-item-group>
                      <router-link to='/home/formValidator'> <el-menu-item index="2-2">表单</el-menu-item></router-link>
                      <router-link to='/home/table'><el-menu-item index="2-3">表格</el-menu-item></router-link>
                      <router-link to='/home/list'><el-menu-item index="2-4">列表</el-menu-item></router-link>
                      <router-link to='/home/amap'><el-menu-item index="2-5">地图</el-menu-item></router-link>
                    </el-menu-item-group>
                  </el-submenu>
                  <router-link to='/home/menu'>
                    <el-menu-item index="3">
                      <span slot="title"> <i class="el-icon-menu"></i> 导航三</span>
                    </el-menu-item>
                  </router-link>
                </el-menu>
              </el-col>
            </el-row>
          </aside>
         <main class="el-main">
           <!-- 路由出口 -->
           <!-- 路由匹配到的组件将渲染在这里 -->
           <router-view></router-view>
         </main>
    </section>
  </section>
</template>

<script>
     import '../utils/digitClock.js'
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

    import {formatDate} from '../utils/date.js'
    export default {
        name: "home",
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
      methods: {
        /*  handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },*/
          goBack () {
            window.history.length > 1
              ? this.$router.go(-1)
              : this.$router.push('/')
          }
      },
      computed: {
        username () {
          // 我们很快就会看到 `params` 是什么
          return this.$route.params.username
        }
      },
      mounted(){
      },
    }
</script>


<style lang="scss">
  @import '../styles/mixin.scss';

  .main-container{
    height:100%;
    ul li a{
      color:#444;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
    }
   .el-aside ul li.is-active{
      background-color:#ecf5ff;
    }
   .el-aside ul li a.router-link-active{
      color:#409eff;
    }
    .demo-typo-box {
      height: 80px;
      width: auto;
      position: relative;
      font-size: 22px;
      color: #fff;
      text-align: center;
      line-height: 80px;
      display: inline-block;
      margin-left: 5px;
    }
    .header-operations span{
      opacity:1;
    }
  }

</style>

