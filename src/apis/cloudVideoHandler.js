// 广告图片的增删改查
import request from "@/apis/httpRequest";

export const getCloudVideoListAPI= (pageSize,currPage) => {
    return request({
        url: "/cloudVideoList",
        method: "post",
        data:{
            pageSize,
            currPage
        }
    });
};
export const editCloudVideoAPI = (data) => {
    return request({
        url: "/cloudVideoList",
        method: "put",
        data
    });
};
export const addCloudVideoAPI = (data) => {
    return request({
        url: "/addCloudVideoList",
        method: "post",
        data
    });
};
export const deleteCloudVideoAPI = (data) => {
    return request({
        url: "/cloudVideoList?id="+data,
        method: "delete",
    });
};