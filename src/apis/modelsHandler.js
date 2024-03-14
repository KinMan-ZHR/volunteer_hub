//模范增删改查
import request from "@/apis/httpRequest";

export const getModelListAPI= () => {
    return request({
        url: "/modelList",
        method: "get",
    });
};
export const editModelAPI = (data) => {
    return request({
        url: "/modelList",
        method: "put",
        data
    });
};
export const addModelAPI = (data) => {
    return request({
        url: "/modelList",
        method: "post",
        data
    });
};
export const deleteModelAPI = (data) => {
    return request({
        url: "/modelList?id="+data,
        method: "delete",
        data
    });
};