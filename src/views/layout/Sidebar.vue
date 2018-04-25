<template>
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
              <router-link to='/home/list1'><el-menu-item index="1-3"><i class="fa fa-home fa-fw"></i>mock模拟数据</el-menu-item></router-link>
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
</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

<style lang="scss">
 @import '../../styles/mixin';
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
</style>
