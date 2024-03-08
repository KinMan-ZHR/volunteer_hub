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
                        <t-card v-for="(item,index) in image_current_page" :key="index" :cover="item.image" bordered :style="{ width: '400px', cursor: 'pointer' }" hoverShadow="true" @click="onClickToReadImageAd(index)">
                            <template #footer>
                                <p class="biaoti">{{ item.title }}</p>
                            </template>
                        </t-card>
                    </t-space>
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
            <WenZhangVideo :current_video="current_video" :is_play="visible"></WenZhangVideo>
        </t-dialog>

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
import { ref } from 'vue';
import WenZhangVideo from './WenZhangVideo.vue';
import WenZhang from './WenZhang.vue';
//todo 将视频广告与图片广告合并简化代码，取消chunkArray函数,因为后端只返回相应的列表



export default{
    name:'GongYiGuangGao',
    components:{
        WenZhangVideo,
        WenZhang
    },
    data(){
        return{
          total: 100,
          current: 1,
          pageSize: 9,
            theme : ref('video'),
            video_advertisement_chunked:[],
            video_current_page:[],
            video_advertisement:[],

            image_advertisement_chunked:[],
            image_current_page:[],
            image_advertisement:[],
            visible:false,

            current_video_index:0,

            article_visible:false,

            current_article:{
                title:'文章标题1',
                time:'2024-03-01',
                source:'新华社',
                text:'必须把坚持高质量发展作为新时代的硬道理”——习近平总书记在去年中央经济工作会议上深刻总结新时代做好经济工作的“五个必须”规律性认识，其中这个“硬道理”居于首位。\n今年是新中国成立75周年，是实现“十四五”规划目标任务的关键一年。在这个重要年份召开的全国两会，如何聚焦高质量发展这个硬道理，进一步擘画出推进高质量发展的路线图、施工图，备受各方关注。',
                image:'https://tdesign.gtimg.com/site/source/card-demo.png'
            },

            current_video:{
                title:'2014央视公益广告《筷子》',
                cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                link:'https://a5462a0a00cdede2829495b47fe56c8d.v.smtcdns.com/om.tc.qq.com/Aa_KRUeGlCQVO8R2dxyK9y78R_5lY-wMqk0Znz4oG6bU/B_JxNyiJmktHRgresXhfyMepNBqUi0rNULHXmHzThTLbhct0S7J8ZEOLI9qBzc0jb7/svp_50001/szg_78308739_50001_3a304177e8224eecbf7f2bde40edcc26.f632.mp4?sdtfrom=v1010&guid=524690aa801f54d6&vkey=33B39EB894F0C6B147B9AFAF11939409A558F07C0E2BA57C0CAADE4E5BC0CC2D2D689A01F050EC0303CC7EC743FEC9FCBA2AF4D409BE9337BCB2DD63B9E666E0D0ACF4F04361683390532AB60FCB03782172E38A3B016CFC8C74D8F9E1C708C0657C1E0D29B94FD4D354FAE5C3DA722514BD2E5580B9D6982818701459F1EE28FE7A8D41567B807D6D8EBEA9583BAC2D9D2AB230187E98CD8D99BFC5204F98910292285CF6F5D07B',
                description:'2014央视公益广告《筷子》',
                date:'2018-12-05'
            },
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
            this.current_video = this.video_current_page[index],
            this.visible = true
        },

        getAdvertisement(){
            // 从数据库获取广告视频与广告文章
            this.video_advertisement=[
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
            this.image_advertisement=[
                {
                    title:'文章标题1',
                    time:'2024-03-01',
                    source:'新华社',
                    text:'必须把坚持高质量发展作为新时代的硬道理”——习近平总书记在去年中央经济工作会议上深刻总结新时代做好经济工作的“五个必须”规律性认识，其中这个“硬道理”居于首位。\n今年是新中国成立75周年，是实现“十四五”规划目标任务的关键一年。在这个重要年份召开的全国两会，如何聚焦高质量发展这个硬道理，进一步擘画出推进高质量发展的路线图、施工图，备受各方关注。',
                    image:'https://tdesign.gtimg.com/site/source/card-demo.png'
                },
                {
                    title:'文章标题2',
                    time:'2024-03-01',
                    source:'新华社',
                    text:'必须把坚持高质量发展作为新时代的硬道理”——习近平总书记在去年中央经济工作会议上深刻总结新时代做好经济工作的“五个必须”规律性认识，其中这个“硬道理”居于首位。\n今年是新中国成立75周年，是实现“十四五”规划目标任务的关键一年。在这个重要年份召开的全国两会，如何聚焦高质量发展这个硬道理，进一步擘画出推进高质量发展的路线图、施工图，备受各方关注。',
                    image:'https://tdesign.gtimg.com/site/source/card-demo.png'
                },
                {
                    title:'文章标题1',
                    time:'2024-03-01',
                    source:'新华社',
                    text:'必须把坚持高质量发展作为新时代的硬道理”——习近平总书记在去年中央经济工作会议上深刻总结新时代做好经济工作的“五个必须”规律性认识，其中这个“硬道理”居于首位。\n今年是新中国成立75周年，是实现“十四五”规划目标任务的关键一年。在这个重要年份召开的全国两会，如何聚焦高质量发展这个硬道理，进一步擘画出推进高质量发展的路线图、施工图，备受各方关注。',
                    image:'https://ts1.cn.mm.bing.net/th/id/R-C.171e8fe1aa1544a1868ab710eed82d82?rik=FLPxvVVL9C9bnQ&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2fallimg%2f200710%2f14-200G00Z321.jpg&ehk=Lb0IHCCZIdqYQOi28m%2borU8c1ARGbTEC%2f8WYzfwRuHo%3d&risl=&pid=ImgRaw&r=0'
                },
            ]
        },

        onClickToReadImageAd(index){
            this.current_article = this.image_advertisement[index]
            this.article_visible = true
        }

    },
    mounted(){
        this.getAdvertisement()
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