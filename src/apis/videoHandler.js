import request from "./httpRequest.js";
export const getVideoListAPI = () => {
    return request({
        url: "/videoList",
        method: "get",
    })
};
export const upLoadVideoAPI = (data) => {
    return request({
        url: "/uploadVideo",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data' // 传递图片 headers 里得这样写
        }
    });
};