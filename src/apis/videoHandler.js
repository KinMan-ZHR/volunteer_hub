import request from "./httpRequest.js";

export const getCloudVideoListAPI = (pageSize,currPage) => {
    return request({
        url: "/cloudVideoList",
        method: "post",
        data:{
            type: [1,2,3,4],
            pageSize,
            currPage
        }
    })
};
export const getCharityVideoListAPI = (pageSize,currPage) => {
    return request({
        url: "/cloudVideoList",
        method: "post",
        data:{
            type: [4],
            pageSize,
            currPage
        }

    })
};

export const getXuanchuanVideoListAPI = (pageSize,currPage) => {
    return request({
        url: "/cloudVideoList",
        method: "post",
        data:{
            type: [1,2,3],
            pageSize,
            currPage
        }
    })
};

export const getVideoListAPI = (id) => {
    return request({
        url: "/videoList",
        method: "get",
        params: {
            id
        }
    });
};
export const upLoadVideoAPI = (data) => {
    return request({
        url: "/uploadVideo",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data' // 传递图片 headers 里得这样写
        }
    });
};

export const searchVideoListAPI = (currPage,pageSize,keyword) => {
    return request({
        url: "/searchCloudVideoList",
        method: "get",
        params:{
            keyword,
            pageSize,
            currPage
        }
    });

};
export const deleteVideoListAPI = (id) => {
    return request({
        url: "/videoList",
        method: "delete",
        params:{
           id
        }
    });

};
export const changeVideoListAPI = (id1,id2) => {
    return request({
        url: "/changeVideoList",
        method: "get",
        params:{
            id1,
            id2
         }

    });

};



