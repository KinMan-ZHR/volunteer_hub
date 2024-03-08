// 道德好人增删改查
import request from "@/apis/httpRequest";

export const getGoodPeopleListAPI= () => {
    return request({
        url: "/goodPeopleList",
        method: "get",
    });
};
export const editGoodPeopleAPI = (data) => {
    return request({
        url: "/goodPeopleList",
        method: "put",
        data
    });
};
export const addGoodPeopleAPI = (data) => {
    return request({
        url: "/goodPeopleList",
        method: "post",
        data
    });
};
export const deleteGoodPeopleAPI = (data) => {
    return request({
        url: "/goodPeopleList",
        method: "delete",
        data
    });
};