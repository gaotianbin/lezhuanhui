<style lang="scss">
    .register{
        // padding: 0 10px;
        // padding-top: 50px;
        box-sizing: border-box;
        .form{
            width: 90%;
            margin: 20px auto 0;
        }
        input{
            border:1px solid #888;
            border-radius: 4px;
        }
        .btn-register{
            width: 90%;
            display: block;
            margin: 10px auto;
            text-align: center;
            color: #fff;
            background: #3399cc;
            border-radius: 10px;
            height: 44px;
            line-height: 44px;
            font-size: 16px;
        }
        .btn-reset{
            background: #fff;
            color: #333;
            border:1px solid #888;
            margin-top: 10px;
        }
    }
    
</style>
<template>
    <div class="register">
        <div class="header">
            <i class="el-icon-back" @click="iconBack"></i>
            添加会员
            <img src="../assets/home.png" class="icon-user" @click="goHome">
        </div>
        <div class="form">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="推荐码"
                prop="parentId"
                :rules="[
                        { required: true, message: '推荐码不能为空'},
                        { type: 'number', message: '推荐码须为数字值'}
                        ]">
                    <el-input :disabled="readOnly" v-model.number="form.parentId" placeholder="请向推荐人索要推荐码" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="会员名称"
                prop="userName"
                :rules="[
                        { required: true, message: '用户名不能为空'},
                        ]">
                    <el-input v-model.trim="form.userName" placeholder="请输入用户名" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码"
                prop="phone"
                :rules="[
                        { required: true, message: '手机号不能为空'},
                        ]">
                    <el-input v-model.trim="form.phone" placeholder="请输入11位手机号码" autocomplete="off" maxlength="11"></el-input>
                </el-form-item>
                <el-form-item label="默认密码"
                prop="password"
                >
                        <p v-html="form.password"></p>
                    <!-- <el-input type="password" v-model.trim="form.password" placeholder="请输入6-16位密码" autocomplete="off"></el-input> -->
                </el-form-item>
                <!-- <el-form-item label="确认密码"
                prop="repassword"
                :rules="[
                        { required: true, message: '确认密码不能为空'},
                        ]">
                    <el-input type="password" placeholder="请输入确认密码" v-model.trim="form.repassword" autocomplete="off"></el-input>
                </el-form-item> -->
            </el-form>
            <button class="btn-register" @click="regist">添加</button>
            <button class="btn-register btn-reset" @click="resetForm('form')">重置</button>
        </div>
    </div>
</template>
<script>
import request from '../js/request.js';
import { Message } from 'element-ui';
export default {
    data(){
        return {
            readOnly:false,
            form:{
                userName:'',
                phone:'',
                parentId:'',
                password:'000000',
                // repassword:'000000'
            },
            userInfo:{
                role:''
            }
        }
    },
    methods:{
        regist(){
            let _self = this;
            this.$refs.form.validate((valid)=>{
                
                if(valid){
                    if(`${_self.form.password}`.length < 6 || `${_self.form.password}`.length > 16){
                        _self.$message.error({
                            message: "请输入6-16位的密码",
                            customClass:'el-dia'
                        });
                        return;
                    }else if(`${_self.form.phone}`.length != 11){
                        _self.$message.error({
                            message: "手机号码有误，请检查!",
                            customClass:'el-dia'
                        });
                        return;
                    }else{
                        // 验证parentId
                        request.checkParentId(_self.form.parentId).then((result)=>{
                            if(result.data.code == '0000'){
                                // 注册
                                request.register(_self.form).then((res)=>{
                                    if(res.data.code == '0000'){
                                        _self.$message.error({
                                            message: `注册成功！ID:${res.data.data.userId}`,
                                            customClass:'el-dia',
                                            type: 'success'
                                        });
                                        
                                    }else{
                                        alert(res.data.message);
                                    }
                                }).catch((err)=>{
                                    console.log(err);
                                })
                            }else{
                                _self.$message.error({
                                    message: result.data.message,
                                    customClass:'el-dia'
                                });
                            }
                        }).catch((err)=>{
                            console.log(err);
                        })
                    }
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        goHome(){
            this.$router.push('/');
        },
        iconBack() {
            this.$router.push("/userInfo");
        }
    },
    mounted(){
        if(sessionStorage.userInfo){
            let userInfo = JSON.parse(sessionStorage.userInfo);
            if(!userInfo){
                this.$router.push('/login');
            }else if('admin' != userInfo.role){
                this.$router.push('/login');
            }
        }else{
            this.$router.push('/login');
        }
    }
}

</script>