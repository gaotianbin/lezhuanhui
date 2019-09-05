<style scoped lang='scss'>
  .menu{
    position: relative;
    font-size: 14px;
    overflow: hidden;
    max-width: 750px;
    ul{
      width: 100%;
      padding: 10px;
      overflow: hidden;
      position: fixed;
      bottom: 0;
      left: 0;
      border-top: 1px solid #ccc;
      background: #fff;
      li{
        float: left;
        width: 50%;
        text-align: center;
        position: relative;
        padding-top: 30px;
        
        .menu-icon{
          position: absolute;
          top: 0;
          color: #3399cc;
          font-size: 30px;
          height: 50px;
          width: 50px;
          left: 50%;
          margin-left: -25px;
        }
      }
    }
  }
</style>
<template>
    <div class="menu">
        <ul>
            <li @click="toIndex"><i class="menu-icon el-icon-s-home"></i>推荐列表</li>
            <!-- <li><i class="menu-icon el-icon-menu"></i>批准升级</li> -->
            <li @click="userCenter"><i class="menu-icon el-icon-s-custom"></i>个人中心</li>
            <!-- <li><i class="menu-icon el-icon-share"></i>我要推广</li> -->
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
          
        }
    },
    methods:{
      userCenter(){
        this.$router.push("/userInfo");
      },
      toIndex(){
        this.$router.push("/");
      }
    }
}
</script>