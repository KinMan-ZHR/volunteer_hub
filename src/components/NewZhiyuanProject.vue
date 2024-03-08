<template>
    <div>
        <t-form ref="form" :rules="FORM_RULES" :data="formData" :colon="true" @reset="onReset" @validate="onValidate">
            <t-form-item label="活动名称" name="project_name">
                <t-input v-model="formData.project_name" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="地点" name="project_location">
                <t-input v-model="formData.project_location" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="发布日期" name="project_pub_date">
                <t-date-picker v-model="formData.project_pub_date"/>
            </t-form-item>

            <t-form-item label="持续时间" name="project_time_range">
                <t-input v-model="formData.project_time_range" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="地区" name="project_region">
                <t-input v-model="formData.project_region" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="类型" name="project_type">
                <t-input v-model="formData.project_type" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="靶向" name="project_target">
                <t-input v-model="formData.project_target" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="状态" name="project_state">
                <t-input v-model="formData.project_state" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="范围" name="project_scope">
                <t-input v-model="formData.project_scope" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="团队大小" name="project_team_size">
                <t-input v-model="formData.project_team_size" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="封面URL" name="project_cover">
                <t-input v-model="formData.project_cover" placeholder="请输入图片链接" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="描述" name="project_description">
                <t-input v-model="formData.project_description" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="网站链接" name="project_address">
                <t-input v-model="formData.project_address" placeholder="请输入网站连接" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item>
            <t-space size="small">
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
            formData:[{
                project_name:'',
                project_location:'',
                project_pub_date:'',
                project_time_range:'',
                project_region:'',
                project_target:'',
                project_type:'',
                project_state:'',
                project_scope:'',
                project_team_size:'',
                project_cover:'',
                project_description:'',
                project_address:'',
                headline_text:'',
            }],
            FORM_RULES : { project_name: [{ required: true, message: '文章标题必填' }],
                            project_pub_date: [{ required: true, message: '发布时间必填' }],}
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