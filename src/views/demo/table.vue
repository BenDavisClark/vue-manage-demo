<template>
  <el-row>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>导航二</el-breadcrumb-item>
      <el-breadcrumb-item>表格</el-breadcrumb-item>
    </el-breadcrumb>
    <br/><br/>
    <table-operate>
      <el-button type="primary" size="small" @click="addClick()">新建</el-button>
      <el-button type="danger" size="small" @click="removeClick()">删除</el-button>
    </table-operate>
    <table-search>
      <el-form :inline="true"  class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input  placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select  placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </table-search>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      min-width="120">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    <br/>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </el-row>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        alert(row);
      },
      editClick(row){
        alert(row);
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      onSubmit: function () {
        console.log(this.multipleSelection)
        this.$message.error('错了哦，这是一条错误消息')
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>

<style scoped>
  table-operate button{
    margin-bottom:20px;
  }
</style>
