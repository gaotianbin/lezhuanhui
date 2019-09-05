import axios from 'axios';
export default {
    register(data){
        return axios.post('/regedit',data);
    },
    login(data){
        return axios.post('/login',data);
    },
    checkParentId(id){
        return axios.get(`/information/queryUser?id=${id}`);
    },
    levelList(data){
        return axios.post('/information/overview',data);
    },
    levelDetail(data){
        return axios.post('/information/userList',data);
    }
}