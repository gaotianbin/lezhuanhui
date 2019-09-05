<style scoped lang='scss'>
.index {
  max-width: 750px;
  max-height: 667px;
  min-height: 500px;
  position: relative;
  .ul-level{
    width: 90%;
    margin: 0 auto;
    li{
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
      position: relative;
      .icon-index{
        font-style: normal;
        background: #3399cc;
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        border-radius: 50%;
        margin-right: 20px;
        font-size: 12px;
      }
      .el-icon-arrow-right{
        position: absolute;
        right: 0;
        top: 15px;
      }
    }
  }
  .level-detail{
    li{
      display: inline-block;
      margin-right: 15px;
      text-align: justify;
      width: 56px;
      padding-bottom:8px; 
    }
  }
  .header{
    text-align: center;
    color: #fff;
    background: #3399cc;
    height: 44px;
    line-height: 44px;
    position: relative;
    .el-icon-back{
      position:absolute;
      left: 10px;
      top:50%;
      transform: translateY(-50%);
      font-size: 20px;
    }
    .icon-user{
      width: 20px;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
} 
</style>
<template>
  <div class="index">
    <div class="index-p1" v-if="dialogVisible">
      <div class="header">
        首页
        <img src="../assets/user.png" class="icon-user" @click="userCenter">
      </div>
      <ul class="ul-level">
        <li v-for="item in levelList" :key="item.level" @click="showDetail(item.level)">
          <i class="icon-index">{{item.level}}</i><span>{{item.count}}人</span>
          <i class="el-icon-arrow-right"></i>
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
import request from '../js/request.js';
import { Message } from 'element-ui';
export default {
  name: "index",
  data() {
    return {
      dialogVisible:true,
      userInfo: {
        userId: "",
        phone: ""
      },
      levelList: [],
      pList:[]
    };
  },
  mounted() {
    if (!sessionStorage.userId) {
      this.$router.push("/login");
    }else{
      this.initLevelList();
    }
  },
  methods: {
    showDetail(level){
      this.$router.push(`/userList/${level}`);
    },
    initLevelList(){
      let _self = this;
      request.levelList(JSON.parse(sessionStorage.userInfo)).then((res)=>{
        console.log(res);
        if(res.data.code == '0000'){
          _self.levelList = res.data.data;
        }else{
          _self.$message.error({
            message: res.data.message,
            customClass:'el-dia'
          });
        }
      }).catch((err)=>{
        this.$message.error({
          message: err,
          customClass:'el-dia'
        });
      })
    },
    userCenter(){
      this.$router.push("/userInfo");
    }
  },
};
</script>


