//自定义hook
import {ref} from "vue";
import {addGoodPeopleAPI, deleteGoodPeopleAPI, editGoodPeopleAPI, getGoodPeopleListAPI} from "@/apis/goodPeoplesHandler";

export const useGoodPeopleManager = (pageSize, currPage,total) => {
    const goodPeopleList = ref([]);
    // const total=ref(10);
    const getGoodPeople = async () => {
        // 发送获取用户列表的请求，传递 pageSize 和 currPage 参数
        await getGoodPeopleListAPI(pageSize.value, currPage.value).then(res => {
            if (res.data.code === 200)
                goodPeopleList.value = res.data.coredata.goodPeopleList;
            total.value=res.data.coredata.total;
            // Convert goodPeople IDs to strings
            goodPeopleList.value.forEach(goodPeople => {
                goodPeople.id = goodPeople.id.toString();
            });
        });
        return goodPeopleList;
    };

    const addGoodPeople = async (goodPeople) => {
        // 发送添加用户的请求
        // 示例：await addGoodPeopleToBackend();
        console.log('添加好人',goodPeople);
        await addGoodPeopleAPI(goodPeople).then(res => {
            // 添加成功后，刷新用户列表
            if (res.data.code === 200)
                getGoodPeople();
        });
    };

    const delGoodPeople = async (goodPeople) => {
        // 发送删除用户的请求
        // 示例：await delGoodPeopleFromBackend();
        await deleteGoodPeopleAPI(goodPeople.id).then(res => {
            if (res.data.code === 200)
                // 删除成功后，刷新用户列表
                getGoodPeople();
        })

    };

    const editGoodPeople = async (goodPeople) => {
        // 发送编辑用户的请求
        // 示例：await editGoodPeopleInBackend();
        await editGoodPeopleAPI(goodPeople).then(res => {
            // 编辑成功后，刷新用户列表
            if (res.data.code === 200)
                getGoodPeople();

        });

    };

    // 初始化时获取用户列表
    getGoodPeople();

    return {
        goodPeopleList,
        addGoodPeople,
        delGoodPeople,
        editGoodPeople,
        getGoodPeople,
        total
    };
};