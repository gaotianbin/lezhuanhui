<style lang="scss">
.header {
  text-align: center;
  color: #fff;
  background: #3399cc;
  height: 44px;
  line-height: 44px;
  position: relative;
  .el-icon-back {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
  .icon-user {
    width: 20px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
<template>
  <div class="index-detail-list">
    <div class="header">
      <i class="el-icon-back" @click="iconBack"></i>
      人员列表
    </div>
    <el-table :data="pList" style="width: 90%;margin:0 auto">
      <el-table-column prop="userId" label="会员编号" width="100"></el-table-column>
      <el-table-column prop="userName" label="会员名称"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import request from "../js/request.js";
import { Message } from "element-ui";
export default {
  data() {
    return {
      pList: []
    };
  },
  methods: {
    iconBack() {
      this.$router.push("/");
    },
    showDetail(level) {
      let _self = this;
      this.pList = [];
      if (!sessionStorage.userInfo) {
        this.$router.push("/login");
        return;
      }
      let userInfo = JSON.parse(sessionStorage.userInfo);
      request.levelDetail({ ...userInfo, level: level }).then(res => {
        if (res.data.code == "0000") {
          this.pList = res.data.data.list;
          this.dialogVisible = false;
        } else {
          _self.$message.error({
            message: res.data.message,
            customClass: "el-dia"
          });
        }
      });
    }
  },
  mounted() {
      debugger;
    let level = this.$route.params.level;
    if (!level) {
      this.$router.push("/login");
    } else {
      this.showDetail(parseInt(level));
    }
  }
};
</script>