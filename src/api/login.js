import axios from 'axios';

//登录
export function login({username, password}) {
    return axios({
        method: 'post',
        url: '/login',
        data: {
            username,
            password
        },
        transformRequest: [function(data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => res.data)
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
