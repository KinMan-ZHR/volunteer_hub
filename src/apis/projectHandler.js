import request from "./httpRequest.js";
export const searchProjectAPI = (data) => {
    return request({
        url: "/projectList",
        method: "post",
        data
    })
};
export const getProjectAPI = () => {
    return request({
        url: "/projectList",
        method: "get",
    })
};