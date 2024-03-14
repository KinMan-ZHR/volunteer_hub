//头条增删改查
import request from "@/apis/httpRequest";

export const getHeadlineListAPI= () => {
    return request({
        url: "/headlineList",
        method: "get",
    });
};
export const editHeadlineAPI = (data) => {
    return request({
        url: "/headlineList",
        method: "put",
        data
    });
};
export const addHeadlineAPI = (data) => {
    return request({
        url: "/headlineList",
        method: "post",
        data
    });
};
export const deleteHeadlineAPI = (data) => {
    return request({
        url: "/headlineList?id="+data,
        method: "delete",
        data
    });
};