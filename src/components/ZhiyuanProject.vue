<template>
    <div style="display: flex;justify-content: center; width: 100%; background-color: #fff;">

        <div style="width: 1280px;">
            <!-- 上方的选择选项卡 -->
            <div style="padding: 24px;">
                <div style="padding: 24px 0; font-weight: bold;">项目筛选</div>
                <t-space direction="vertical">
                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">项目区域</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="checkTagValueRegion" :options="options_region" :unchecked-props="STYLE_UNCHECKED_PROPS" @change="onChangeTag"/>
                </t-space>

                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">服务类别</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="checkTagValueCate" :options="options_cate" :unchecked-props="STYLE_UNCHECKED_PROPS"/>
                </t-space>

                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">项目状态</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="checkTagValueState" :options="options_state" :unchecked-props="STYLE_UNCHECKED_PROPS"/>
                </t-space>

                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">报名范围</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="checkTagValueScale" :options="options_scale" :unchecked-props="STYLE_UNCHECKED_PROPS"/>
                </t-space>

                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">服务对象</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="checkTagValueService" :options="options_service" :unchecked-props="STYLE_UNCHECKED_PROPS"/>
                </t-space>

                <t-space >
                    <label class="cate-title">
                        <p style="width: 72px;">项目人数</p></label>
                    <t-check-tag-group style="line-height: 30px;" v-model="checkTagValuePeoplenum" :options="options_peoplenum" :unchecked-props="STYLE_UNCHECKED_PROPS"/>
                </t-space>

            </t-space>
            </div>
            <t-divider />
            <!-- 中间的搜索栏 -->
            <div style="padding:0 24px;">
                <t-form ref="form" :data="formData" :colon="true" :label-width="0" @reset="onReset" @submit="onSubmit" layout="inline" >
                    <t-form-item name="date_range" style="z-index : 999">
                        <label class="cate-title">项目起止日期 </label>
                        <t-date-range-picker allow-input clearable @pick="onPick" @change="onChange" v-model="formData.time_range"/>
                    </t-form-item>

                    <t-form-item name="project_id" style="z-index : 999">
                        <label>
                            <p class="cate-title" style="width: 72px;">项目编号 </p>
                        </label>
                        <t-input clearable placeholder="请输入项目ID" v-model="formData.project_id">
                        </t-input>
                    </t-form-item>

                    <t-form-item name="project_name" style="z-index : 999">
                        <label class="cate-title" >
                            <p class="cate-title" style="width: 72px;">项目名称 </p></label>
                        <t-input clearable placeholder="请输入项目名称" v-model="formData.project_name">
                        </t-input>
                    </t-form-item>

                    <t-form-item style="position: absolute;">
                        <t-space size="small" style="position: absolute;">
                            <div style="width: 1080px;"></div>
                            <t-button theme="primary" type="submit" style="width: 50px;">搜索</t-button>
                            <t-button theme="default" variant="base" type="reset" @reset="onReset">重置</t-button>
                        </t-space>
                    </t-form-item>
                </t-form>
            </div>

            <t-divider />

            <!-- 底部的活动展示区 -->

            <div>
                <t-space :breakLine="true" size="26.66px">
                    <t-card v-for="(item,index) in current_page" :key="index" :cover="item.cover" bordered :style="{ width: '300px' }">
                        <template #footer>
                            <div style="display: flex;"><p>{{ item.title }}</p>
                                <t-icon name="refresh" v-if="item.state == 1" style="color: green; line-height: 22px;margin-top: 4px; margin-left: 8px;" ></t-icon>
                                <t-icon name="pending" v-if="item.state == 2" style="color: var(--td-brand-color-4); line-height: 22px;margin-top: 4px; margin-left: 8px;" ></t-icon>
                                <t-icon name="assignment" v-if="item.state == 0" style="color: red; line-height: 22px;margin-top: 4px; margin-left: 8px;" ></t-icon>
                                <div style="padding: 0px 4px ;">
                                    <p class="note" v-if="item.state == 1" style="color: green;">进行中</p>
                                    <p class="note" v-if="item.state == 2" style="color: var(--td-brand-color-4);">待启动</p>
                                    <p class="note" v-if="item.state == 0" style="color: red;">已结项</p>
                                </div>
                            </div>
                            <p class="note">{{ item.description }}</p>
                        </template>
                    </t-card>
                </t-space>
                <div style="padding:24px">
                    <t-pagination :total="project.length" showPageNumber :showPageSize="false" showFirstAndLastPageBtn pageSize="12" @change="onChangePagination"/>
                </div>
                <div style="height:200px"></div>

            </div>


        </div>
    </div>
</template>

<script>



import { ref } from 'vue';
export default{
    name:'ZhiyuanProject',
    components:{

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
            checkTagValuePeoplenum : ref([1]),
            checkTagValueService : ref([1]),
            checkTagValueScale : ref([1]),
            checkTagValueRegion : ref([1]),
            checkTagValueCate : ref([1]),
            checkTagValueState : ref([1]),


            STYLE_UNCHECKED_PROPS :{
                theme: 'default',
                variant: 'outline',
            },

            // 搜索所用的data
            formData:{
                time_range: ['',''],
                start_time : '',
                end_time : '',
                project_id : '',
                project_name: '',
            },

            // state = 1表示进行中，0表示已结束,2表示未开始
            project:[
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

            current_page:[],
        }
    },
    methods:{
        // 日期选择器变化时触发
        onChange(e){
            console.log(e);
            this.formData.start_time = e[0]
            this.formData.end_time = e[1]
            this.formData.time_range = e
        },

        onReset(){
            console.log('reset');
            this.formData.start_time = ''
            this.formData.end_time = ''
            this.formData.time_range = ['','']
        },

        chunkArray(originalArray){
            var chunkedArray = [];
            for (let i = 0; i < originalArray.length; i += 12) {
                const chunk = originalArray.slice(i, i + 12);
                chunkedArray.push(chunk);
            }
            return chunkedArray
        },

        // 分页变化时触发,分页大小固定12
        onChangePagination(e){
            let current = e.current
            // let previous = e.previous
            this.current_page = this.project_chunked[current-1]
        },

        initCurrentPage(){
            this.project_chunked = this.chunkArray(this.project)
            this.current_page = this.project_chunked[0]
        }



    },
    mounted(){
        this.initCurrentPage()
    },
}

</script>

<style scoped>
.cate-title{
    font-size: 14px;
    font-weight: bold;
}

</style>