// 活动的增删改查
import request from "@/apis/httpRequest";

export const getActivityListAPI= (currPage,pageSize) => {
    return request({
        url: "/activityList",
        method: "get",
        params:{
            pageSize,
            currPage
        }
    });
};
export const editActivityAPI = (data) => {
    return request({
        url: "/activityList",
        method: "put",
        data
    });
};
export const addActivityAPI = (data) => {
    return request({
        url: "/activityList",
        method: "post",
        data
    });
};
export const deleteActivityAPI = (data) => {
    return request({
        url: "/activityList",
        method: "delete",
        data
    });
};