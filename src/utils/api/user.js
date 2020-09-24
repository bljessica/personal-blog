import request from './common/request'

const BASE_URL = '/user'

//注册
function register(data) {
    return request(BASE_URL + '/register', 'POST', data);
}

//登录
function login(data) {
    return request(BASE_URL + '/login', 'POST', data);
}

//获取用户头像昵称
function getUser(data) {
    return request(BASE_URL + '/getUser', 'GET', data);
}

export {
    register,
    login,
    getUser
}