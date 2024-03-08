<template>
    <div>
        <t-form ref="form" :rules="FORM_RULES" :data="formData" :colon="true" @reset="onReset" @validate="onValidate">
            <t-form-item label="道德模范姓名" name="model_name">
                <t-input v-model="formData.model_name" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>
            
            <t-form-item label="文章标题" name="model_title">
                <t-input v-model="formData.model_title" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="图片URL" name="model_image">
                <t-input v-model="formData.model_image" placeholder="请输入图片链接" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="发布时间" name="model_time">
                <t-date-picker v-model="formData.model_time"/>
            </t-form-item>

            <t-form-item label="文章来源" name="model_source">
                <t-input v-model="formData.model_source" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="文章内容" name="model_text">
                <t-textarea
                v-model="formData.model_text"
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
                model_name:'',
                model_title:'',
                model_image:'',
                model_time:'',
                model_source:'',
                model_text:''
            }],
            FORM_RULES : { model_name: [{ required: true, message: '道德好人姓名必填' }],
                            model_title: [{ required: true, message: '文章标题必填' }],
                            model_time: [{ required: true, message: '发布时间必填' }],
                            model_text: [{ required: true, message: '文章内容必填' }]}
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