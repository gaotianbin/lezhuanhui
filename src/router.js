import Index from './components/Index.vue';
import UserInfo from './components/UserInfo.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import UserList from './components/UserList.vue';
export default {
    routes: [
    	{
    		path: '/',
    		component: Index,
            name: 'index'
        },
        {
            path: '/userInfo',
            component: UserInfo,
            name: 'userInfo'
        },{
            path: '/login',
            component: Login,
            name: 'login'
        },{
            path:'/register',
            component:Register,
            name:'register'
        },{
            path:'/userList/:level',
            component:UserList,
            name:'userList'
        }
    ]
}