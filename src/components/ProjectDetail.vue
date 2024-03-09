<template>
    <div class="all">
        <div style="display: flex;width: 100%; ">
            <img :src="project_show.cover" height="112px">
            <div style="margin-left: 20px;">
                <t-descriptions colon size="small" layout="vertical" >
                    <template #title>
                        <div style="font-size: 22px;margin-left: 13px;">
                            {{ project_show.name }}
                        </div>
                    </template>
                    <t-descriptions-item label="项目编号">{{ project_show.id }}</t-descriptions-item>
                    <t-descriptions-item label="项目类别">{{ project_show.cate_str }}</t-descriptions-item>
                </t-descriptions>
            </div>
        </div>
        <div style="margin-top: 10px;margin-left: -10px;">
            <t-descriptions colon size="small">
                <t-descriptions-item label="项目地点">{{ project_show.location }}</t-descriptions-item>
                <t-descriptions-item label="发布日期">{{ project_show.pub_date }}</t-descriptions-item>
                <t-descriptions-item label="项目日期">{{ project_show.date_str}}</t-descriptions-item>
                <t-descriptions-item label="服务对象">{{ project_show.service_str }}</t-descriptions-item>
                <t-descriptions-item label="项目详情">{{ project_show.description }}</t-descriptions-item>
            </t-descriptions>
        </div>
    </div>
</template>

<script>
export default{
    name:'ProjectDetail',
    data(){
        return{
            dash:'庆祝“三八”国际妇女节主题活动',
            number:'P51190324030028878',
            classify:'其他,文明风尚,文化艺术',
            location:'恩阳区关公镇神牛溪',
            cover: "fasdf",
            pub_date:'2024-03-01',
            proDate:'2024-03-01 至 2024-03-17',
            object:'社会公众,其他,妇女',
            vol:'志愿者保险,志愿服务证书,集中乘车,志愿者服装,志愿服务工具,提供饮水',
            address:'http://sc.chinavolunteer.mca.gov.cn/subsite/sichuan/projectInfo/5106d07a1f334d338cc952f27ea0a9fb/511903000000000000'
        }
    },
    props:['project_show'],
    methods:{

    },
    mounted(){
        // console.log(this.project_show);
    }
}
</script>

<style scoped>
.all{
    /* background-color: lightblue; */
    /* border-radius: 10px; */
    /* width: 50%; */
    /* padding: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* margin: 20px; */
    /* justify-self: center; */
}
</style>