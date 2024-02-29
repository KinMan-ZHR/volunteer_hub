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
import { ref } from 'vue'

export default {
    name: 'WMHeadLine',
    components: {
    },
    data() {
        return {
            headline:[],
            headline1:[],
            headline2:[]
        }
    },
    methods: {
        splitHeadline(headline){
            var length = headline.length
            this.headline1 = headline.slice(0,length-4)
            this.headline2 = headline.slice(length-4, length)
        },

        // 获取头条数据
        getHeadline(){
            this.headline = [
                {
                    title:'四川省2024年“我们的节日·春节·元宵节”主题活动开始啦',
                    image:'https://tse2-mm.cn.bing.net/th/id/OIP-C.1i2rtKgQjJFHobciDv-w1gHaE6?rs=1&pid=ImgDetMain',
                    link:'https://mp.weixin.qq.com/s/gKJVXi3ebUpwUNl_dWV9WA'
                },
                {
                    title:'《平“语”近人——习近平喜欢的典故》',
                    image:'https://photo-static-api.fotomore.com/creative/vcg/veer/612/veer-130290563.jpg',
                    link:'https://www.scwmw.cn/jj/202402/t20240219_1296264.htm'
                },
                {
                    title:'我们的节日——元宵',
                    image:'https://tse2-mm.cn.bing.net/th/id/OIP-C.1i2rtKgQjJFHobciDv-w1gHaE6?rs=1&pid=ImgDetMain',
                    link:'https://www.scwmw.cn/topic/wmdjr/'
                },
                {
                    title:'法润天府气象新——2023年全面依法治省工作综述',
                    image:'https://ts1.cn.mm.bing.net/th/id/R-C.78103d8ab3c6fd9df5c735de04088986?rik=pQY5%2f6962UI4IQ&riu=http%3a%2f%2fwww.scwmw.cn%2fyw%2f202205%2fW020220515331622183684.jpg&ehk=Pzsmzod%2f1%2b64e0%2fPxmx3iuK%2b%2fBo1Cdw26CPHBD168eU%3d&risl=&pid=ImgRaw&r=0',
                    link:'https://www.scwmw.cn/topic/wmdjr/'
                },
                {
                    title:'6项任务5大举措 四川18部门携手守护学生心理健康',
                    image:'https://tse2-mm.cn.bing.net/th/id/OIP-C.1i2rtKgQjJFHobciDv-w1gHaE6?rs=1&pid=ImgDetMain',
                    link:'https://www.scwmw.cn/topic/wmdjr/'
                },
                {
                    title:'我省18部门联合印发方案为学生心理健康保驾护航 他们的心灵需要全社会细心呵护',
                    image:'https://ts1.cn.mm.bing.net/th/id/R-C.a70bec6efbfbedd758116091110cf560?rik=PRsZRKqcKvW1fg&riu=http%3a%2f%2fe0.ifengimg.com%2f06%2f2019%2f0710%2f5EA661E7EC93999F0AD977A9D7A12916E9588F28_size105_w1085_h501.jpeg&ehk=kwZ4ISqEK8yqOBIPxHHWrkfqCx3dOIzD6y66Gydirug%3d&risl=&pid=ImgRaw&r=0',
                    link:'https://www.scwmw.cn/topic/wmdjr/'
                },
                {
                    title:'第十四届全国冬运会闭幕 四川获得87枚奖牌创历史最好成绩',
                    image:'https://ts1.cn.mm.bing.net/th/id/R-C.c2b38ae56d4f59c54b24bc578bc6ed33?rik=Ki3B7b1FUM4YzQ&riu=http%3a%2f%2fimg.sj33.cn%2fuploads%2f201807%2f22063B015-1.jpg&ehk=ijh%2fmLWTwQbH%2b004BJn%2fRecfBHEsJ9yem%2bRE9KOYB1g%3d&risl=&pid=ImgRaw&r=0',
                    link:'https://www.scwmw.cn/topic/wmdjr/'
                },
            ]

        },

    },
    mounted(){
        this.getHeadline()
        this.splitHeadline(this.headline)
    },
    setup(){
        const hoverItem = ref(null);

        const hover = (item) => {
            hoverItem.value = item;
        };

        const unhover = () => {
            hoverItem.value = null;
        };

        return {
            hoverItem,
            hover,
            unhover,
        };
    }
}
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