import request from "./httpRequest.js";
export const getDongTaiAPI = (pageCurr,pageSize) => {
    return request({
        url: "/articleList",
        method: "get",
        params:{
            type: "time",
            pageCurr: pageCurr,
            pageSize: pageSize
        }
    })
};
export const getHotNewsAPI = () => {
    return request({
        url: "/articleList",
        method: "get",
        params:{
            type: "time"
        }
    })
};
export const  clickToReadArticleAPI = (id) => {
    return request({
        url: "/articleList",
        method: "get",
        params: id
    })
};