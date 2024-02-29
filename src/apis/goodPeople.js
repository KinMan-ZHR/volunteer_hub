import request from "./httpRequest.js";
export default {
    // 获取用户信息
    getGoodPeopleAPI: () => {
        return request({
            url: "/goodPeopleList",
            method: "get",
        });
    },
    // 获取用户信息
    getMyInfo: (data) => {
        return request({
            url: "/api/user/getMyInfo",
            method: "post",
            data,
        });
    },
};