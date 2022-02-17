import axios, { AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";


const http = axios.create({
    // baseURL:'',
    timeout: 5000
})
// Get Post Delete Put
// 请求失败自动重试
axiosRetry(http, { retries: 3 })


async function request(url: string, config?: AxiosRequestConfig) {
    const res = await http.request({ url, ...config })
    return res.data
}

// http.interceptors.response.use(error=>{
//     getError(error)
//     return Promise.reject(error)
// })

// 携带token JWT认证
http.interceptors.request.use(config => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

function getError(error: any) {
    if (axios.isCancel(error)) return console.error('请求的重复请求：' + error.data.errorMessage);
    let message = '';
    if (error && error.data.errorMessage) {
        switch (error.data.errorCode) {
            case 302: message = '接口重定向了！'; break;
            case 400: message = '参数不正确！'; break;
            case 401: message = '您未登录，或者登录已经超时，请先登录！'; break;
            case 403: message = '您没有权限操作！'; break;
            case 404: message = `请求地址出错: ${error.response.config.url}`; break;
            case 408: message = '请求超时！'; break;
            case 409: message = '系统已存在相同数据！'; break;
            case 500: message = '服务器内部错误！'; break;
            case 501: message = '服务未实现！'; break;
            case 502: message = '网关错误！'; break;
            case 503: message = '服务不可用！'; break;
            case 504: message = '服务暂时无法访问，请稍后再试！'; break;
            case 505: message = 'HTTP版本不受支持！'; break;
            default: message = error.data.errorMessage; break
        }
    }
    throw message
}
export { request }