<template>
  <el-row>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>导航二</el-breadcrumb-item>
      <el-breadcrumb-item>列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br/>
    <el-col :span="6" v-for="(o, index) in cards"  :offset="1" class="cardsList">
      <el-card :body-style="{ padding: '0px' }">
        <img :src= "o.imgUrl"  class="image">
        <div style="padding: 14px;">
          <span>{{ o.name }}</span>
          <div class="bottom clearfix">
            <time class="time">{{time | formatDate}}</time>
            <el-button type="text" class="button" @click.native.prevent="deleteBtn(index)">删除</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import {formatDate} from '../utils/date.js'
  import hamburger  from '../assets/images/hamburger.png'


    export default {
        name: "list",
        data() {
          return {
            time:new Date(),
            cards:[{
              imgUrl:hamburger,
              name: "测试数据",
            },{
              imgUrl:hamburger,
              name : "测试数据1",
            },{
              imgUrl:hamburger,
              name : "测试数据2"
            },{
              imgUrl:hamburger,
              name : "测试数据3"
            },{
              imgUrl:hamburger,
              name : "测试数据4"
            },{
              imgUrl:hamburger,
              name : "测试数据5"
            }]
          };
        },
        filters: {
          formatDate(time) {
            let  date = new Date(time);
            return formatDate(date, "yyyy-MM-dd hh:mm");
          }
        },
      methods:{
          deleteBtn(index){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.cards.splice(index,1);
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }
      }
    }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .cardsList{margin-top:20px;}
</style>
