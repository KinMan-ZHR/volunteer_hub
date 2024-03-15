import request from "@/apis/httpRequest";

// 后端传一个File二进制文件，我用二进制接收就可以
export const getBeifenAPI = () => {
    return request({
        url: "/beifen",
        method: "get",
    });
};

// 日志文件
export const getLogFileAPI = () => {
    return request({
        url: "/log",
        method: "get",
    });
};
// 日志文件
export const getLogTextAPI = (url) => {
    return request({
        url,
        method: "get",
    });
};