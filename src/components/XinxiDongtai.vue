<template>
    <div style="display: flex;">
        <div class="left">
            <div style="display: flex;">
                <div class="bar"></div>
                <p class="title">信息动态</p>
            </div>
            <div style="margin: 10px;">
                <t-list>
                    <t-list-item v-for="(item,index) in current_page" :key="index" style="cursor:pointer" @click="onClickToReadDongtai(index)">
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>{{ item.title }}</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> {{ item.time }} </p>
                        </template>
                    </t-list-item>
                </t-list>
            </div>
            <div style="margin-left: 25px;margin-right: 15px;padding-bottom: 10px;">
                <t-pagination
                    :total="dongtai.length"
                    showJumper
                    showFirstAndLastPageBtn
                    :showPageSize="false"
                    showPreviousAndNextBtn
                    totalContent
                    pageSize="15"
                    @change="onChangePagination"
                />
            </div>
        </div>
        <div class="right">
            <div class="right-up">
                <div style="display: flex;">
                    <div class="bar"></div>
                    <p class="title">热点新闻</p>
                </div>
                <div style="margin: 10px;">
                    <t-list>
                        <t-list-item v-for="(item, index) in hot_news" :key="index" @click="onClickToReadHotNews(index)" style="cursor: pointer;">
                            <div style="display: flex;">
                                <div class="circle"></div>
                                <p>{{item.title}}</p>
                            </div>
                        </t-list-item>
                    </t-list>
                </div>
            </div>
            <div class="right-down">
                <div style="display: flex;">
                    <div class="bar"></div>
                    <p class="title">热点图片</p>
                </div>
                <div style="display: flex;margin-top: 10px;justify-content: center;align-items: center;">
                    <div style="margin: 25px;" v-for="(item,index) in hot_photo" :key="index" @click="onClickToReadHotPhotos(index)">
                        <img :src="item.image" width="200" height="150"/>
                        <t-breadcrumbItem :max-width="'200'"> {{ item.title }} </t-breadcrumbItem>
                    </div>
                </div>
            </div>
        </div>

        <t-dialog
            v-model:visible="article_visible"
            header="文章详情"
            body="对话框内容"
            :cancel-btn="null"
            width="90%"
            top="50px"
            :confirm-btn="null"
        >
        <template #header>
            <t-icon name="component-space"></t-icon>
            <p>文章详情</p>
        </template>
            <WenZhang :current_article="current_article"></WenZhang>
        </t-dialog>

    </div>
</template>

<script>
// import ArticlePage from './ArticlePage.vue';
import WenZhang from './WenZhang.vue';
import {clickToReadArticleAPI, getDongTaiAPI, getHotNewsAPI} from "@/apis/articleHandler";

export default{
    name: 'XinXiDongTai',
    components:{
        // ArticlePage,
        WenZhang
    },
    data() {
        return {
            prompt: 'https://i.postimg.cc/jqZjDpQq/prompt.png',
            // 动态列表
            dongtai: [],
            // 热点新闻列表
            hot_news: [],
            // 热点图片列表
            hot_photo: [],

            dongtai_chunked: [],
            current_page: [],
            article_visible: false,

            // 必须要有默认值
            current_article:{
                title:'文章标题1',
                time:'2024-03-01',
                source:'新华社',
                text:'必须把坚持高质量发展作为新时代的硬道理”——习近平总书记在去年中央经济工作会议上深刻总结新时代做好经济工作的“五个必须”规律性认识，其中这个“硬道理”居于首位。\n今年是新中国成立75周年，是实现“十四五”规划目标任务的关键一年。在这个重要年份召开的全国两会，如何聚焦高质量发展这个硬道理，进一步擘画出推进高质量发展的路线图、施工图，备受各方关注。',
                image:'https://ts1.cn.mm.bing.net/th/id/R-C.171e8fe1aa1544a1868ab710eed82d82?rik=FLPxvVVL9C9bnQ&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2fallimg%2f200710%2f14-200G00Z321.jpg&ehk=Lb0IHCCZIdqYQOi28m%2borU8c1ARGbTEC%2f8WYzfwRuHo%3d&risl=&pid=ImgRaw&r=0'
            }
        };
    },
    methods: {
        chunkArray(originalArray) {
            var chunkedArray = [];
            for (let i = 0; i < originalArray.length; i += 15) {
                const chunk = originalArray.slice(i, i + 15);
                chunkedArray.push(chunk);
            }
            return chunkedArray;
        },
        // 分页变化时触发,分页大小固定12
        onChangePagination(e) {
            let current = e.current;
            // let previous = e.previous
            this.current_page = this.dongtai_chunked[current - 1];
        },
        initCurrentPage() {
            this.dongtai_chunked = this.chunkArray(this.dongtai);
            this.current_page = this.dongtai_chunked[0];
        },

        async getDongTai(){
          await getDongTaiAPI(this.current_page,12).then((response) => {
            if (response.data.code === 200) {
              this.dongtai = response.data.coredata.articleList;
            }
          });

        },
        // 这里之后直接调用后端接口接口当前文章的内容
        async onClickToReadDongtai(index){
            this.current_article = this.dongtai[index];
            this.article_visible = true;
            await clickToReadArticleAPI(this.current_article.id).then((response) => {
                if (response.data.code === 200) {
                    console.log('成功')
                }
            });
        },

        async getHotNews(){
          await getHotNewsAPI().then((response) => {
            if (response.data.code === 200) {
              this.hot_news = response.data.coredata.articleList;
            }
          });
          this.getHotPhotos()
          },


        onClickToReadHotNews(index){
            this.current_article = this.hot_news[index];
            this.article_visible = true;
        },

        getHotPhotos(){
            // 获取热点图片,注意热点图片有且仅有两个
            this.hot_photo=[this.hot_news[5],this.hot_news[6]];
        },

        onClickToReadHotPhotos(index){
            this.current_article = this.hot_photo[index];
            this.article_visible = true;
        },
    },
    mounted() {
        this.getDongTai()
        this.getHotNews()
        this.initCurrentPage();
    },
}
</script>

<style scoped>
.bar{
    height: 25px;
    width: 5px;
    background-color: red;
    margin-top: 27px;
    margin-left: 25px;
}
.title{
    font-size: 20px;
    font-weight: bold;
    margin-top: 25px;
    margin-left: 10px;
}
.left{
    background-color: white;
    border-radius: 8px;
    width: 60%;
    margin-top: 24px;
    margin-left: 24px;
}
.circle{
    width: 5px;
    height: 5px;
    background-color: #EDBA66;
    margin: 10px;
    border-radius: 100px;
}
.right{
    margin-top: 24px;
    margin-left: 20px;
    width: 40%;
    margin-right: 24px;
    /* border-radius: 8px; */
}
.right-up{
    background-color: white;
    border-radius: 8px;
    width: 100%;
    height: 45%;

}
.right-down{
    background-color: white;
    border-radius: 8px;
    width: 100%;
    height: 50%;
    margin-top: 5%;
}
</style>