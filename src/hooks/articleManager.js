//自定义hook
import {ref} from "vue";
import {addArticleAPI, deleteArticleAPI, editArticleAPI, getArticleListAPI} from "@/apis/articleHandler";

export const useArticleManager = (pageSize, currPage,total) => {
    const articleList = ref([]);
    // const total=ref(10);
    const getArticle = async () => {
        // 发送获取用户列表的请求，传递 pageSize 和 currPage 参数
        await getArticleListAPI(pageSize.value, currPage.value).then(res => {
            if (res.data.code === 200)
                articleList.value = res.data.coredata.articleList;
            total.value=res.data.coredata.total;
            // Convert article IDs to strings
            articleList.value.forEach(article => {
                article.id = article.id.toString();
            });
        });
        return articleList;
    };

    const addArticle = async (article) => {
        // 发送添加用户的请求
        // 示例：await addArticleToBackend();
        await addArticleAPI(article).then(res => {
            // 添加成功后，刷新用户列表
            if (res.data.code === 200)
                getArticle();
        });
    };

    const delArticle = async (article) => {
        // 发送删除用户的请求
        // 示例：await delArticleFromBackend();
        await deleteArticleAPI(article.id).then(res => {
            if (res.data.code === 200)
                // 删除成功后，刷新用户列表
                getArticle();
        })

    };

    const editArticle = async (article) => {
        // 发送编辑用户的请求
        // 示例：await editArticleInBackend();
        await editArticleAPI(article).then(res => {
            // 编辑成功后，刷新用户列表
            if (res.data.code === 200)
                getArticle();

        });

    };

    // 初始化时获取用户列表
    getArticle();

    return {
        articleList,
        addArticle,
        delArticle,
        editArticle,
        getArticle,
        total
    };
};