<template>
    <div>
        <div style="margin-top: 34px;">道德建设</div>
        <div style="margin-top: 17px;">
            <div style="display: flex;">
                <div style="width: 800px;">
                    <t-tabs theme="card" :default-value="1">
                        <t-tab-panel :value="1" label="身边好人">
                        <!-- <p style="margin: 20px">选项卡1内容区</p> -->
                        <div style="padding: 24px 0;">
                            <t-swiper
                            :duration="300"
                            :interval="20000"
                            >
                                <t-swiper-item v-for="(item,id) in daoDe.goodPeople" :key="id" >
                                    <div class="people-container">
                                        <t-space size="53.33px">
                                            <div v-for="(people,index) in item" :key="index" style="cursor: pointer;" @click="onClickToGoodPeople(id,index)">
                                                <img :src="people.image" alt="好人图片">
                                                <div class="people-name-container">
                                                    <p>{{ people.name }}</p>
                                                </div>
                                            </div>
                                        </t-space>
                                    </div>
                                </t-swiper-item>
                            </t-swiper>
                        </div>


                        </t-tab-panel>
                        <t-tab-panel :value="2" label="道德模范">
                        <div style="padding: 24px 0;">
                            <t-swiper
                            :duration="300"
                            :interval="3000"
                            >
                            <t-swiper-item v-for="(item,id) in daoDe.model" :key="id" >
                                <div class="people-container">
                                    <t-space size="53.33px">
                                        <div v-for="(people,index) in item" :key="index" style="cursor: pointer;" @click="onClickToModel(id,index)">
                                            <img :src="people.image" alt="模范图片">
                                            <div class="people-name-container">
                                                <p>{{ people.name }}</p>
                                            </div>
                                        </div>
                                    </t-space>
                                </div>
                            </t-swiper-item>
                        </t-swiper>
                        </div>

                        </t-tab-panel>
                    </t-tabs>
                </div>
                <t-divider layout="vertical" />
                <div style="flex-grow: 1;" >
                    <t-space direction="vertical" size="23.5px" style="width: 100%;">
                        <div class="website-link" @click="onClickOuterWebsite(1)">
                            四川省先进典型推荐管理系统
                        </div>
                        <div class="website-link" @click="onClickOuterWebsite(2)">
                            四川好人馆
                        </div>
                        <div class="website-link" @click="onClickOuterWebsite(3)">
                            四川省好人微博话题
                        </div>
                    </t-space>
                </div>
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

// eslint-disable-next-line no-unused-vars
import { ref, onMounted, reactive } from 'vue';
import {getGoodPeopleListAPI} from "@/apis/goodPeoplesHandler";
import {getModelListAPI} from "@/apis/modelsHandler";
import WenZhang from './WenZhang.vue';

export default {
  name: 'DaodeJianshe',
  components:{
    WenZhang
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
  setup() {
    const daoDe = reactive({
        goodPeople: [],
        model: []
    });
    // const goodPeople = ref([]);
    // const model = ref([]);

    const getGoodPeople = async () => {
      // 使用你的API获取数据
     await getGoodPeopleListAPI().then((response) => {
       if (response.data.code===200)  {
         daoDe.goodPeople = response.data.coredata.goodPeopleList;
         console.log("goodPe",response.data.coredata.goodPeopleList);
       }
     });
    };

    const getModel = async () => {
      // 使用你的API获取数据
       await getModelListAPI().then((response) => {
         daoDe.model = response.data.coredata.modelList;
         console.log("modelList",daoDe.model);
       });

    };

    const chunkArray = (originalArray) => {
      const chunkedArray = [];
      for (let i = 0; i < originalArray.length; i += 4) {
        const chunk = originalArray.slice(i, i + 4);
        chunkedArray.push(chunk);
      }
      return chunkedArray;
    };

    const onClickOuterWebsite = (index) => {
      if(index === 1){
        window.open('https://wmdx.scwmw.cn/')
      }else if(index === 2){
        window.open('https://hrg.scwmw.cn/')
      }else if(index === 3){
        window.open('https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A5%BD%E4%BA%BA%23')
      }
    };

    onMounted(
        async () => {
      await getGoodPeople();
      daoDe.goodPeople = chunkArray(daoDe.goodPeople);
      await getModel();
      daoDe.model = chunkArray(daoDe.model);
    });

    return {
        daoDe,
        getGoodPeople,
        getModel,
        chunkArray,
        onClickOuterWebsite
    };
  },
  methods:{
    onClickToGoodPeople(id,index){
      this.current_news = this.daoDe.goodPeople[id][index];
      console.log('current',this.current_news)
      this.news_visible = true;
    },
    onClickToModel(id,index){
      this.current_news = this.daoDe.model[id][index];
      console.log('current',this.daoDe)
      this.news_visible = true;
    }
  }
};

</script>

<style scoped>
.people-container{

}

.people-image{
    width: 160px;
    height: 200px;
    object-fit: cover;
}
.people-divider{
    width: 140px;
}
.people-name-container{
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 5px;
    color: white;
    background-color: var(--td-brand-color-5);
    border-top-right-radius: 8px;
    width: 50px;
}

.website-link{
    background-color: white;
    border-radius: 8px;
    /* padding: 24px; */
    height: 85px;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 21px;
    justify-content: center;
    /* filter: blur(10px); */
    text-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.25);
    font-weight: bold;
    background: linear-gradient(90deg, var(--td-brand-color-4) 0%, rgba(214, 118, 39, 1) 100%);
    cursor: pointer;
}

</style>