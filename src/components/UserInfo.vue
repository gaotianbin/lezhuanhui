<style lang="scss">
    .user-info{
        overflow: hidden;
        max-width: 750px;
        .wrap{
            position: relative;
            .top{
                img{
                    margin: 20px auto;
                    display: block;
                    width: 150px;
                }
                ul{
                    padding: 10px 20px 0;
                    li{
                        font-size: 16px;
                        padding-bottom: 5px;
                        margin-bottom: 10px;
                        border-bottom: 1px solid #eee;
                    }
                }
                .btn-logout{
                    padding: 0 20px;
                    button{
                        display: block;
                        width: 100%;
                        color: #fff;
                        background: #EF4F4F;
                        height: 44px;
                        line-height: 44px;
                        font-size: 18px;
                        border-radius: 10px;
                        margin-top: 15px;
                    }
                    .btn-register{
                        background: #fff;
                        color: #333;
                        margin-top: 10px;
                        border: 1px solid #ccc;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="user-info">
        <div class="wrap">
            <div class="header">
                用户中心
                <img src="../assets/home.png" class="icon-user" @click="toHome">
            </div>
            <div class="top">
                <img src="../assets/logo.png" alt="" srcset="">
                <ul>
                    <li>会员编号：{{userInfo.userId}}</li>
                    <li>会员名称：{{userInfo.userName}}</li>
                    <li>手机号码：{{userInfo.phone}}</li>
                </ul>
                <div class="btn-logout">
                    <button @click="logout">安全退出</button>
                    <button v-if="userInfo.role == 'admin'" class="btn-register" @click="register">添加会员</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userInfo:{
                userId:'',
                phone:'',
                userName:'',
                role:''
            }
        }
    },
    methods:{
        logout(){
            sessionStorage.clear();
            this.$router.push("/login");
        },
        register(){
            this.$router.push('/register');
        },
        toHome(){
            this.$router.push("/");
        }
    },
    mounted(){
        if(sessionStorage.userInfo){
            this.userInfo = JSON.parse(sessionStorage.userInfo);
        }
    }
}
</script>