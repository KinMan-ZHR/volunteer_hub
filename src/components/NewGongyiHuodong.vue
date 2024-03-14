<template>
    <div>
        <t-form ref="form" :rules="FORM_RULES" :data="formData" :colon="true" @reset="onReset" @validate="onValidate">
            <t-form-item label="公益活动id" name="id">
            <t-input v-model="formData.id" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="活动标题" name="activity_title">
            <t-input v-model="formData.activity_title" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="活动时间" name="activity_time">
            <t-date-picker v-model="formData.activity_time"/>
            </t-form-item>

            <t-form-item label="活动来源" name="activity_source">
            <t-input v-model="formData.activity_source" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="活动图片" name="activity_image">
                <t-input v-model="formData.activity_image" placeholder="请输入图片链接" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="活动内容" name="activity_text">
                <t-textarea
                v-model="formData.activity_text"
                placeholder="请输入文案，高度可自适应"
                name="description"
                :autosize="true"
                />
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
                id:'',
                activity_source:'',
                activity_title:'',
                activity_time:'',
                activity_text:'',
                activity_image:'',
            }],
            FORM_RULES : { id: [{ required: true, message: '文章标题ID' }],
                            activity_title: [{ required: true, message: '文章标题必填' }],
                            activity_text: [{ required: true, message: '文章内容必填' }]}
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