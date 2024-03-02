<template>
    <div class="all" >
        <div class="center">
            <div style="display: flex;">
                <div class="bar"></div>
                <p class="title">公益广告</p>
                <div class="tab">
                    <t-space>
                    <t-radio-group v-model="theme" variant="default-filled">
                        <t-radio-button value="video">视频</t-radio-button>
                        <t-radio-button value="image">图片</t-radio-button>
                    </t-radio-group>
                    </t-space>
                </div>
            </div>
            <!-- 视频型广告 -->
            <div v-if="theme == 'video'">
                <div style="margin: 10px;">
                    <t-space :breakLine="true" size="26.66px">
                        <t-card v-for="(item,index) in video_current_page" :key="index" :cover="item.cover" bordered :style="{ width: '400px', cursor: 'pointer' }" hoverShadow="true" @click="onClickVideo(index)">
                            <template #footer>
                                <p class="biaoti">{{ item.title }}</p>
                            </template>
                        </t-card>
                    </t-space>
                </div>
                <div style="margin-left: 25px;margin-right: 15px;padding-bottom: 10px;">
                    <t-pagination
                        :total="video_advertisement.length"
                        showJumper
                        showFirstAndLastPageBtn
                        :showPageSize="false"
                        showPreviousAndNextBtn
                        totalContent
                        pageSize="9"
                        @change="onChangeVideoPagination"
                    />
                </div>
            </div>
            <!-- 图片型的广告 -->
            <div v-if="theme == 'image'">
                <div style="margin: 10px;">
                    <t-space :breakLine="true" size="26.66px">
                        <t-card v-for="(item,index) in image_current_page" :key="index" :cover="item.cover" bordered :style="{ width: '400px', cursor: 'pointer' }" hoverShadow="true">
                            <template #footer>
                                <p class="biaoti">{{ item.title }}</p>
                            </template>
                        </t-card>
                    </t-space>
                </div>
                <div style="margin-left: 25px;margin-right: 15px;padding-bottom: 10px;">
                    <t-pagination
                        :total="image_advertisement.length"
                        showJumper
                        showFirstAndLastPageBtn
                        :showPageSize="false"
                        showPreviousAndNextBtn
                        totalContent
                        pageSize="9"
                        @change="onChangeImagePagination"
                    />
                </div>
            </div>
            <div style="height: 50px;width: 100%;"></div>
        </div>
        <t-dialog
            :footer="false"
            preventScrollThrough
            showOverlay
            placement="center"
            v-model:visible="visible"
            width="1080px"
            header="视频播放"
            theme="info"
            >
            <WenZhangVideo :current_video="video_advertisement[current_video_index]" :is_play="visible"></WenZhangVideo>
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
            theme : ref('video'),
            video_advertisement_chunked:[],
            video_current_page:[],
            video_advertisement:[
                {
                    title:'2014央视公益广告《筷子》',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://a5462a0a00cdede2829495b47fe56c8d.v.smtcdns.com/om.tc.qq.com/Aa_KRUeGlCQVO8R2dxyK9y78R_5lY-wMqk0Znz4oG6bU/B_JxNyiJmktHRgresXhfyMepNBqUi0rNULHXmHzThTLbhct0S7J8ZEOLI9qBzc0jb7/svp_50001/szg_78308739_50001_3a304177e8224eecbf7f2bde40edcc26.f632.mp4?sdtfrom=v1010&guid=524690aa801f54d6&vkey=33B39EB894F0C6B147B9AFAF11939409A558F07C0E2BA57C0CAADE4E5BC0CC2D2D689A01F050EC0303CC7EC743FEC9FCBA2AF4D409BE9337BCB2DD63B9E666E0D0ACF4F04361683390532AB60FCB03782172E38A3B016CFC8C74D8F9E1C708C0657C1E0D29B94FD4D354FAE5C3DA722514BD2E5580B9D6982818701459F1EE28FE7A8D41567B807D6D8EBEA9583BAC2D9D2AB230187E98CD8D99BFC5204F98910292285CF6F5D07B',
                    description:'2014央视公益广告《筷子》',
                    date:'2018-12-05'
                },
                {
                    title:'公益广告五分钟',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://apd-ugcvlive.apdcdn.tc.qq.com/om.tc.qq.com/AOxPyqZIzzHh521WwmMm3bJZefCoGzVKkQwRdr17m2Ew/B_JxNyiJmktHRgresXhfyMeo8fixGnaMJkCgsHKywTKlUvVsev9UdHRN_1kp6emuQq/svp_50200/njc_1000195_0bc3aicbgaaeluacjwmvvzrryawecmbaie2a.f2.mp4?sdtfrom=v1010&guid=e91979b79120cd89&vkey=63508C3A90D02AF43851A0631DBA911DE9486F2B8B2651CC44252CFE857481ACFD82D72C3E5B42E40C19F4BF0B4DBEA82ACDE69196019FA7771E5B619D0E173B266F81572C2E7CC6643D4D73DA106C15A1FEBE5BE384536AFDC73A01EB6322EC3B4E7A0CBD214CE948B808B311ED2FD363AB2D48ABC2A559042527EAEA1043FEC692AD39BB692195A6B8BEA1BF1AFC14F98662A37B9F0F24DD578979B44B372E41C3EC0791FF9214',
                    description:'公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟',
                    date:'2018-12-05'
                },

            ],

            image_advertisement_chunked:[],
            image_current_page:[],
            image_advertisement:[
                {
                    title:'图片1',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
                },
                {
                    title:'图片2',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'组织志愿者通过走访慰问',
                },
            ],
            visible:false,

            current_video_index:0
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
        onChangeVideoPagination(e){
            let current = e.current
            this.video_current_page = this.video_advertisement_chunked[current-1]
        },

        onChangeImagePagination(e){
            let current = e.current
            this.image_current_page = this.image_advertisement_chunked[current-1]
        },

        initCurrentPage(){
            this.video_advertisement_chunked = this.chunkArray(this.video_advertisement)
            this.image_advertisement_chunked = this.chunkArray(this.image_advertisement)
            this.video_current_page = this.video_advertisement_chunked[0]
            this.image_current_page = this.image_advertisement_chunked[0]
        },

        onClickVideo(index){
            this.current_video_index = index,
            this.visible = true
        }

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
    height: calc(100vh - 74px);
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