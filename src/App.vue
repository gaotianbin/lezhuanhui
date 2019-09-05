<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      
    }
  }
}
</script>

<style lang='scss'>
@import './scss/reset.scss';
@media screen and (max-height: 736px){
  body{
    max-height: 736px;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #333;
  font-size: 14px;
  max-width: 500px;
  max-height: 736px;
  margin: 0 auto;
}
.el-dia{
  min-width: 80% !important;
  max-width: 80% !important;
  .el-icon-error,.el-icon-success{
    font-size: 20px;
  }
}
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
