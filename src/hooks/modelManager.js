//自定义hook
import {ref} from "vue";
import {addModelAPI, deleteModelAPI, editModelAPI, getModelListAPI} from "@/apis/modelsHandler";

export const useModelManager = (pageSize, currPage,total) => {
    const modelList = ref([]);
    // const total=ref(10);
    const getModel = async () => {
        // 发送获取用户列表的请求，传递 pageSize 和 currPage 参数
        await getModelListAPI(pageSize.value, currPage.value).then(res => {
            if (res.data.code === 200)
                modelList.value = res.data.coredata.modelList;
            total.value=res.data.coredata.total;
            // Convert model IDs to strings
            modelList.value.forEach(model => {
                model.id = model.id.toString();
            });
        });
        return modelList;
    };

    const addModel = async (model) => {
        // 发送添加用户的请求
        // 示例：await addModelToBackend();
        await addModelAPI(model).then(res => {
            // 添加成功后，刷新用户列表
            if (res.data.code === 200)
                getModel();
        });
    };

    const delModel = async (model) => {
        // 发送删除用户的请求
        // 示例：await delModelFromBackend();
        await deleteModelAPI(model.id).then(res => {
            if (res.data.code === 200)
                // 删除成功后，刷新用户列表
                getModel();
        })

    };

    const editModel = async (model) => {
        // 发送编辑用户的请求
        // 示例：await editModelInBackend();
        await editModelAPI(model).then(res => {
            // 编辑成功后，刷新用户列表
            if (res.data.code === 200)
                getModel();

        });

    };

    // 初始化时获取用户列表
    getModel();

    return {
        modelList,
        addModel,
        delModel,
        editModel,
        getModel,
        total
    };
};