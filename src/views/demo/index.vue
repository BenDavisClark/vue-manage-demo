<template>
  <div class="dashboard-container">
    <h1>{{ sContent }}</h1>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            sContent:"这是index页面"
          }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard {
    &-container {
       margin: 50px;
     }
  }
</style>
