<style lang="scss">
    .login{
        font-size: 14px;
        height: 100%;
        overflow: hidden;
        max-width: 500px;
        max-height: 800px;
        margin: 0 auto;
        .content{
            width: 80%;
            margin: 0 auto;
            margin-top: 1rem;
            .logo{
                width: 150px;
                height: 150px;
                margin: 0 auto;
                margin-bottom: 50px;
                img{
                    width: 100%;
                }
            }
            div{
                padding-bottom: 40px;
                input{
                    border: none;
                    border-bottom: 1px solid #ccc;
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    text-indent: 1em;
                }
            }
        }
        .btn-login{
            width: 100%;
            padding: 10px 0;
            color: #fff;
            background: #3399cc;
            border-radius: 20px;
            font-size: 16px;
        }
        
    }
</style>
<template>
    <div class="login">
        <!-- <header>登&nbsp;录</header> -->
        <div class="content">
            <h1 class="logo">
                <img src="../assets/logo.png" alt="" srcset="">
            </h1>
            <div class="userName">
                <input type="text" v-model.trim="form.userName" name="userName" placeholder="请输入会员编号或手机号" maxlength="11">
            </div>
            <div class="password">
                <input type="password" v-model.trim="form.password" name="password" placeholder="请输入密码">
            </div>
            <button class="btn-login" @click="login">登录系统</button>
        </div>
    </div>
</template>
<script>
import request from '../js/request.js';
import { Message } from 'element-ui';
export default {
    data(){
        return {
            form:{
                userName:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            let _self = this;
            if(!_self.form.userName){
                _self.$message.error({
                    message: "请输入用户名",
                    customClass:'el-dia'
                });
                return;
            }else if(!_self.form.password){
                _self.$message.error({
                    message: "请输入密码",
                    customClass:'el-dia'
                });
                return;
            }else if(_self.form.password.length < 6 || _self.form.password.length >16){
                _self.$message.error({
                    message: "请输入6-16位的密码",
                    customClass:'el-dia'
                });
                return;
            }
            request.login(_self.form).then((res)=>{
                console.log(res);
                if(res.data.code == '0000'){
                    sessionStorage.userId = res.data.data.userId;
                    sessionStorage.userInfo = JSON.stringify(res.data.data);
                    _self.$router.push("/");
                }else{
                    this.$message.error({
                        message: res.data.message,
                        customClass:'el-dia'
                    });
                }
            })
        }
    }
}
</script>