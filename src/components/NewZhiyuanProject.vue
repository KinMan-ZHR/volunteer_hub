<template>
    <div>
        <t-form ref="form" :rules="FORM_RULES" :data="formData" :colon="true" @reset="onReset" @validate="onValidate">
            <t-form-item label="活动名称" name="name">
                <t-input v-model="formData.name" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="地点" name="location">
                <t-input v-model="formData.location" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="发布日期" name="pub_date">
                <t-date-picker v-model="formData.pub_date"/>
            </t-form-item>

            <t-form-item label="持续时间" name="time_range">
                <t-date-range-picker v-model="formData.time_range" placeholder="请输入内容"></t-date-range-picker>
            </t-form-item>

            <t-form-item label="地区" name="region">
                <t-select v-model="formData.region" placeholder="请输入内容" @enter="onEnter" clearable autoWidth showArrow :multiple="true" max="2">
                    <t-option label="全部" value="1" disabled />
                    <t-option label="成都市" value="2" />
                    <t-option label="自贡市" value="3" />
                    <t-option label="攀枝花市" value="4" />
                    <t-option label="泸州市" value="5" />
                    <t-option label="德阳市" value="6" />
                    <t-option label="绵阳市" value="7" />
                    <t-option label="广元市" value="8" />
                    <t-option label="遂宁市" value="9" />
                    <t-option label="内江市" value="10" />
                    <t-option label="乐山市" value="11" />
                    <t-option label="南充市" value="12" />
                    <t-option label="眉山市" value="13" />
                    <t-option label="宜宾市" value="14" />
                    <t-option label="广安市" value="15" />
                    <t-option label="达州市" value="16" />
                    <t-option label="雅安市" value="17" />
                    <t-option label="巴中市" value="18" />
                    <t-option label="资阳市" value="19" />
                    <t-option label="阿坝藏族羌族自治州" value="20" />
                    <t-option label="甘孜藏族自治州" value="21" />
                    <t-option label="凉山彝族自治州" value="22" />
                </t-select>
            </t-form-item>

            <t-form-item label="类型" name="type">
                <t-select v-model="formData.type" placeholder="请输入内容" @enter="onEnter" clearable autoWidth showArrow :multiple="true" >
                    <t-option label="全部" value="1" disabled />
                    <t-option label="社区服务" value="3" />
                    <t-option label="扶贫减贫" value="4" />
                    <t-option label="支教助学" value="5" />
                    <t-option label="卫生健康" value="6" />
                    <t-option label="法律服务" value="7" />
                    <t-option label="环境保护" value="8" />
                    <t-option label="科技科普" value="9" />
                    <t-option label="文化艺术" value="10" />
                    <t-option label="平安综治" value="11" />
                    <t-option label="文明风尚" value="12" />
                    <t-option label="交通引导" value="13" />
                    <t-option label="志愿消防" value="14" />
                    <t-option label="应急救援" value="15" />
                    <t-option label="禁毒宣传" value="16" />
                    <t-option label="体育健身" value="17" />
                    <t-option label="旅游服务" value="18" />
                    <t-option label="关爱特殊群体" value="19" />
                    <t-option label="大型活动" value="20" />
                    <t-option label="海外志愿服务" value="21" />
                    <t-option label="税收服务" value="22" />
                    <t-option label="疫情防控" value="23" />
                    <t-option label="其他" value="2" />
                </t-select>
            </t-form-item>

            <t-form-item label="靶向" name="target">
                <t-select v-model="formData.target" placeholder="请输入内容" @enter="onEnter" clearable autoWidth showArrow :multiple="true">
                    <t-option label="全部" value="1" disabled />
                    <t-option label="儿童" value="2" />
                    <t-option label="妇女" value="3" />
                    <t-option label="老年人" value="4" />
                    <t-option label="残障人士" value="5" />
                    <t-option label="优抚对象" value="6" />
                    <t-option label="贫困家庭" value="7" />
                    <t-option label="特殊群体" value="8" />
                    <t-option label="病患者" value="9"/>
                    <t-option label="农村居民" value="10" />
                    <t-option label="城镇居民" value="11" />
                    <t-option label="社会公众" value="12" />
                    <t-option label="纳税人缴费人" value="13" />
                    <t-option label="其他" value="14" />
                </t-select>
            </t-form-item>

            <t-form-item label="状态" name="state">
                <t-select v-model="formData.state" placeholder="请输入内容" @enter="onEnter" clearable autoWidth showArrow :multiple="true" max="1">
                    <t-option label="待启动" value="2" />
                    <t-option label="运行中" value="3" />
                    <t-option label="已结项" value="4" />
                </t-select>
            </t-form-item>

            <t-form-item label="范围" name="scale">
                <t-select v-model="formData.scale" placeholder="请输入内容" @enter="onEnter" clearable autoWidth showArrow :multiple="true">
                    <t-option label="全部" value="1" disabled />
                    <t-option label="公开招募" value="2" />
                    <t-option label="指定支援队伍招募" value="3" />
                    <t-option label="设定免审密码招募" value="4" />
                </t-select>
            </t-form-item>

            <t-form-item label="团队大小" name="size">
                <t-select v-model="formData.size" placeholder="请输入内容" @enter="onEnter" clearable="false" autoWidth showArrow :multiple="true">
                    <t-option label="全部" value="1" disabled/>
                    <t-option label="1-100" value="2" />
                    <t-option label="101-200" value="3" />
                    <t-option label="201-500" value="4" />
                    <t-option label="501-1000" value="5" />
                    <t-option label="1000以上" value="6" />
                </t-select>
            </t-form-item>

            <t-form-item label="封面URL" name="cover">
                <t-input v-model="formData.cover" placeholder="请输入图片链接" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="描述" name="description">
                <t-input v-model="formData.description" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="网站链接" name="address">
                <t-input v-model="formData.address" placeholder="请输入网站连接" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="纬度-经度" name="marker">
                <t-range-input v-model="formData.marker"></t-range-input>
            </t-form-item>

            <t-form-item>
            <t-space size="smamarker">
                <t-button theme="primary" type="submit">提交</t-button>
                <t-button theme="default" variant="base" type="reset">重置</t-button>
                <!-- 下方示例代码，有效，勿删 -->
                <!--<t-button theme="default" @click="submitForm">实例方法提交</t-button>-->
                <!--<t-button theme="default" variant="base" @click="resetForm">实例方法重置</t-button>-->
                <!--<t-button theme="default" variant="base" @click="validateOnly">仅校验</t-button>-->
            </t-space>
            </t-form-item>
        </t-form>
    </div>
</template>

<script>

export default{
    name:'NewToutiao',
    data(){
        return{
            formData:{
                name:'',
                location:'',
                pub_date:'',
                time_range:['2023-01-01','2023-06-01'],
                region:['1'],
                target:['1'],
                type:['1'],
                state:['2'],
                scale:['1'],
                size:['1'],
                cover:'',
                description:'',
                address:'',
                marker:[12,14],
            },
            FORM_RULES : { name: [{ required: true, message: '该项必填' }],
                            location:[{ required: true, message: '该项必填' }],
                            pub_date:[{ required: true, message: '该项必填' }],
                            time_range:[{ required: true, message: '该项必填' }],
                            region:[{ required: true, message: '该项必填' }],
                            target:[{ required: true, message: '该项必填' }],
                            type:[{ required: true, message: '该项必填' }],
                            state:[{ required: true, message: '该项必填' }],
                            scale:[{ required: true, message: '该项必填' }],
                            size:[{ required: true, message: '该项必填' }],
                            cover:[{ required: true, message: '该项必填' }],
                            description:[{ required: true, message: '该项必填' }],
                            address:[{ required: true, message: '该项必填' }],
                            marker:[{ required: true, message: '该项必填' }],

                        }
        }
    },
    methods:{
        submitData(){
            // TODO: 上传formData到服务器
            console.log('submit data:', this.formData);

        },

        onValidate(result){
            console.log('validate result:', result);
            if(result.validateResult === true){
                // 校验通过
                this.submitData()
            }else{
                // 校验不通过
                console.log('校验不通过')
            }
        },
    }
}

</script>