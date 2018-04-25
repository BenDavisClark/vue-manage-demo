<template>
  <div class="vue-table-search">
    <slot></slot>
  </div>
</template>
<style lang="scss">
  .vue-table-search {
    padding: 12px 0 12px 20px;
    background: #ebeef1;
    .el-form-item {
      margin-bottom: 0;
    }
    .el-form-item__content{
      line-height: 30px;
    }
    .el-form-item__label{
      line-height: 30px;
    }
    .el-input__inner{
      height: 30px;
    }
    .el-button--small{
      padding: 8px 15px;
    }
  }
</style>
