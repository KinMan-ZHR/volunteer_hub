//自定义hook
import {ref} from "vue";
import {addCloudVideoAPI, deleteCloudVideoAPI, editCloudVideoAPI, getCloudVideoListAPI} from "@/apis/cloudVideoHandler";

export const useCloudVideoManager = (pageSize, currPage,total) => {
    const cloudVideoList = ref([]);
    // const total=ref(10);
    const getCloudVideo = async () => {
        // 发送获取用户列表的请求，传递 pageSize 和 currPage 参数
        await getCloudVideoListAPI(pageSize.value, currPage.value).then(res => {
            if (res.data.code === 200)
                cloudVideoList.value = res.data.coredata.videoList;
                total.value=res.data.coredata.total;
                // Convert cloudVideo IDs to strings
                cloudVideoList.value.forEach(cloudVideo => {
                cloudVideo.id = cloudVideo.id.toString();
            });
        });
        return cloudVideoList;
    };

    const addCloudVideo = async (cloudVideo) => {
        // 发送添加用户的请求
        // 示例：await addCloudVideoToBackend();
        await addCloudVideoAPI(cloudVideo).then(res => {
            // 添加成功后，刷新用户列表
            if (res.data.code === 200)
                getCloudVideo();
        });
    };

    const delCloudVideo = async (cloudVideo) => {
        // 发送删除用户的请求
        // 示例：await delCloudVideoFromBackend();
        await deleteCloudVideoAPI(cloudVideo.id).then(res => {
            if (res.data.code === 200)
                // 删除成功后，刷新用户列表
                getCloudVideo();
        })

    };

    const editCloudVideo = async (cloudVideo) => {
        // 发送编辑用户的请求
        // 示例：await editCloudVideoInBackend();
        await editCloudVideoAPI(cloudVideo).then(res => {
            // 编辑成功后，刷新用户列表
            if (res.data.code === 200)
                getCloudVideo();

        });

    };

    // 初始化时获取用户列表
    getCloudVideo();

    return {
        cloudVideoList,
        addCloudVideo,
        delCloudVideo,
        editCloudVideo,
        getCloudVideo,
        total
    };
};