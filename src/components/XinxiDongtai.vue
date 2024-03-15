<template>
    <div style="display: flex;">
        <div class="left">
            <div style="display: flex;">
                <div class="bar"></div>
                <p class="title">信息动态</p>
            </div>
            <div style="margin: 10px;">
                <t-list>
                    <t-list-item v-for="(item,index) in dongtai" :key="index" style="cursor:pointer" @click="readArticle(item.id)">
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
                    v-model="current"
                    v-model:pageSize="pageSize"
                    :total="total"
                    showJumper
                    showFirstAndLastPageBtn
                    :showPageSize="false"
                    showPreviousAndNextBtn
                    totalContent
                    pageSize="12"
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
                        <t-list-item v-for="(item, index) in hot_news" :key="index" @click="readArticle(item.id)" style="cursor: pointer;">
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
                    <div style="margin: 25px;" v-for="(item,index) in hot_photo" :key="index" @click="readArticle(item.id)">
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
import {clickToReadArticleAPI, getDongTaiAPI, getHotNewsAPI, getHotPhotoAPI} from "@/apis/articleHandler";
// import {clickToReadArticleAPI, getDongTaiAPI, getHotNewsAPI} from "@/apis/articleHandler";

export default{
    name: 'XinXiDongTai',
    components:{
        // ArticlePage,
        WenZhang
    },
    data() {
        return {
            total: 100,
           current: 1,
           pageSize: 10,
            prompt: 'https://i.postimg.cc/jqZjDpQq/prompt.png',
            // 动态列表
            dongtai: [],
            // 热点新闻列表
            hot_news: [],
            // 热点图片列表
            hot_photo: [],
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
        // 分页变化时触发,分页大小固定12
        onChangePagination(e) {
            // let previous = e.previous
          console.log('分页器:',e);
          this.getDongTai()
        },

        async getDongTai(){
          await getDongTaiAPI(this.current,this.pageSize).then((response) => {
            if (response.data.code === 200) {
              this.dongtai = response.data.coredata.articleList;
              this.total = response.data.coredata.total;
            }
          });

        },

      async getHotNews() {
        await getHotNewsAPI(this.current, this.pageSize).then((response) => {
          if (response.data.code === 200) {
            this.hot_news = response.data.coredata.articleList.slice(0, 4);
          }
        });
      },
      async getHotPhotos(){
        await getHotPhotoAPI(this.current,this.pageSize).then((response) => {
          if (response.data.code === 200) {
            this.hot_photo = response.data.coredata.articleList;
          }
        });
      },
      async readArticle(article_id) {
          console.log('article_id:',article_id);
        await clickToReadArticleAPI(article_id).then((response) => {
          if (response.data.code === 200) {
            this.current_article = response.data.coredata.article;
            this.article_visible = true;
          }
        });

      },


        // onClickToReadHotNews(index){
        //     var current_article_id = this.hot_news[index].id;
        //
        //     // TODO 此处根据current_article_id从服务器获取详细内容,在此仅简单赋值
        //     console.log('current_article_id:',current_article_id);
        //     var article = {
        //         id: '2',
        //         title:'热点新闻1',
        //         time:'2024-03-01',
        //         source:'新华社',
        //         text:'必须把坚持高质量发展作为新时代的硬道理”——习近平总书记在去年中央经济工作会议上深刻总结新时代做好经济工作的“五个必须”规律性认识，其中这个“硬道理”居于首位。\n今年是新中国成立75周年，是实现“十四五”规划目标任务的关键一年。在这个重要年份召开的全国两会，如何聚焦高质量发展这个硬道理，进一步擘画出推进高质量发展的路线图、施工图，备受各方关注。',
        //         image:'https://ts1.cn.mm.bing.net/th/id/R-C.171e8fe1aa1544a1868ab710eed82d82?rik=FLPxvVVL9C9bnQ&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2fallimg%2f200710%2f14-200G00Z321.jpg&ehk=Lb0IHCCZIdqYQOi28m%2borU8c1ARGbTEC%2f8WYzfwRuHo%3d&risl=&pid=ImgRaw&r=0'
        //     }
        //     this.hot_news[index]=article
        //
        //     this.current_article = this.hot_news[index];
        //     this.article_visible = true;
        // },
        //
        //
        //
        // onClickToReadHotPhotos(index){
        //     var current_article_id = this.hot_photo[index].id;
        //
        //     // TODO 此处根据current_article_id从服务器获取详细内容article,在此仅简单赋值
        //     console.log('current_article_id:',current_article_id);
        //     var article = {
        //         id: '4',
        //         title:'热点图片1',
        //         time:'2024-03-01',
        //         source:'新华社',
        //         text:'必须把坚持高质量发展作为新时代的硬道理”——习近平总书记在去年中央经济工作会议上深刻总结新时代做好经济工作的“五个必须”规律性认识，其中这个“硬道理”居于首位。\n今年是新中国成立75周年，是实现“十四五”规划目标任务的关键一年。在这个重要年份召开的全国两会，如何聚焦高质量发展这个硬道理，进一步擘画出推进高质量发展的路线图、施工图，备受各方关注。',
        //         image:'https://ts1.cn.mm.bing.net/th/id/R-C.171e8fe1aa1544a1868ab710eed82d82?rik=FLPxvVVL9C9bnQ&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2fallimg%2f200710%2f14-200G00Z321.jpg&ehk=Lb0IHCCZIdqYQOi28m%2borU8c1ARGbTEC%2f8WYzfwRuHo%3d&risl=&pid=ImgRaw&r=0'
        //     }
        //     this.hot_photo[index]=article
        //
        //     this.current_article = this.hot_photo[index];
        //     this.article_visible = true;
        // },
    },
    mounted() {
        this.getDongTai()
        this.getHotNews()
        this.getHotPhotos()
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
    height: 46%;

}
.right-down{
    background-color: white;
    border-radius: 8px;
    width: 100%;
    height: 49%;
    margin-top: 5%;
}
</style>