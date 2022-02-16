import { request } from "./axios";
//登录
function  loginUser(user:object) {
    return request('api/login',{data:user,method:"post"})
}

// 获取登录信息
function getUser() {
    return request('api/login')
}

// 刷新登录
function  refreshUser(refreshToken:string) {
    return request(`api/login/${refreshToken}`)
}

// 退出登录
function exitLogin() {
    return request('api/login',{method:"delete"})
}

export  { loginUser,getUser,refreshUser,exitLogin }