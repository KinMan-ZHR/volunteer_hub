<template>
    <div style="display: flex;">
        <div class="all">
            <div class="left">
                <div style="display: flex;justify-content: center;">
                    <p class="title">操作日志</p>
                    <div style="flex-grow: 1;"></div>
                    <div>
                        <t-button shape="round" theme="primary" variant="outline" @click="exportLog">导出</t-button>
                    </div>
                </div>
                <div style="width: 100%;height: 90%;margin-top: 20px; border-radius: 10px;">
                    <t-textarea placeholder="请输入内容" readonly :autosize="{ minRows: 30, maxRows: 30}" disabled v-model:value="operation_log"/>
                </div>
            </div>
            <div class="right">
                <p class="title">基本信息</p>
                <div style="margin-left: -15px;margin-top: 10px;">
                    <t-descriptions layout="vertical" colon style="width: 700px;">
                        <t-descriptions-item label="名称" >{{ uname }}</t-descriptions-item>
                        <t-descriptions-item label="地址">{{ url }}</t-descriptions-item>
                        <t-descriptions-item label="描述">{{ description }}</t-descriptions-item>
                        <t-descriptions-item label="关键词">{{ keyword }}</t-descriptions-item>
                        <t-descriptions-item label="作者">{{ author }}</t-descriptions-item>
                        <t-descriptions-item label="版权信息">{{ banquan }}</t-descriptions-item>
                        <t-descriptions-item label="隐私政策">{{ yinsi }}</t-descriptions-item>
                        <t-descriptions-item label="联系信息">{{ connect }}</t-descriptions-item>
                        <t-descriptions-item label="技术栈">{{ tech }}</t-descriptions-item>
                        <t-descriptions-item label="组件库">{{ zujian }}</t-descriptions-item>
                    </t-descriptions>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
// import $ from 'jquery';
import axios from 'axios'
import {getLogFileAPI} from '@/apis/exportHandler.js'

export default{
    name:'SystemInformation',
    data(){
        return{
            uname:'志愿云媒体',
            url:'郫都区',
            description:'志愿云媒体是一个在线平台，汇聚了来自世界各地的志愿者和非营利组织。该平台为志愿者提供与志同道合的人联系的机会，并为非营利组织提供招募志愿者的途径。志愿云媒体还提供在线培训和资源，帮助志愿者和非营利组织发挥最大潜力',
            keyword:'志愿，服务，公益，活动',
            author:'赖周友，李珈锋，张浩然，丁利，唐小伟，梅洋荣',
            banquan:'该网站版权不归作者所有，如有雷同，纯属意外',
            yinsi:'我们收集了您的相关信息，请您不要害怕，因为我们会将其公布',
            connect:'联系信息',
            tech:'Vue3，Java，Javascript，CSS，HTML',
            zujian:'TDesign',
            operation_log:'这是日志文字'
        }
    },
    methods:{
        async exportLog(){
            await getLogFileAPI().then(async (e)=>{
                if(e.data.code == 200){
                    var fileURL = e.data.coredata.logURL
                    window.open(fileURL)
                }
            })
        }
    },
    async mounted(){
        var _this = this
        await getLogFileAPI().then(async (e)=>{
            if(e.data.code == 200){
                var fileURL = e.data.coredata.logURL
                console.log(fileURL);
                // $.get(fileURL,function(e){
                //     console.log(e);
                // })
                try {
                    const response = await axios.get(fileURL);
                    var log_string = response.data;
                    _this.operation_log = log_string
                } catch (error) {
                    console.error('Error fetching log file:', error);
                }
            }
        })
    },
}
</script>

<style scoped>
.all{
    display: flex;
    background-color: white;
    border-radius: 8px;
    width: 100%;
    height: 780px;
    margin: 24px;
}
.left{
    width: 50%;
    padding: 20px;
}
.right{
    width: 50%;
    padding: 20px;
}
.title{
    font-size: 20px;
    font-weight: bold;
}
</style>