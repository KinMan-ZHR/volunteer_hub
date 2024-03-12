<template>
    <div>
        <div style="margin-bottom: 17px;">新闻咨询</div>

        <div style="display: flex;">
            <div :style="{ width: '750px' }">
                <t-swiper
                :duration="300"
                :interval="2000"
                :navigation="{ placement: 'outside' }"

                >
                    <t-swiper-item v-for="(item,index) in headline.list1" :key="index" @click="onClickToReadNewsLeft(index)">
                        <div>
                            <img :src="item.image" alt="" height="500px" style="object-fit: cover;display: block;margin: 0 auto;cursor: pointer;">
                            <div class="headline-title">
                                <p style="line-height: 24px;cursor: pointer;">{{ item.title }}</p>
                            </div>
                        </div>
                    </t-swiper-item>

                </t-swiper>
            </div>
            <div style="width: 18px;"></div>
            <div style="flex-grow: 1;">
                <t-space direction="vertical" :size="18" style="width: 100%;" class="headline-wo-image-container">
                    <div class="headline-wo-image-item" v-for="(item,index) in headline.list2" :key="index" @click="onClickToReadNews(index)">
                        <!-- :style="{ background: 'url(' + item.image + ') no-repeat center' }" style="background-size: cover;" -->
                        {{ item.title }}
                    </div>
                </t-space>
            </div>
        </div>

        <t-dialog
            v-model:visible="news_visible"
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
            <WenZhang :current_article="current_news"></WenZhang>
        </t-dialog>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import {getHeadlineListAPI} from '@/apis/headlinesHandler.js';
import WenZhang from './WenZhang.vue';

export default {
  name: 'WMHeadLine',
  components: {
    WenZhang
  },
  setup() {
    const headline = reactive({
      list: [],
      list1: [],
      list2: []
    });

    const hoverItem = ref(null);

    const splitHeadline = (headlineList) => {
      const length = headlineList.length;
      console.log(length);
      headline.list1 = headlineList.slice(0, length - 4);
      headline.list2 = headlineList.slice(length - 4, length);
    };

    const getHeadline = async () => {
      // 使用你的API获取数据
     await getHeadlineListAPI().then((response) => {
       if (response.data.code === 200) {
         headline.list = response.data.coredata.headlineList;
         console.log(response.data.coredata.headlineList);
       }
      });

    };

    const hover = (item) => {
      hoverItem.value = item;
    };

    const unhover = () => {
      hoverItem.value = null;
    };

    onMounted(async () => {
      await getHeadline();
      console.log(headline.list);
      splitHeadline(headline.list);
    });

    return {
      headline,
      hoverItem,
      hover,
      unhover
    };
  },
  data(){
    return{
      news_visible:false,
      current_news:{
          title:'文章标题2',
          time:'2024-03-01',
          source:'新华社',
          text:'必须把坚持高质量发展作为新时代的硬道理”——习近平总书记在去年中央经济工作会议上深刻总结新时代做好经济工作的“五个必须”规律性认识，其中这个“硬道理”居于首位。\n今年是新中国成立75周年，是实现“十四五”规划目标任务的关键一年。在这个重要年份召开的全国两会，如何聚焦高质量发展这个硬道理，进一步擘画出推进高质量发展的路线图、施工图，备受各方关注。',
          image:'https://ts1.cn.mm.bing.net/th/id/R-C.171e8fe1aa1544a1868ab710eed82d82?rik=FLPxvVVL9C9bnQ&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2fallimg%2f200710%2f14-200G00Z321.jpg&ehk=Lb0IHCCZIdqYQOi28m%2borU8c1ARGbTEC%2f8WYzfwRuHo%3d&risl=&pid=ImgRaw&r=0'
      }
    }
  },
  methods:{
    onClickToReadNewsLeft(index){
      this.current_news = this.headline.list1[index];
      this.news_visible = true;
    },
    onClickToReadNews(index){
      this.current_news = this.headline.list2[index];
      this.news_visible = true;
    }
  }
};
</script>
<style scoped>
.headline-title{
    width: 100%;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
    color: white;
}

.headline-wo-image-item{
    background-color: white;
    border-radius: 8px;
    /* padding: 24px; */
    height: 117.5px;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 21px;
    /* filter: blur(10px); */
    text-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.25);
    font-weight: bold;
    background: linear-gradient(90deg, var(--td-brand-color-4) 0%, rgba(214, 118, 39, 1) 100%);
    cursor: pointer;
}

/* .headline-wo-image-container :first-child{
    background: black;
} */

/* .first{
    background: linear-gradient(90deg, var(--td-brand-color-5) 0%, rgba(214, 118, 39, 1) 100%);
} */


</style>