<template>
    <div>
        <div style="margin-top: 34px;">道德建设</div>
        <div style="margin-top: 17px;">
            <div style="display: flex;">
                <div style="width: 800px;">
                    <t-tabs theme="card" :default-value="1">
                        <t-tab-panel :value="1" label="道德模范">
                        <!-- <p style="margin: 20px">选项卡1内容区</p> -->
                        <div style="padding: 24px 0;">
                            <t-swiper
                            :duration="300"
                            :interval="20000"
                            >
                                <t-swiper-item v-for="(item,index) in goodPeople" :key="index" >
                                    <div class="people-container">
                                        <t-space size="53.33px">
                                            <div v-for="(people,index) in item" :key="index">
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
                        <t-tab-panel :value="2" label="身边好人">
                            <t-swiper
                            :duration="300"
                            :interval="3000"
                            >
                            <t-swiper-item v-for="(item,index) in model" :key="index" >
                                <div class="people-container">
                                    <t-space size="53.33px">
                                        <div v-for="(people,index) in item" :key="index">
                                            <img :src="people.image" alt="模范图片">
                                            <div class="people-name-container">
                                                <p>{{ people.name }}</p>
                                            </div>
                                        </div>
                                    </t-space>
                                </div>
                            </t-swiper-item>
                        </t-swiper>
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


    </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import { ref, onMounted } from 'vue';
import apiStore from '@/apis/wenmingSichuan.js';

export default {
  name: 'DaodeJianshe',
  async created() {
   await this.getGoodPeople();
    await this.getModel();
    this.goodPeople.value = this.chunkArray(this.goodPeople.value);
    this.model.value = this.chunkArray(this.model.value);
  },

  setup() {
    const goodPeople = ref([]);
    const model = ref([]);

    const getGoodPeople = async () => {
      // 使用你的API获取数据
     await apiStore.getGoodPeopleAPI().then((response) => {
       if (response.data.code===200)  {
         goodPeople.value = response.data.coredata.goodpeopleList;
         console.log("goodPe",response.data.coredata.goodpeopleList);
       }
     });
    };

    const getModel = async () => {
      // 使用你的API获取数据
       await apiStore.getModelAPI().then((response) => {
         model.value = response.data.coredata.modelList;
         console.log("modelList",response.data.coredata.modelList);
       });

    };

    const chunkArray = (originalArray) => {
      var chunkedArray = [];
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

    // onMounted(
    //     async () => {
    //   await getGoodPeople();
    //   await getModel();
    //   goodPeople.value = chunkArray(goodPeople.value);
    //   model.value = chunkArray(model.value);
    //   console.log(goodPeople.value);
    //   console.log(model.value);
    // });

    return {
      goodPeople,
      model,
      getGoodPeople,
      getModel,
      chunkArray,
      onClickOuterWebsite
    };
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