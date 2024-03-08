import request from "./httpRequest.js";
export const getMapListAPI = () => {
    return request({
        url: "/mapList",
        method: "post",
    })
};