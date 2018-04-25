<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg:"这是form页面"
      }
    },
    mounted(){
      this.get("http://g.cn").then(

        (successData) => {console.log(successData.body);},

        (fileData) => {console.log(fileData);}

      );
    },
    methods: {
      setNewsApi: function() {
        this.$http.post("/news", "type=top&key=123456").then(res => {
          console.log(res.data);

          this.newsListShow = res.data.data;
        });
      }
    }
  }
</script>

<style scoped>

</style>
