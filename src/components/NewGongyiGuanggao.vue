<template>
    <div>
        <t-form ref="form" :rules="FORM_RULES" :data="formData" :colon="true" @reset="onReset" @validate="onValidate">
            <t-form-item label="公益广告id" name="id">
            <t-input v-model="formData.id" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="广告标题" name="adpic_title">
            <t-input v-model="formData.adpic_title" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="广告时间" name="adpic_time">
            <t-date-picker v-model="formData.adpic_time"/>
            </t-form-item>

            <t-form-item label="广告来源" name="adpic_source">
            <t-input v-model="formData.adpic_source" placeholder="请输入内容" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="广告图片" name="adpic_image">
                <t-input v-model="formData.adpic_image" placeholder="请输入图片链接" @enter="onEnter"></t-input>
            </t-form-item>

            <t-form-item label="广告内容" name="adpic_text">
                <t-textarea
                v-model="formData.adpic_text"
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
                adpic_source:'',
                adpic_title:'',
                adpic_time:'',
                adpic_text:'',
                adpic_image:'',
            }],
            FORM_RULES : { id: [{ required: true, message: '文章标题ID' }],
                            adpic_title: [{ required: true, message: '文章标题必填' }],
                            adpic_text: [{ required: true, message: '文章内容必填' }]}
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