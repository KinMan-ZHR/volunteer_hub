import request from "./httpRequest.js";
export const loginAPI = ({username,password}) => {
    console.log(username,password);
  return request({
    url: "/login",
    method: "post",
    data:{
        username,
        password
    }
  })
};
export const registerAPI = ({username,password,email}) => {
    return request({
      url: "/register",
      method: "post",
      data:{
          username,
          password,
          email
      }
    });
  };
export const getUserListAPI = (pageSize,currPage) => {
    return request({
      url: "/userList",
      method: "get",
        params:{
            pageSize,
            currPage
        }
    });
  };
export const deleteUserAPI = (id) => {
    return request({
      url: "/userList/"+id,
      method: "delete",
    });
  };
export const editUserAPI = (data) => {
    return request({
      url: "/userList",
      method: "put",
        data
    });
  };
export const addUserAPI = (data) => {
    return request({
      url: "/userList",
      method: "post",
        data
    });
  };
export const editAvatarAPI = (data) => {
    return request({
      url: "/editAvatar",
      method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data' // 传递文件类型
        }
    });
  };
export const editPasswordAPI = (id,oldPassword,newPassword) => {
    return request({
      url: "/editPassword",
      method: "post",
        data:{
            id,
            oldPassword,
            newPassword
        }
    });
  };