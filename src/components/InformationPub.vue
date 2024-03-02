<template>
    <div style="width: 100%; background-color: white; display: flex;justify-content: center;">
        <div style="width: 1280px;padding: 24px;">
            <!-- 标题区域 -->
            <div style="display: flex;">
                <div style="width: 1080px;">
                    <div style="line-height: 32px;">信息发布</div>
                    <div style="margin-top: 24px;">
                        <t-space :breakLine="true" size="13.33px">
                            <t-card v-for="(item,index) in videoList2" :key="index" :cover="item.first_frame" bordered :style="{ width: '260px', cursor: 'pointer' }" hoverShadow="true" @click="visible = true">
                                <template #footer>
                                    <div style="display: flex;"><p>{{ item.title }}</p></div>
                                    <div style="display: flex;justify-content: center;">
                                        <div style="position: absolute; top: calc(50% - 47px);">
                                            <t-icon name="play-circle" color="#ffffff" size="48px"></t-icon>
                                        </div>
                                    </div>
                                </template>
                            </t-card>
                        </t-space>
                    </div>
                </div>
                <div style="flex-grow: 1;"></div>
                <div>
                    <t-upload
                        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
                        multiple
                        accept="video/*"
                        @change="onUploadChange"
                    />
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
    </div>
    <ChooseShipin></ChooseShipin>
</template>

<script>
// import DragVue from './DragVue.vue'
// import { MoveIcon } from 'tdesign-icons-vue-next';
import ChooseShipin from './ChooseShipin.vue'

export default{
    name:'InfomationPub',
    data(){
        return{
            videoList1:[],
            videoList2:[
                {
                    video:"https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4",
                    first_frame:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcdM.img',
                    title:'视频1',
                },
                {
                    video:"https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4",
                    first_frame:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcdM.img',
                    title:'视频2',
                },
                {
                    video:"https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4",
                    first_frame:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcdM.img',
                    title:'视频3',
                },
                {
                    video:"https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4",
                    first_frame:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcdM.img',
                    title:'视频4',
                },
                {
                    video:"https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4",
                    first_frame:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcdM.img',
                    title:'视频5',
                },
            ],

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
        }
    },
    components:{
        // DragVue
        ChooseShipin
    },
    methods:{
        onUploadChange(e){
            console.log(e);
        }

    }

}

</script>

<style scoped>

</style>