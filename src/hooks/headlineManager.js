//自定义hook
import {ref} from "vue";
import {addHeadlineAPI, deleteHeadlineAPI, editHeadlineAPI, getHeadlineListAPI} from "@/apis/headlinesHandler";

export const useHeadlineManager = (pageSize, currPage,total) => {
    const headlineList = ref([]);
    // const total=ref(10);
    const getHeadline = async () => {
        // 发送获取用户列表的请求，传递 pageSize 和 currPage 参数
        await getHeadlineListAPI(pageSize.value, currPage.value).then(res => {
            if (res.data.code === 200)
                headlineList.value = res.data.coredata.headlineList;
            total.value=res.data.coredata.total;
            // Convert headline IDs to strings
            headlineList.value.forEach(headline => {
                headline.id = headline.id.toString();
            });
        });
        return headlineList;
    };

    const addHeadline = async (headline) => {
        // 发送添加用户的请求
        // 示例：await addHeadlineToBackend();
        await addHeadlineAPI(headline).then(res => {
            // 添加成功后，刷新用户列表
            if (res.data.code === 200)
                getHeadline();
        });
    };

    const delHeadline = async (headline) => {
        // 发送删除用户的请求
        // 示例：await delHeadlineFromBackend();
        await deleteHeadlineAPI(headline.id).then(res => {
            if (res.data.code === 200)
                // 删除成功后，刷新用户列表
                getHeadline();
        })

    };

    const editHeadline = async (headline) => {
        // 发送编辑用户的请求
        // 示例：await editHeadlineInBackend();
        await editHeadlineAPI(headline).then(res => {
            // 编辑成功后，刷新用户列表
            if (res.data.code === 200)
                getHeadline();

        });

    };

    // 初始化时获取用户列表
    getHeadline();

    return {
        headlineList,
        addHeadline,
        delHeadline,
        editHeadline,
        getHeadline,
        total
    };
};