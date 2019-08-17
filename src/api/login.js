import axios from 'axios';

//登录
export function login(status) {
    return axios.get('/paper/listPapers',{
        params: {
            status: status
        }
    })
    .then(res => res.data);
}

//验证身份唯一
export function checkOnly(name){
    return axios.get('/user/checkUsername?username=' + name).then(result => result.data)
}

//注册
export function register(reg) {
    return axios({
        method: 'post',
        url: '/user/add',
        data: reg
    }).then(res => res.data)
}
