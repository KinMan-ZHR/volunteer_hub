import request from "./httpRequest.js";
//map的增删改查
export const getMapListAPI = () => {
    return request({
        url: "/mapList",
        method: "get",
    })
};
export const addMapAPI = (data) => {
    return request({
        url: "/mapList",
        method: "post",
        data
    })
};
export const deleteMapAPI = (data) => {
    return request({
        url: "/mapList?id="+data,
        method: "delete",
    })
};
export const editMapAPI = (data) => {
    return request({
        url: "/mapList",
        method: "put",
        data
    })
};