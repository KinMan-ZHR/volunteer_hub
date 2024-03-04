<template>
    <div style="width: 100%; background-color: white; display: flex;justify-content: center;">
        <div style="width: 1280px;padding: 24px;">
            <!-- 标题区域 -->
            <div style="display: flex;">
                <div style="width: 1080px;">
                    <div style="line-height: 32px;">信息发布</div>
                    <div style="margin-top: 24px;">
                        <t-space :breakLine="true" size="13.33px">
                            <t-card v-for="(item,index) in videoList2" :key="index" :cover="item.cover" bordered :style="{ width: '260px', cursor: 'pointer' }" hoverShadow="true" @click="visible = true">
                                <template #footer>
                                    <div style="display: flex;"><p>{{ item.title }}</p></div>
                                    <div style="display: flex;justify-content: center;">
                                        <div style="position: absolute; top: calc(50% - 47px);">
                                            <t-icon name="play-circle" color="#ffffff" size="48px" @click="onClickToPlayUploadedVideo(index)"></t-icon>
                                        </div>
                                    </div>

                                    <!-- 气泡确认框 -->
                                    <t-popconfirm content="确认删除吗" @confirm="onConfirmDelete(index)">
                                        <div class="delete-btn-container">
                                            <t-icon name="delete" color="red" size="16px"></t-icon>
                                        </div>
                                    </t-popconfirm>

                                </template>
                            </t-card>
                        </t-space>
                    </div>
                </div>
                <div style="flex-grow: 1;"></div>
                <div>
                    <t-upload
                        :multiple="true"
                        accept="video/*"
                        :request-method="requestMethod"
                        :before-upload="beforeUpload"
                    />
                    <div style="margin-top:12px">
                        <t-button variant="outline" theme="primary" @click="onClickToChoseCloudVideo">
                        <template #icon> <t-icon name="cloud-upload" /></template>
                        云端视频
                    </t-button>
                    </div>

                </div>
            </div>
            <!-- <t-table
                row-key="index"
                :columns="columns"
                :data="data"
                :loading="loading"
                drag-sort="row-handler"
                lazy-load
                @drag-sort="onDragSort"
            ></t-table> -->
        </div>

        <t-dialog
            v-model:visible="cloud_list_visible"
            width="1147px"
            :on-confirm="onConfirmVideo"
            >
            <!-- 自定义header -->
            <template #header>
                <div style="display:flex">
                    <span style="display:flex;align-items:center"><t-icon name="cloud"></t-icon></span>
                    <span style="line-height:32px">云端视频</span>
                    <div style="width:36px;"></div>
                    <span>
                        <t-input placeholder="输入以搜索" clearable>
                            <template #suffixIcon>
                                <t-icon name="search" :style="{ cursor: 'pointer' }" size="16px"/>
                            </template>
                        </t-input>
                    </span>
                </div>
            </template>

            <div>
                <t-space :breakLine="true" size="13.33px">

                    <t-card v-for="(item,index) in cloud_video_list" :key="index" :cover="item.cover" bordered :style="{ width: '260px', cursor: 'pointer' }" hoverShadow="true" >
                        <template #footer>
                            <div style="display: flex;"><p>{{ item.title }}</p></div>
                            <div style="position:absolute;top: 6px;right: 0;"><t-checkbox :value="index" :key="index" :label="index" v-model:checked="item.is_choosed" ></t-checkbox></div>
                            <div style="display: flex;justify-content: center;">
                                <div style="position: absolute; top: calc(50% - 47px);">
                                    <t-icon name="play-circle" color="#ffffff" size="48px" @click="onClickToPlayVideo(index)"></t-icon>
                                </div>
                            </div>
                        </template>
                    </t-card>
                </t-space>
            </div>


        </t-dialog>
        <t-dialog
            :footer="false"
            header="视频播放"
            preventScrollThrough
            showOverlay
            placement="center"
            v-model:visible="play_visible"
            width="1080px"
            theme="info"
            >
            <WenZhangVideo :current_video="current_video" :is_play="play_visible"></WenZhangVideo>
        </t-dialog>
    </div>
</template>

<script>
// import DragVue from './DragVue.vue'
// import { MoveIcon } from 'tdesign-icons-vue-next';
import WenZhangVideo from './WenZhangVideo.vue'
import {upLoadVideoAPI} from "@/apis/videoHandler";
// eslint-disable-next-line no-unused-vars
import UploadTest from "@/test/UploadTest.vue";


export default{
    name:'InfomationPub',
    data(){
        return{
            videoList1:[],
            videoList2:[
                {
                    title:'2014央视公益广告《筷子》',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://a5462a0a00cdede2829495b47fe56c8d.v.smtcdns.com/om.tc.qq.com/Aa_KRUeGlCQVO8R2dxyK9y78R_5lY-wMqk0Znz4oG6bU/B_JxNyiJmktHRgresXhfyMepNBqUi0rNULHXmHzThTLbhct0S7J8ZEOLI9qBzc0jb7/svp_50001/szg_78308739_50001_3a304177e8224eecbf7f2bde40edcc26.f632.mp4?sdtfrom=v1010&guid=524690aa801f54d6&vkey=33B39EB894F0C6B147B9AFAF11939409A558F07C0E2BA57C0CAADE4E5BC0CC2D2D689A01F050EC0303CC7EC743FEC9FCBA2AF4D409BE9337BCB2DD63B9E666E0D0ACF4F04361683390532AB60FCB03782172E38A3B016CFC8C74D8F9E1C708C0657C1E0D29B94FD4D354FAE5C3DA722514BD2E5580B9D6982818701459F1EE28FE7A8D41567B807D6D8EBEA9583BAC2D9D2AB230187E98CD8D99BFC5204F98910292285CF6F5D07B',
                    description:'2014央视公益广告《筷子》',
                    date:'2018-12-05',
                },
                {
                    title:'公益广告五分钟',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://apd-ugcvlive.apdcdn.tc.qq.com/om.tc.qq.com/AOxPyqZIzzHh521WwmMm3bJZefCoGzVKkQwRdr17m2Ew/B_JxNyiJmktHRgresXhfyMeo8fixGnaMJkCgsHKywTKlUvVsev9UdHRN_1kp6emuQq/svp_50200/njc_1000195_0bc3aicbgaaeluacjwmvvzrryawecmbaie2a.f2.mp4?sdtfrom=v1010&guid=e91979b79120cd89&vkey=63508C3A90D02AF43851A0631DBA911DE9486F2B8B2651CC44252CFE857481ACFD82D72C3E5B42E40C19F4BF0B4DBEA82ACDE69196019FA7771E5B619D0E173B266F81572C2E7CC6643D4D73DA106C15A1FEBE5BE384536AFDC73A01EB6322EC3B4E7A0CBD214CE948B808B311ED2FD363AB2D48ABC2A559042527EAEA1043FEC692AD39BB692195A6B8BEA1BF1AFC14F98662A37B9F0F24DD578979B44B372E41C3EC0791FF9214',
                    description:'公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟',
                    date:'2018-12-05',
                },
            ],

            // 一定要给默认数据，为了防止报错。
            cloud_video_list:[

            ],

            // 此处待完成
            // columns:[
            //     {colKey:'drag',title: '排序',
            //         // eslint-disable-next-line @typescript-eslint/no-unused-vars
            //         cell: (h) => (
            //         <span>
            //             <MoveIcon />
            //         </span>
            //         ),
            //         width: 46,
            //     },
            //     { colKey: 'name', title: '视频名称', ellipsis: true },
            //     { colKey: 'fileSize', title: '文件大小',width: 100},
            //     { colKey: 'uploadTime', title: '上传时间', ellipsis: true },
            //     { colKey: 'operation', title: '操作', ellipsis: true },

            // ]

            cloud_list_visible:false,

            play_visible:false,

            current_video:{
                title:'公益广告五分钟',
                cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                link:'https://apd-ugcvlive.apdcdn.tc.qq.com/om.tc.qq.com/AOxPyqZIzzHh521WwmMm3bJZefCoGzVKkQwRdr17m2Ew/B_JxNyiJmktHRgresXhfyMeo8fixGnaMJkCgsHKywTKlUvVsev9UdHRN_1kp6emuQq/svp_50200/njc_1000195_0bc3aicbgaaeluacjwmvvzrryawecmbaie2a.f2.mp4?sdtfrom=v1010&guid=e91979b79120cd89&vkey=63508C3A90D02AF43851A0631DBA911DE9486F2B8B2651CC44252CFE857481ACFD82D72C3E5B42E40C19F4BF0B4DBEA82ACDE69196019FA7771E5B619D0E173B266F81572C2E7CC6643D4D73DA106C15A1FEBE5BE384536AFDC73A01EB6322EC3B4E7A0CBD214CE948B808B311ED2FD363AB2D48ABC2A559042527EAEA1043FEC692AD39BB692195A6B8BEA1BF1AFC14F98662A37B9F0F24DD578979B44B372E41C3EC0791FF9214',
                description:'公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟',
                date:'2018-12-05',
            },

        }
    },
    components:{
        // DragVue
        WenZhangVideo
    },
    methods:{
      async requestMethod(file){
            console.log(file);
        const formData = new FormData();
        formData.append('video', file[0].raw);
        try {
          const response = await upLoadVideoAPI(formData);
          if (response.data.code === 200) {
            return {
              status: 'success',
              response: {
                url: response.data.coredata.url,
              }
            };
          } else {
            return {status: 'fail', error: response.data.message, response};
          }
        } catch (error) {
          return {status: 'fail', error: error.message};
        }
        },
        // 获取云端视频列表
        getVideoList(){
            // 从服务器获取所有视频列表
            this.cloud_video_list=[
                {
                    title:'2014央视公益广告《筷子》',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://a5462a0a00cdede2829495b47fe56c8d.v.smtcdns.com/om.tc.qq.com/Aa_KRUeGlCQVO8R2dxyK9y78R_5lY-wMqk0Znz4oG6bU/B_JxNyiJmktHRgresXhfyMepNBqUi0rNULHXmHzThTLbhct0S7J8ZEOLI9qBzc0jb7/svp_50001/szg_78308739_50001_3a304177e8224eecbf7f2bde40edcc26.f632.mp4?sdtfrom=v1010&guid=524690aa801f54d6&vkey=33B39EB894F0C6B147B9AFAF11939409A558F07C0E2BA57C0CAADE4E5BC0CC2D2D689A01F050EC0303CC7EC743FEC9FCBA2AF4D409BE9337BCB2DD63B9E666E0D0ACF4F04361683390532AB60FCB03782172E38A3B016CFC8C74D8F9E1C708C0657C1E0D29B94FD4D354FAE5C3DA722514BD2E5580B9D6982818701459F1EE28FE7A8D41567B807D6D8EBEA9583BAC2D9D2AB230187E98CD8D99BFC5204F98910292285CF6F5D07B',
                    description:'2014央视公益广告《筷子》',
                    date:'2018-12-05',
                },
                {
                    title:'公益广告五分钟',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://apd-ugcvlive.apdcdn.tc.qq.com/om.tc.qq.com/AOxPyqZIzzHh521WwmMm3bJZefCoGzVKkQwRdr17m2Ew/B_JxNyiJmktHRgresXhfyMeo8fixGnaMJkCgsHKywTKlUvVsev9UdHRN_1kp6emuQq/svp_50200/njc_1000195_0bc3aicbgaaeluacjwmvvzrryawecmbaie2a.f2.mp4?sdtfrom=v1010&guid=e91979b79120cd89&vkey=63508C3A90D02AF43851A0631DBA911DE9486F2B8B2651CC44252CFE857481ACFD82D72C3E5B42E40C19F4BF0B4DBEA82ACDE69196019FA7771E5B619D0E173B266F81572C2E7CC6643D4D73DA106C15A1FEBE5BE384536AFDC73A01EB6322EC3B4E7A0CBD214CE948B808B311ED2FD363AB2D48ABC2A559042527EAEA1043FEC692AD39BB692195A6B8BEA1BF1AFC14F98662A37B9F0F24DD578979B44B372E41C3EC0791FF9214',
                    description:'公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟',
                    date:'2018-12-05',
                },
                {
                    title:'2014央视公益广告《筷子》',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://a5462a0a00cdede2829495b47fe56c8d.v.smtcdns.com/om.tc.qq.com/Aa_KRUeGlCQVO8R2dxyK9y78R_5lY-wMqk0Znz4oG6bU/B_JxNyiJmktHRgresXhfyMepNBqUi0rNULHXmHzThTLbhct0S7J8ZEOLI9qBzc0jb7/svp_50001/szg_78308739_50001_3a304177e8224eecbf7f2bde40edcc26.f632.mp4?sdtfrom=v1010&guid=524690aa801f54d6&vkey=33B39EB894F0C6B147B9AFAF11939409A558F07C0E2BA57C0CAADE4E5BC0CC2D2D689A01F050EC0303CC7EC743FEC9FCBA2AF4D409BE9337BCB2DD63B9E666E0D0ACF4F04361683390532AB60FCB03782172E38A3B016CFC8C74D8F9E1C708C0657C1E0D29B94FD4D354FAE5C3DA722514BD2E5580B9D6982818701459F1EE28FE7A8D41567B807D6D8EBEA9583BAC2D9D2AB230187E98CD8D99BFC5204F98910292285CF6F5D07B',
                    description:'2014央视公益广告《筷子》',
                    date:'2018-12-05',
                },
                {
                    title:'公益广告五分钟',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://apd-ugcvlive.apdcdn.tc.qq.com/om.tc.qq.com/AOxPyqZIzzHh521WwmMm3bJZefCoGzVKkQwRdr17m2Ew/B_JxNyiJmktHRgresXhfyMeo8fixGnaMJkCgsHKywTKlUvVsev9UdHRN_1kp6emuQq/svp_50200/njc_1000195_0bc3aicbgaaeluacjwmvvzrryawecmbaie2a.f2.mp4?sdtfrom=v1010&guid=e91979b79120cd89&vkey=63508C3A90D02AF43851A0631DBA911DE9486F2B8B2651CC44252CFE857481ACFD82D72C3E5B42E40C19F4BF0B4DBEA82ACDE69196019FA7771E5B619D0E173B266F81572C2E7CC6643D4D73DA106C15A1FEBE5BE384536AFDC73A01EB6322EC3B4E7A0CBD214CE948B808B311ED2FD363AB2D48ABC2A559042527EAEA1043FEC692AD39BB692195A6B8BEA1BF1AFC14F98662A37B9F0F24DD578979B44B372E41C3EC0791FF9214',
                    description:'公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟公益广告五分钟',
                    date:'2018-12-05',
                },
                {
                    title:'2014央视公益广告《筷子》',
                    cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    link:'https://a5462a0a00cdede2829495b47fe56c8d.v.smtcdns.com/om.tc.qq.com/Aa_KRUeGlCQVO8R2dxyK9y78R_5lY-wMqk0Znz4oG6bU/B_JxNyiJmktHRgresXhfyMepNBqUi0rNULHXmHzThTLbhct0S7J8ZEOLI9qBzc0jb7/svp_50001/szg_78308739_50001_3a304177e8224eecbf7f2bde40edcc26.f632.mp4?sdtfrom=v1010&guid=524690aa801f54d6&vkey=33B39EB894F0C6B147B9AFAF11939409A558F07C0E2BA57C0CAADE4E5BC0CC2D2D689A01F050EC0303CC7EC743FEC9FCBA2AF4D409BE9337BCB2DD63B9E666E0D0ACF4F04361683390532AB60FCB03782172E38A3B016CFC8C74D8F9E1C708C0657C1E0D29B94FD4D354FAE5C3DA722514BD2E5580B9D6982818701459F1EE28FE7A8D41567B807D6D8EBEA9583BAC2D9D2AB230187E98CD8D99BFC5204F98910292285CF6F5D07B',
                    description:'2014央视公益广告《筷子》',
                    date:'2018-12-05',
                },
            ]
        },

        processCloudVideo(){
            // 为videoList的每个元素添加一个属性
            for(var i = 0;i<this.cloud_video_list.length;i++){
                this.cloud_video_list[i].is_choosed = false
            }
        },

        onClickToChoseCloudVideo(){
            // 点击选择云端视频
            this.getVideoList()
            this.processCloudVideo()
            this.cloud_list_visible=true

        },

        onConfirmVideo(){
            var choosed_video_list = []
            choosed_video_list =  this.cloud_video_list.filter( item => item.is_choosed === true)
            console.log(choosed_video_list);
            this.cloud_list_visible = false
            this.videoList2 = this.videoList2.concat(choosed_video_list)
        },

        onConfirmDelete(index){
            // 确认删除视频
            // console.log(index);
            this.videoList2.splice(index,1)
        },

        onClickToPlayVideo(index){
            // 点击播放视频
            this.current_video = this.cloud_video_list[index]
            this.play_visible = true
        },


        onClickToPlayUploadedVideo(index){
            // 点击播放已上传的视频
            // console.log(index);
            this.current_video = this.videoList2[index]
            this.play_visible = true
        },


    },



}

</script>

<style scoped>

.delete-btn-container{
    border-radius:8px;
    width:32px;
    height:32px;
    /* background-color:var(--td-gray-color-3); */
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    top: 0;
    right: 0;

}

.delete-btn-container :hover{
    background-color: #e7e7e766;
    border-radius:4px;
    width:32px;
    height:32px;
    padding:0 8px;

}

</style>