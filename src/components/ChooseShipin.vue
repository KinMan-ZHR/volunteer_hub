<template>
    <div class="container">
        <div style="width:20%;">
            <div >
                <t-input placeholder="输入以搜索" clearable>
                <template #suffixIcon>
                    <search-icon :style="{ cursor: 'pointer' }" />
                </template>
                </t-input>
            </div>
        </div>
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
</template>

<script>
export default{
    nameL:'ChooseShipin',
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
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
.container{
    width:100%;
    padding: 20px;
    background-color: white;
    margin-top: 20px;
}
</style>