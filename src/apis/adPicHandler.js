// 广告图片的增删改查
import request from "@/apis/httpRequest";

export const getAdPicListAPI= (pageSize,currPage) => {
    return request({
        url: "/adPicList",
        method: "get",
        params:{
            pageSize,
            currPage
        }
    });
};
export const editAdPicAPI = (data) => {
    return request({
        url: "/adPicList",
        method: "put",
        data
    });
};
export const addAdPicAPI = (data) => {
    return request({
        url: "/adPicList",
        method: "post",
        data
    });
};
export const deleteAdPicAPI = (data) => {
    return request({
        url: "/adPicList",
        method: "delete",
        data
    });
};