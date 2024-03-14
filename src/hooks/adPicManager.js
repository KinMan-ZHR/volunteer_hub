//自定义hook
import {ref} from "vue";
import {addAdPicAPI, deleteAdPicAPI, editAdPicAPI, getAdPicListAPI} from "@/apis/adPicHandler";

export const useAdPicManager = (pageSize, currPage,total) => {
    const adPicList = ref([]);
    // const total=ref(10);
    const getAdPic = async () => {
        // 发送获取用户列表的请求，传递 pageSize 和 currPage 参数
        await getAdPicListAPI(pageSize.value, currPage.value).then(res => {
            if (res.data.code === 200)
                adPicList.value = res.data.coredata.adPicList;
            total.value=res.data.coredata.total;
            // Convert adPic IDs to strings
            adPicList.value.forEach(adPic => {
                adPic.id = adPic.id.toString();
            });
        });
        return adPicList;
    };

    const addAdPic = async (adPic) => {
        // 发送添加用户的请求
        // 示例：await addAdPicToBackend();
        await addAdPicAPI(adPic).then(res => {
            // 添加成功后，刷新用户列表
            if (res.data.code === 200)
                getAdPic();
        });
    };

    const delAdPic = async (adPic) => {
        // 发送删除用户的请求
        // 示例：await delAdPicFromBackend();
        await deleteAdPicAPI(adPic.id).then(res => {
            if (res.data.code === 200)
                // 删除成功后，刷新用户列表
                getAdPic();
        })

    };

    const editAdPic = async (adPic) => {
        // 发送编辑用户的请求
        // 示例：await editAdPicInBackend();
        await editAdPicAPI(adPic).then(res => {
            // 编辑成功后，刷新用户列表
            if (res.data.code === 200)
                getAdPic();

        });

    };

    // 初始化时获取用户列表
    getAdPic();

    return {
        adPicList,
        addAdPic,
        delAdPic,
        editAdPic,
        getAdPic,
        total
    };
};