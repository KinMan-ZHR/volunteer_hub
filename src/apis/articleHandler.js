import request from "./httpRequest.js";
export const getDongTaiAPI = (currPage,pageSize) => {
    return request({
        url: "/articleList",
        method: "get",
        params:{
            type: "time",
            currPage: currPage,
            pageSize: pageSize
        }
    })
};
export const getHotNewsAPI = () => {
    return request({
        url: "/articleList",
        method: "get",
        params:{
            type: "hot",
            currPage: 1,
            pageSize: 5,
        }
    })
};
export const getHotPhotoAPI = () => {
    return request({
        url: "/articleList",
        method: "get",
        params:{
            type: "photo",
            currPage: 1,
            pageSize: 2,
        }
    })
};

export const  clickToReadArticleAPI = (id) => {
    return request({
        url: "/article",
        method: "get",
        params: {
            id: id
        }
    })
};