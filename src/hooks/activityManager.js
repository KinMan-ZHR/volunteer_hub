//自定义hook
import {ref} from "vue";
import {addActivityAPI, deleteActivityAPI, editActivityAPI, getActivityListAPI} from "@/apis/activitiesHandler";

export const useActivityManager = (pageSize, currPage,total) => {
    const activityList = ref([]);
    // const total=ref(10);
    const getActivity = async () => {
        // 发送获取用户列表的请求，传递 pageSize 和 currPage 参数
        await getActivityListAPI(pageSize.value, currPage.value).then(res => {
            if (res.data.code === 200)
                activityList.value = res.data.coredata.activityList;
            total.value=res.data.coredata.total;
            // Convert activity IDs to strings
            activityList.value.forEach(activity => {
                activity.id = activity.id.toString();
            });
        });
        return activityList;
    };

    const addActivity = async (activity) => {
        // 发送添加用户的请求
        // 示例：await addActivityToBackend();
        await addActivityAPI(activity).then(res => {
            // 添加成功后，刷新用户列表
            if (res.data.code === 200)
                getActivity();
        });
    };

    const delActivity = async (activity) => {
        // 发送删除用户的请求
        // 示例：await delActivityFromBackend();
        await deleteActivityAPI(activity.id).then(res => {
            if (res.data.code === 200)
                // 删除成功后，刷新用户列表
                getActivity();
        })

    };

    const editActivity = async (activity) => {
        // 发送编辑用户的请求
        // 示例：await editActivityInBackend();
        await editActivityAPI(activity).then(res => {
            // 编辑成功后，刷新用户列表
            if (res.data.code === 200)
                getActivity();

        });

    };

    // 初始化时获取用户列表
    getActivity();

    return {
        activityList,
        addActivity,
        delActivity,
        editActivity,
        getActivity,
        total
    };
};