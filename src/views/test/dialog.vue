<!--子组件-->
<template>
  <el-dialog :visible.sync="show"></el-dialog>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
      //扩展运算符
    ...mapState({
      show:state => state.dialog.show
    })
  }
</script>
