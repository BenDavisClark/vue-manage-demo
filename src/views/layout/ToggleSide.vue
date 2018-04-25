<template>
  <div class="el-toggleSide">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <div v-show="isShow" @click="toggleSide">
        <el-radio-button :label="false">
         <svg class="icon" aria-hidden="true" >
           <use xlink:href="#icon-cebianlan"></use>
         </svg>
        </el-radio-button>
      </div>
      <div v-show="seen"  @click="toggleSideS">
        <el-radio-button :label="true">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cebianlan"></use>
          </svg>
        </el-radio-button>
      </div>
   <!--   <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>-->
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to='/home/list1'><el-menu-item index="1-3"><i class="fa fa-home fa-fw"></i>mock模拟数据</el-menu-item></router-link>
          <router-link to='/home/form'><el-menu-item index="1-2"><i class="fa fa-home fa-fw"></i>form</el-menu-item></router-link>
          <router-link to='/home/hello'><el-menu-item index="1-4"><i class="fa fa-home fa-fw"></i>hello</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span >导航二</span>
        </template>
        <el-menu-item-group>
          <router-link to='/home/formValidator'> <el-menu-item index="2-2">表单</el-menu-item></router-link>
          <router-link to='/home/table'><el-menu-item index="2-3">表格</el-menu-item></router-link>
          <router-link to='/home/list'><el-menu-item index="2-4">列表</el-menu-item></router-link>
          <router-link to='/home/map'><el-menu-item index="2-5">地图</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <router-link to='/home/menu'>
        <el-menu-item index="3">
          <span slot="title" > <i class="el-icon-menu"></i> 导航三</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
  import IconSvg from '../../components/Icon/index'

  export default {
    name: "toggle-side",
    components:{
      IconSvg
    },
    data() {
      return {
        isCollapse: true,
        isShow:true,
        seen:false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleSide() {
        if(this.isShow==true){
          this.isShow = !this.isShow
          this.seen = !this.seen
        }
      },
      toggleSideS(){
        if(this.seen==true){
          this.isShow = !this.isShow
          this.seen = !this.seen
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/mixin';

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-toggleSide{
    border-right: solid 1px #e6e6e6;
  }
  .el-menu{border:0!important;}
  .toggleSide{
    line-height: 1;
    white-space: nowrap;
    background: #fff;
    border: 1px solid #dcdfe6;
    font-weight: 500;
    border-left: 0;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 0;
    position: relative;
  }

  .el-radio-button__inner{
    padding:10px 13px;
    margin-left: 10px;
  }
</style>
