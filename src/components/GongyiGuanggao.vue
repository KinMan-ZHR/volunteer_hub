<template>
    <div class="all">
        <div class="center">
            <div style="display: flex;">
                <div class="bar"></div>
                <p class="title">公益广告</p>
                <div class="tab">
                    <t-space>
                    <t-radio-group v-model="theme" variant="default-filled">
                        <t-radio-button value="normal">视频</t-radio-button>
                        <t-radio-button value="card">图片</t-radio-button>
                    </t-radio-group>
                    </t-space>
                </div>
            </div>
            <div v-if="theme == 'card'">
                <div style="margin: 10px;">
                    <t-space :breakLine="true" size="26.66px">
                        <t-card v-for="(item,index) in current_page" :key="index" :cover="item.cover" bordered :style="{ width: '400px', cursor: 'pointer' }" hoverShadow="true" @click="visible = true">
                            <template #footer>
                                <p class="biaoti">{{ item.title }}</p>
                            </template>
                        </t-card>
                    </t-space>
                </div>
                <div style="margin-left: 25px;margin-right: 15px;padding-bottom: 10px;">
                    <t-pagination
                        :total="shipin.length"
                        showJumper
                        showFirstAndLastPageBtn
                        :showPageSize="false"
                        showPreviousAndNextBtn
                        totalContent
                        pageSize="9"
                        @change="onChangePagination"
                    />
                </div>
            </div>
            <div v-if="theme == 'normal'">
                <div style="margin: 10px;">
                    <t-space :breakLine="true" size="26.66px">
                        <t-card v-for="(item,index) in current_page" :key="index" :cover="item.cover" bordered :style="{ width: '400px', cursor: 'pointer' }" hoverShadow="true" @click="visible = true">
                            <template #footer>
                                <p class="biaoti">{{ item.title }}</p>
                            </template>
                        </t-card>
                    </t-space>
                </div>
                <div style="margin-left: 25px;margin-right: 15px;padding-bottom: 10px;">
                    <t-pagination
                        :total="shipin.length"
                        showJumper
                        showFirstAndLastPageBtn
                        :showPageSize="false"
                        showPreviousAndNextBtn
                        totalContent
                        pageSize="9"
                        @change="onChangePagination"
                    />
                </div>
            </div>
            <div style="height: 50px;width: 100%;"></div>
        </div>
        <t-dialog
            :footer="false"
            :header="false"
            preventScrollThrough
            showOverlay
            placement="center"
            v-model:visible="visible"
            width="90%"
            >
            <WenZhangVideo></WenZhangVideo>
        </t-dialog>
    </div>
</template>

<script>
import { ref } from 'vue';
import WenZhangVideo from './WenZhangVideo.vue';
export default{
    name:'GongYiGuangGao',
    components:{
        WenZhangVideo
    },
    data(){
        return{
            theme : ref('normal'),
            shipin_chunked:[],
            current_page:[],
            shipin:[
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'2'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问',
                    state:'1'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'0'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'0'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'1'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'2'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'2'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问',
                    state:'1'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'0'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'0'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'1'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'2'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'2'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问',
                    state:'1'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'0'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'0'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'1'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'2'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'2'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问',
                    state:'1'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'0'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'0'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'1'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'2'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'2'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问',
                    state:'1'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'0'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'0'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'1'
                },
                {
                    title:'项目1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                    state:'2'
                },
            ],
        }
    },
    methods:{
        chunkArray(originalArray){
            var chunkedArray = [];
            for (let i = 0; i < originalArray.length; i += 9) {
                const chunk = originalArray.slice(i, i + 9);
                chunkedArray.push(chunk);
            }
            return chunkedArray
        },

        // 分页变化时触发,分页大小固定12
        onChangePagination(e){
            let current = e.current
            // let previous = e.previous
            this.current_page = this.shipin_chunked[current-1]
        },

        initCurrentPage(){
            this.shipin_chunked = this.chunkArray(this.shipin)
            this.current_page = this.shipin_chunked[0]
        },

    },
    mounted(){
        this.initCurrentPage()
    }
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
.tab{
    margin-top: 25px;
    margin-left: 79%;
}
.all{
    background-color: white;
    width: 100%;
    justify-content: center;
    display: flex;
}
.center{
    background-color: white;
    width: 1280px;
    justify-content: center;
    align-items: center;
}
.biaoti{
    font-size: 15px;
    font-weight: bold;
}
</style>