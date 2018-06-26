<!--父组件中引入子组件-->
<template>
    <div>
      <!--<a href="javascript:;" @click="$store.commit('switch_dialog')">点击</a>-->
      <a href="javascript:;" @click="$store.dispatch('switch_dialog')">点击</a>
      <t-dialog ></t-dialog>
    </div>
</template>

<script>
  import dialog from './dialog.vue'
  export default {
    components:{
      "t-dialog":dialog
    }
  }
</script>
