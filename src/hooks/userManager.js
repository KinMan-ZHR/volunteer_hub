//自定义hook
import {ref} from "vue";
import {addUserAPI, deleteUserAPI, editUserAPI, getUserListAPI} from "@/apis/usersHandler";

export const useUserManager = (pageSize, currPage,total) => {
    const userList = ref([]);
    // const total=ref(10);
    const getUser = async () => {
        // 发送获取用户列表的请求，传递 pageSize 和 currPage 参数
      await getUserListAPI(pageSize.value, currPage.value).then(res => {
          if (res.data.code === 200)
              userList.value = res.data.coredata.userList;
              total.value=res.data.coredata.total;
          // Convert user IDs to strings
          userList.value.forEach(user => {
              user.id = user.id.toString();
          });
      });
      return userList;
    };

    const addUser = async (user) => {
        // 发送添加用户的请求
        // 示例：await addUserToBackend();
        await addUserAPI(user).then(res => {
            // 添加成功后，刷新用户列表
            if (res.data.code === 200)
                getUser();
        });
    };

    const delUser = async (user) => {
        // 发送删除用户的请求
        // 示例：await delUserFromBackend();
        await deleteUserAPI(user.id).then(res => {
            if (res.data.code === 200)
                // 删除成功后，刷新用户列表
                getUser();
        })

    };

    const editUser = async (user) => {
        // 发送编辑用户的请求
        // 示例：await editUserInBackend();
        await editUserAPI(user).then(res => {
            // 编辑成功后，刷新用户列表
            if (res.data.code === 200)
                getUser();

        });

    };

    // 初始化时获取用户列表
    getUser();

    return {
        userList,
        addUser,
        delUser,
        editUser,
        getUser,
        total
    };
};