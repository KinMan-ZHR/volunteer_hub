import request from "./httpRequest.js";


export default {
    // 获取道德好人信息
    getGoodPeopleAPI: () => {
        return request({
            url: "/goodPeopleList",
            method: "get",
        });
    },
    // 获取道德模范信息
    getModelAPI: () => {
        return request({
            url: "/modelList",
            method: "get",
        });
    },
    // 获取文明四川头条信息
    getHeadlineAPI: () => {
        return request({
            url: "/headlineList",
            method: "get",
        });
    },
};