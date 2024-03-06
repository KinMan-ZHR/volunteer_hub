import request from "./httpRequest.js";
export const getCloudVideoListAPI = () => {
    return request({
        url: "/cloudVideoList",
        method: "get",
    })
};
export const getVideoListAPI = (id) => {
    return request({
        url: "/videoList",
        method: "get",
        params: {
            id
        }
    });
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