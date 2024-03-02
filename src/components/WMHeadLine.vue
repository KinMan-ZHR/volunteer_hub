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
                    <t-swiper-item v-for="(item,index) in headline1" :key="index" >
                        <div>
                            <img :src="item.image" alt="" height="500px" style="object-fit: cover;display: block;margin: 0 auto;">
                            <div class="headline-title">
                                <p style="line-height: 24px;">{{ item.title }}</p>
                            </div>
                        </div>
                    </t-swiper-item>

                </t-swiper>
            </div>
            <div style="width: 18px;"></div>
            <div style="flex-grow: 1;">
                <t-space direction="vertical" :size="18" style="width: 100%;" class="headline-wo-image-container">
                    <div class="headline-wo-image-item" v-for="(item,index) in headline2" :key="index" >
                        <!-- :style="{ background: 'url(' + item.image + ') no-repeat center' }" style="background-size: cover;" -->
                        {{ item.title }}
                    </div>
                </t-space>
            </div>
        </div>

    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import apiStore from '@/apis/wenmingSichuan.js';
export default {
  name: 'WMHeadLine',
  components: {},
  setup() {
    const headline = reactive({
      list: [],
      list1: [],
      list2: []
    });

    const hoverItem = ref(null);

    const splitHeadline = (headlineList) => {
      var length = headlineList.length;
      headline.list1 = headlineList.slice(0, length - 4);
      headline.list2 = headlineList.slice(length - 4, length);
    };

    const getHeadline = async () => {
      // 使用你的API获取数据
     const response= await apiStore.getHeadlineAPI();
      headline.list = response.data.coreData;
    };

    const hover = (item) => {
      hoverItem.value = item;
    };

    const unhover = () => {
      hoverItem.value = null;
    };

    onMounted(async () => {
      await getHeadline();
      splitHeadline(headline.list);
    });

    return {
      headline,
      hoverItem,
      hover,
      unhover
    };
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