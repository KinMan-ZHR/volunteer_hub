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
export const getUserListAPI = (data) => {
    return request({
      url: "/userList",
      method: "get",
        params:data
    });
  };
export const deleteUserAPI = (data) => {
    return request({
      url: "/userList/"+data,
      method: "delete",
    });
  };
export const updateUserAPI = (data) => {
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
        data
    });
  };