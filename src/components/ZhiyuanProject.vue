<template>
    <div style="display: flex;justify-content: center; width: 100%; background-color: #fff;">

        <div style="width: 1280px;">
            <div>
                <t-dialog v-model:visible="dialog_show" width="650px" header="项目详情" theme="info" confirmBtn="查看详情" @confirm="onClickConfirm">
                    <ProjectDetail :project_show="project_show"></ProjectDetail>
                </t-dialog>
            </div>
            <!-- 上方的选择选项卡 -->
            <div style="padding: 24px;">
                <div style="padding: 24px 0; font-weight: bold;">项目筛选</div>
                <t-space direction="vertical">
                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">项目区域</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="formData.region" :options="options_region" :unchecked-props="STYLE_UNCHECKED_PROPS" @change="onSearchProject"/>
                </t-space>

                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">服务类别</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="formData.type" :options="options_cate" :unchecked-props="STYLE_UNCHECKED_PROPS" @change="onSearchProject"/>
                </t-space>

                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">项目状态</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="formData.state" :options="options_state" :unchecked-props="STYLE_UNCHECKED_PROPS" @change="onSearchProject"/>
                </t-space>

                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">报名范围</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="formData.scale" :options="options_scale" :unchecked-props="STYLE_UNCHECKED_PROPS" @change="onSearchProject"/>
                </t-space>

                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">服务对象</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="formData.target" :options="options_service" :unchecked-props="STYLE_UNCHECKED_PROPS" @change="onSearchProject"/>
                </t-space>

                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">项目人数</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="formData.size" :options="options_peoplenum" :unchecked-props="STYLE_UNCHECKED_PROPS" @change="onSearchProject"/>
                </t-space>

            </t-space>
            </div>
            <t-divider />
            <!-- 中间的搜索栏 -->
            <div style="padding:0 24px;">
                <t-form ref="form" :data="formData" :colon="true" :label-width="0" @reset="onReset" @submit="onSubmit" layout="inline" >
                    <t-form-item name="date_range" style="z-index : 999">
                        <label class="cate-title">项目起止日期 </label>
                        <t-date-range-picker allow-input clearable  @change="onChange" v-model="formData.time_range"/>
                    </t-form-item>

                    <t-form-item name="id" style="z-index : 999">
                        <label>
                            <p class="cate-title" style="width: 72px;">项目编号 </p>
                        </label>
                        <t-input clearable placeholder="请输入项目ID" v-model="formData.id">
                        </t-input>
                    </t-form-item>

                    <t-form-item name="name" style="z-index : 999">
                        <label class="cate-title" >
                            <p class="cate-title" style="width: 72px;">项目名称 </p></label>
                        <t-input clearable placeholder="请输入项目名称" v-model="formData.name">
                        </t-input>
                    </t-form-item>

                    <t-form-item style="position: absolute;">
                        <t-space size="small" style="position: absolute;">
                            <div style="width: 1080px;"></div>
                            <t-button theme="primary" type="submit" style="width: 50px;" @click="onSearchProject">搜索</t-button>
                            <t-button theme="default" variant="base" type="reset" @reset="onReset">重置</t-button>
                        </t-space>
                    </t-form-item>
                </t-form>
            </div>

            <t-divider />

            <!-- 底部的活动展示区 -->

            <div>
                <t-space :breakLine="true" size="26.66px">
                    <t-card v-for="(item,index) in project" :key="index" :cover="item.cover" bordered :style="{ width: '300px',cursor:'pointer' }" :hoverShadow="true" @click="onClickProject(index)">
                        <template #footer>
                            <div style="display: flex;"><p>{{ item.name }}</p>
                                <t-icon name="refresh" v-if="item.project_state === '1'" style="color: green; line-height: 22px;margin-top: 4px; margin-left: 8px;" ></t-icon>
                                <t-icon name="pending" v-if="item.project_state === '2'" style="color: var(--td-brand-color-4); line-height: 22px;margin-top: 4px; margin-left: 8px;" ></t-icon>
                                <t-icon name="assignment" v-if="item.project_state === '0'" style="color: red; line-height: 22px;margin-top: 4px; margin-left: 8px;" ></t-icon>
                                <div style="padding: 0px 4px ;">
                                    <p class="note" v-if="item.project_state === '1'" style="color: green;">进行中</p>
                                    <p class="note" v-if="item.project_state === '2'" style="color: var(--td-brand-color-4);">待启动</p>
                                    <p class="note" v-if="item.project_state === '0'" style="color: red;">已结项</p>
                                </div>
                            </div>
                            <p class="note">{{ item.description }}</p>
                        </template>
                    </t-card>
                </t-space>
                <div style="padding:24px">
                    <t-pagination
                    :total="projectNum"
                    showPageNumber
                    :showPageSize="false"
                    showFirstAndLastPageBtn
                    :pageSize="12"
                    @change="onChangePagination"/>
                </div>
                <div style="height:200px"></div>
                <!-- <ProjectDetail></ProjectDetail> -->
            </div>


        </div>
    </div>
</template>

<script>
import ProjectDetail from './ProjectDetail.vue';
import { ref } from 'vue';
import {getProjectAPI, searchProjectAPI} from "@/apis/projectHandler";
export default{
    name:'ZhiyuanProject',
    components:{
        ProjectDetail
    },
    data(){
        return{
            options_region : [
                { label: '全部', value: 1 },
                { label: '全国', value: 2 },
                { label: '成都市', value: 3 },
                { label: '自贡市', value: 4 },
                { label: '攀枝花市', value: 5 },
                { label: '泸州市', value: 6 },
                { label: '德阳市', value: 7 },
                { label: '绵阳市', value: 8 },
                { label: '广元市', value: 9 },
                { label: '遂宁市', value: 10 },
                { label: '内江市', value: 11 },
                { label: '乐山市', value: 12 },
                { label: '南充市', value: 13 },
                { label: '眉山市', value: 14 },
                { label: '宜宾市', value: 15 },
                { label: '广安市', value: 16 },
                { label: '达州市', value: 17 },
                { label: '雅安市', value: 18 },
                { label: '巴中市', value: 19 },
                { label: '资阳市', value: 20 },
                { label: '阿坝藏族羌族自治州', value: 21 },
                { label: '甘孜藏族自治州', value: 22 },
                { label: '凉山彝族自治州', value: 23 },
            ],
            options_cate : [
                { label: '全部', value: 1 },
                { label: '社区服务', value: 2 },
                { label: '其他', value: 3 },
                { label: '扶贫减贫', value: 4 },
                { label: '支教助学', value: 5 },
                { label: '卫生健康', value: 6 },
                { label: '法律服务', value: 7 },
                { label: '环境保护', value: 8 },
                { label: '科技科普', value: 9 },
                { label: '文化艺术', value: 10 },
                { label: '平安综治', value: 11 },
                { label: '文明风尚', value: 12 },
                { label: '交通引导', value: 13 },
                { label: '志愿消防', value: 14 },
                { label: '应急救援', value: 15 },
                { label: '禁毒宣传', value: 16 },
                { label: '体育健身', value: 17 },
                { label: '旅游服务', value: 18 },
                { label: '关爱特殊群体', value: 19 },
                { label: '大型活动', value: 20 },
                { label: '海外志愿服务', value: 21 },
                { label: '税收服务', value: 22 },
                { label: '疫情防控', value: 23 },
            ],
            options_state:[
                { label: '全部', value: 1 },
                { label: '待启动', value: 2 },
                { label: '运行中', value: 3 },
                { label: '已结项', value: 4},
            ],
            options_scale:[
                { label: '公开招募', value: 1 },
                { label: '指定支援队伍招募', value: 2 },
                { label: '设定免审密码招募', value: 3}
            ],
            options_service:[
                { label: '全部', value: 1 },
                { label: '儿童', value: 2 },
                { label: '妇女', value: 3 },
                { label: '老年人', value: 4 },
                { label: '残障人士', value: 5 },
                { label: '优抚对象', value: 6 },
                { label: '贫困家庭', value: 7 },
                { label: '特殊群体', value: 8 },
                { label: '病患者', value: 9 },
                { label: '农村居民', value: 10 },
                { label: '城镇居民', value: 11 },
                { label: '社会公众', value: 12 },
                { label: '纳税人缴费人', value: 13 },
                { label: '其他', value: 14 },
            ],
            options_peoplenum:[
                { label: '全部', value: 1},
                { label: '0', value: 2 },
                { label: '1-100', value: 3 },
                { label: '101-200', value: 4 },
                { label: '201-500', value: 5 },
                { label: '501-1000', value: 6 },
                { label: '1000以上', value: 7 },
            ],



            STYLE_UNCHECKED_PROPS :{
                theme: 'default',
                variant: 'outline',
            },

            // 搜索所用的data
            formData:{
                size : ref([1]),
                target : ref([1]),
                scale : ref([1]),
                region : ref([1]),
                type : ref([1]),
                state : ref([1]),
                time_range: ['',''],
                id : '',
                name: '',
            },

            // Project必须有一个初始值
            project:[{
              name:'项目1',
              id:'P51190324030028878',
              location:'恩阳区关公镇神牛溪',
              pub_date:'2024-03-01',
              time_range:['2024-03-01','2024-03-03'],
              type:[1,3],
              project_state:'1',
              state:'0',
              target:[1,12,14,3],
              cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
              description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
              address:'https://tdesign.gtimg.com',
            }],

            current_page:[],

            project_show:[],

            projectNum:2,

            current:1,

            pagesize:12,

            visible:false,

            dialog_show:false,
        }

    },
    methods:{
        // 日期选择器变化时触发
        onChange(e){
            console.log(e);
            this.formData.time_range = e
        },

        onReset(){
            console.log('reset');
            this.formData.time_range = ['','']
        },

        // 分页变化时触发
        onChangePagination(e){
            let current = e.current
            // let previous = e.previous
            this.current = current
            this.getProjectData(current,this.pagesize)
        },

        // 点击查看详情时跳转到外部网站
        onClickConfirm(){
            var address = this.project_show.address
            window.open(address)
        },

        // 处理project数据，根据tag的值对应tag的名称
        initProjectTagName(){
            let cate_str="";
            let service_str="";

            for(var i = 0;i<this.project.length;i++){
                for( const item of this.project[i].type){
                    for(const options of this.options_cate){
                        if( item === options.value && item !== 1){
                            cate_str += options.label + ",";
                        }
                    }
                }
                cate_str = cate_str.slice(0, -1);
                this.project[i].cate_str = cate_str
                cate_str = ""
                for( const item of this.project[i].target){
                    for(const options of this.options_service){
                        if( item === options.value && item !== 1){
                            service_str += options.label + ",";
                        }
                    }
                }
                service_str = service_str.slice(0, -1);
                this.project[i].service_str = service_str
                service_str = ""
            }


        },


        onClickProject(e){
            var id = e
          console.log(id)
            this.project_show = this.project[id]
            this.dialog_show = true
        },

        // 点击搜索按钮时触发搜索项目+标签发生变化时触发搜索
        async onSearchProject(){
           await searchProjectAPI(this.formData).then(res=>{
                if(res.data.code!==200){
                    this.project=res.data.coredata.projectList;
                }
            })
            // 这里获取搜索的数据
            // ……
            // this.project = ***

            // 结束后处理数据
            // this.initCurrentPage()
            this.initProjectTagName()
            this.initProjectDateStr()
        },


        initProjectShow(){
            this.project_show = this.project[0]
        },

        initProjectDateStr(){
            for(var i =0;i<this.project.length;i++){
                this.project[i].date_str = this.project[i].time_range[0] +' 至 '+this.project[i].time_range[1]
            }
        },

        async getProjectData(current, pageSize) {
          // TODO(交互)：根据current和pagesize从数据库中获取项目列表
          console.log(current, pageSize);
          // this.project = [{
          //         name:'项目1',
          //         id:'P51190324030028878',
          //         location:'恩阳区关公镇神牛溪',
          //         pub_date:'2024-03-01',
          //         time_range:['2024-03-01','2024-03-03'],
          //         // 服务类别
          //         type:[1,3],
          //         // 项目状态，需要处理获取
          //         project_state:'1',
          //         state:'0',
          //         // 项目的服务对象
          //         target:[1,12,14,3],
          //         cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
          //         description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
          //         address:'https://tdesign.gtimg.com'
          //     },
          //     {
          //         name:'项目2',
          //         id:'P51190324030028878',
          //         location:'恩阳区关公镇神牛溪',
          //         pub_date:'2024-03-01',
          //         time_range:['2024-03-01','2024-03-13'],
          //         // 服务类别
          //         type:[1,3],
          //         // 项目状态，需要初始化处理获取
          //         project_state:'0',
          //         // 项目的服务对象
          //         target:[1,11,14,3],
          //         state:'1',
          //         cover:'https://tdesign.gtimg.com/site/source/card-demo.png',
          //         description:'组织志愿者通过走访慰问、生活帮扶、节日慰问等方式，为他们提供政策宣传、精神慰籍、陪伴照料、物质援助、信息咨询等服务，助力乡村振兴。',
          //         address:'https://tdesign.gtimg.com'
          //     },
          // ]
          // this.projectNum = 100
          await getProjectAPI(current, pageSize).then(res => {
            if (res.data.code === 200) {
              this.project = res.data.coredata.projectList;
              this.projectNum = res.data.coredata.total;
            }
          })
        },
    },
    mounted(){
        // this.initProjectState()
        this.getProjectData(this.current,this.pagesize)
        this.initProjectTagName()
        this.initProjectDateStr()
        this.initProjectShow()

    },
}

</script>

<style scoped>
.cate-title{
    font-size: 14px;
    font-weight: bold;
}

</style>