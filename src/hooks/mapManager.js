//自定义hook
import {ref} from "vue";
import {addMapAPI, deleteMapAPI, editMapAPI, getMapListAPI} from "@/apis/mapsHandler";

export const useMapManager = (pageSize, currPage,total) => {
    const mapList = ref([]);
    // const total=ref(10);
    const getMap = async () => {
        // 发送获取用户列表的请求，传递 pageSize 和 currPage 参数
        await getMapListAPI(pageSize.value, currPage.value).then(res => {
            if (res.data.code === 200)
                mapList.value = res.data.coredata.mapList;
                total.value=res.data.coredata.total;
                // Convert map IDs to strings
                mapList.value.forEach(map => {
                    map.id = map.id.toString();
                });
        });
        return mapList;
    };

    const addMap = async (map) => {
        // 发送添加用户的请求
        // 示例：await addMapToBackend();
        await addMapAPI(map).then(res => {
            // 添加成功后，刷新用户列表
            if (res.data.code === 200)
                getMap();
        });
    };

    const delMap = async (map) => {
        // 发送删除用户的请求
        // 示例：await delMapFromBackend();
        await deleteMapAPI(map.id).then(res => {
            if (res.data.code === 200)
                // 删除成功后，刷新用户列表
                getMap();
        })

    };

    const editMap = async (map) => {
        // 发送编辑用户的请求
        // 示例：await editMapInBackend();
        await editMapAPI(map).then(res => {
            // 编辑成功后，刷新用户列表
            if (res.data.code === 200)
                getMap();

        });

    };

    // 初始化时获取用户列表
    getMap();

    return {
        mapList,
        addMap,
        delMap,
        editMap,
        getMap,
        total
    };
};