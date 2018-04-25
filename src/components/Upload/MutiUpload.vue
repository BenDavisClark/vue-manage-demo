<template>
    <div>
        <el-upload
            class="uploader"
            multiple
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" v-for="(item, index) in dialogImageUrl" :src="item" :key="index" alt="">
        </el-dialog>
    </div>
</template>
<script>
export default {
  data () {
    return {
      imgLength: 1,
      dialogImageUrl: [],
      dialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file, fileList) {
      console.log(fileList)
      this.dialogImageUrl.push(file.url)
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss">
.uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover{
      border-color: #409eff;
    }
  }
  .el-upload--picture-card {
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
  }
  .el-upload-list--picture-card{
    .el-upload-list__item{
      width: 78px;
      height: 78px;
      margin: 0 8px 0 0;
    }
  }
}
</style>
