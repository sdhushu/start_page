import {request} from "./axios";

// 获取所有用户图片
function getAllImg() {
    return request('api/background')
}

// 获取单个用户图片
function getOneImg(id:string) {
    return request(`api/background/${id}`)
}

// 上传背景图
function uploadImg(file:any) {
    let data = new FormData()
    data.append('file',file)
    return request('api/background/upload',{
        method:"post",
        data:data,
        headers:{
            'Content-Type':'multipart/form-data;'
        }
    })
}

// 创建背景图
function createImg(url:string) {
    return request('api/background',{
        method:"post",
        data:{
            url:url
        }
    })
}

export { getAllImg,getOneImg,uploadImg,createImg }