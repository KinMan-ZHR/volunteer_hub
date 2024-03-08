<template>
    <div :id="`${path}#container`" class="anchor-demo anchor-container-demo">
        <t-anchor :id="`${path}#default`" container="#anchor-container" @click="handleClick" size="small">
            <t-anchor-item :href="`#${path}#content-1`" title="A分类" />
            <t-anchor-item :href="`#${path}#content-2`" title="B分类" />
            <t-anchor-item :href="`#${path}#content-3`" title="C分类" />
        </t-anchor>
        <t-space id="anchor-container" direction="vertical" :size="0">
            <div :id="`${path}#content-1`" class="anchor-content-1">
                <div class="title">A分类</div>
                <t-space :breakLine="true">
                    <div class="card" v-for="(item,index) in video_list1" :key="index">
                        <t-card :cover="item.cover" theme="poster2" :style="{ width: '250px', cursor: 'pointer' }" hoverShadow="true"  @click="onClickVideo(index,1)">
                            <template #footer>
                                <div>{{ item.title }}</div>
                            </template>
                        </t-card>
                    </div>
                </t-space>
            </div>
            <div :id="`${path}#content-2`" class="anchor-content-2">
                <div class="title">B分类</div>
                <t-space :breakLine="true">
                    <div class="card" v-for="(item,index) in video_list2" :key="index">
                        <t-card :cover="item.cover" theme="poster2" :style="{ width: '250px', cursor: 'pointer' }" hoverShadow="true"  @click="onClickVideo(index,2)">
                            <template #footer>
                                <div>{{ item.title }}</div>
                            </template>
                        </t-card>
                    </div>
                </t-space>
            </div>
            <div :id="`${path}#content-3`" class="anchor-content-3">
                <div class="title">C分类</div>
                <t-space :breakLine="true">
                    <div class="card" v-for="(item,index) in video_list3" :key="index">
                        <t-card :cover="item.cover" theme="poster2" :style="{ width: '250px', cursor: 'pointer' }" hoverShadow="true" @click="onClickVideo(index,3)">
                            <template #footer>
                                <div>{{ item.title }}</div>
                            </template>
                        </t-card>
                    </div>
                </t-space>
            </div>
        </t-space>
        <t-dialog
            :footer="false"
            header="视频播放"
            preventScrollThrough
            showOverlay
            placement="center"
            v-model:visible="visible"
            width="1080px"
            theme="info"
            >
            <WenZhangVideo :current_video="current_video" :is_play="visible"></WenZhangVideo>
        </t-dialog>
    </div>
</template>

<script>
import { computed, getCurrentInstance } from 'vue';
import get from 'lodash/get';
import WenZhangVideo from './WenZhangVideo.vue';
import {getCloudVideoListAPI} from "@/apis/videoHandler";

export default {
    name:'XuanChuanVideo',
    components:{
        WenZhangVideo
    },
    setup() {
        const { appContext } = getCurrentInstance();
        const path = computed(() => get(appContext, '$route.path', ''));

        const handleClick = ({ e, href, title }) => {
        e.preventDefault();
        console.log('click', href, title);
        };

        const cover = 'https://tdesign.gtimg.com/site/source/card-demo.png';

        return {
            path,
            handleClick,
            cover
        };
    },
    data(){
        return{
            visible:false,
            video_list:[
                {
                    title:'2014央视公益广告《筷子》',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://a5462a0a00cdede2829495b47fe56c8d.v.smtcdns.com/om.tc.qq.com/Aa_KRUeGlCQVO8R2dxyK9y78R_5lY-wMqk0Znz4oG6bU/B_JxNyiJmktHRgresXhfyMepNBqUi0rNULHXmHzThTLbhct0S7J8ZEOLI9qBzc0jb7/svp_50001/szg_78308739_50001_3a304177e8224eecbf7f2bde40edcc26.f632.mp4?sdtfrom=v1010&guid=524690aa801f54d6&vkey=33B39EB894F0C6B147B9AFAF11939409A558F07C0E2BA57C0CAADE4E5BC0CC2D2D689A01F050EC0303CC7EC743FEC9FCBA2AF4D409BE9337BCB2DD63B9E666E0D0ACF4F04361683390532AB60FCB03782172E38A3B016CFC8C74D8F9E1C708C0657C1E0D29B94FD4D354FAE5C3DA722514BD2E5580B9D6982818701459F1EE28FE7A8D41567B807D6D8EBEA9583BAC2D9D2AB230187E98CD8D99BFC5204F98910292285CF6F5D07B',
                    description:'2014央视公益广告《筷子》',
                    date:'2018-12-05',
                    category:'1'
                },
                {
                    title:'公益广告五分钟',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://apd-ugcvlive.apdcdn.tc.qq.com/om.tc.qq.com/AOxPyqZIzzHh521WwmMm3bJZefCoGzVKkQwRdr17m2Ew/B_JxNyiJmktHRgresXhfyMeo8fixGnaMJkCgsHKywTKlUvVsev9UdHRN_1kp6emuQq/svp_50200/njc_1000195_0bc3aicbgaaeluacjwmvvzrryawecmbaie2a.f2.mp4?sdtfrom=v1010&guid=e91979b79120cd89&vkey=63508C3A90D02AF43851A0631DBA911DE9486F2B8B2651CC44252CFE857481ACFD82D72C3E5B42E40C19F4BF0B4DBEA82ACDE69196019FA7771E5B619D0E173B266F81572C2E7CC6643D4D73DA106C15A1FEBE5BE384536AFDC73A01EB6322EC3B4E7A0CBD214CE948B808B311ED2FD363AB2D48ABC2A559042527EAEA1043FEC692AD39BB692195A6B8BEA1BF1AFC14F98662A37B9F0F24DD578979B44B372E41C3EC0791FF9214',
                    description:'公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟',
                    date:'2018-12-05',
                    category:'1'
                },
                {
                    title:'2014央视公益广告《筷子》',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://a5462a0a00cdede2829495b47fe56c8d.v.smtcdns.com/om.tc.qq.com/Aa_KRUeGlCQVO8R2dxyK9y78R_5lY-wMqk0Znz4oG6bU/B_JxNyiJmktHRgresXhfyMepNBqUi0rNULHXmHzThTLbhct0S7J8ZEOLI9qBzc0jb7/svp_50001/szg_78308739_50001_3a304177e8224eecbf7f2bde40edcc26.f632.mp4?sdtfrom=v1010&guid=524690aa801f54d6&vkey=33B39EB894F0C6B147B9AFAF11939409A558F07C0E2BA57C0CAADE4E5BC0CC2D2D689A01F050EC0303CC7EC743FEC9FCBA2AF4D409BE9337BCB2DD63B9E666E0D0ACF4F04361683390532AB60FCB03782172E38A3B016CFC8C74D8F9E1C708C0657C1E0D29B94FD4D354FAE5C3DA722514BD2E5580B9D6982818701459F1EE28FE7A8D41567B807D6D8EBEA9583BAC2D9D2AB230187E98CD8D99BFC5204F98910292285CF6F5D07B',
                    description:'2014央视公益广告《筷子》',
                    date:'2018-12-05',
                    category:'2'
                },
                {
                    title:'公益广告五分钟',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://apd-ugcvlive.apdcdn.tc.qq.com/om.tc.qq.com/AOxPyqZIzzHh521WwmMm3bJZefCoGzVKkQwRdr17m2Ew/B_JxNyiJmktHRgresXhfyMeo8fixGnaMJkCgsHKywTKlUvVsev9UdHRN_1kp6emuQq/svp_50200/njc_1000195_0bc3aicbgaaeluacjwmvvzrryawecmbaie2a.f2.mp4?sdtfrom=v1010&guid=e91979b79120cd89&vkey=63508C3A90D02AF43851A0631DBA911DE9486F2B8B2651CC44252CFE857481ACFD82D72C3E5B42E40C19F4BF0B4DBEA82ACDE69196019FA7771E5B619D0E173B266F81572C2E7CC6643D4D73DA106C15A1FEBE5BE384536AFDC73A01EB6322EC3B4E7A0CBD214CE948B808B311ED2FD363AB2D48ABC2A559042527EAEA1043FEC692AD39BB692195A6B8BEA1BF1AFC14F98662A37B9F0F24DD578979B44B372E41C3EC0791FF9214',
                    description:'公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟',
                    date:'2018-12-05',
                    category:'3'
                },
            ],
            video_list1:[],
            video_list2:[],
            video_list3:[],
            current_video:[],
        }
    },
    methods:{
        onClickVideo(index,cate){
            // console.log(index,cate);
            // console.log(this.video_list1.length);
            if(cate == 1){
                this.current_video = this.video_list1[index]
            }
            if(cate == 2){
                this.current_video = this.video_list2[index]
            }
            if(cate == 3){
                this.current_video = this.video_list3[index]
            }

            this.visible = true
        },
        async getVideoList(){
            // 从数据库获取宣传视频
            // this.video_list=...
          await getCloudVideoListAPI().then(res=>{
            this.video_list=res.data.coredata.videoList;
          })
        },
        initVideoCate(){
            // 将视频列表按category分为三类
            this.video_list1 = this.video_list.filter(item => item.category === '1');
            this.video_list2 = this.video_list.filter(item => item.category === '2');
            this.video_list3 = this.video_list.filter(item => item.category === '3');

        },

        initCurrentVideo(){
            this.current_video = this.video_list[0]
        }
    },
    computed: {

    },
    mounted(){
        this.getVideoList()
        this.initVideoCate()
        this.initCurrentVideo()
    }
};
</script>

<style scoped>
.anchor-container-demo {
  display: flex;
}
#anchor-container {
  flex-grow: 1;
  height: calc(100vh - 74px);
  overflow: auto;

  .anchor-content-1 {
    background: #ecf2fe;
  }
  .anchor-content-2 {
    background: #d4e3fc;
  }
  .anchor-content-3 {
    background: #bbd3fb;
  }
}
.title{
    font-size: 25px;
    font-weight: bold;
    margin-left: 20px;
    padding-top: 25px;
}

.card{
    padding: 25px;
}
.line{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
}
</style>