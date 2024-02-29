<template>
    <div class="profile-detail-container">
        <!-- 标题区域 -->
        <div style="display: flex;">
            <p style="font-size: 16px; line-height: 32px;">个人信息</p>
            <div style="flex-grow: 1;"></div>
            <div>
                <t-button theme="primary" shape="round" variant="base">保存</t-button>
            </div>
        </div>

        <!-- 表单区域 -->
        <!-- <t-form
            ref="form"
            :data="formData"
            label-width="calc(6em + 24px)"
            layout="inline"
            scroll-to-first-error="smooth"
            @reset="onReset"
            @submit="onSubmit"
        >
            <t-form-item label="名字" name="name">
                <t-input v-model="formData.name"></t-input>
            </t-form-item>

            <t-form-item label="密码" name="password">
                <t-input v-model="formData.password" type="password"></t-input>
            </t-form-item>

            <t-form-item label="性别" name="gender">
                <t-select showArrow valueType="object" v-model="formData.gender">
                    <t-option key="male" label="男" value="male"/>
                    <t-option key="female" label="女" value="female"/>
                </t-select>
            </t-form-item>

            <t-form-item label="状态" name="state">
                <t-select showArrow valueType="object">
                    <t-option key="married" label="已婚" value="married"/>
                    <t-option key="unmarried" label="未婚" value="unmarried"/>
                    <t-option key="single" label="单身" value="single"/>
                </t-select>
            </t-form-item>

            <t-form-item label="出生年月" name="birthday">
                <t-date-picker />
            </t-form-item>

            <t-form-item label="电子邮件地址" name="email">
                <t-input-adornment append=".com">
                    <t-input placeholder="请输入内容" />
                </t-input-adornment>
            </t-form-item>

            <t-form-item label="电话号码" name="tel">
                <t-input type="tel" />
            </t-form-item>
        </t-form> -->

        <!-- 表单区域 -->
        <div style="margin-top: 17px;">
            <div class="form-row-container">
                <div class="form-row-item">
                    <p class="font-normal" style="margin-bottom: 5px;">名字</p>
                    <t-input></t-input>
                </div>
                <div style="width: 24px; height: 15px;"></div>
                <div class="form-row-item">
                    <p class="font-normal" style="margin-bottom: 5px;">性别</p>
                    <t-select showArrow valueType="object" v-model="formData.gender">
                        <t-option key="male" label="男" value="male"/>
                        <t-option key="female" label="女" value="female"/>
                    </t-select>
                </div>
            </div>

            <div class="form-row-container" style="margin-top: 15px;">
                <div class="form-row-item">
                    <p class="font-normal" style="margin-bottom: 5px;">状态</p>
                    <t-select showArrow valueType="object">
                        <t-option key="married" label="已婚" value="married"/>
                        <t-option key="unmarried" label="未婚" value="unmarried"/>
                        <t-option key="single" label="单身" value="single"/>
                    </t-select>
                </div>
                <div style="width: 24px;height: 15px;"></div>
                <div class="form-row-item">
                    <p class="font-normal" style="margin-bottom: 5px;">出生年月</p>
                    <t-date-picker />
                </div>
            </div>

            <div class="form-row-container" style="margin-top: 15px;">
                <div class="form-row-item">
                    <p class="font-normal" style="margin-bottom: 5px;">电子邮件地址</p>
                    <t-input-adornment append=".com">
                        <t-input placeholder="请输入内容" />
                    </t-input-adornment>
                </div>
                <div style="width: 24px;height: 15px;"></div>
                <div class="form-row-item">
                    <p class="font-normal" style="margin-bottom: 5px;">电话号码</p>
                    <t-input type="tel" />
                </div>
            </div>
        </div>


        <div style="font-size: 16px; line-height: 32px;margin-top: 23px;">个人地址</div>

        <div style="margin-top: 17px;">
            <div class="form-row-container" style="margin-top: 15px;">
                <div class="form-row-item">
                    <p class="font-normal" style="margin-bottom: 5px;">详细地址</p>
                    <t-input></t-input>
                </div>
                <div style="width: 24px;height: 15px;"></div>
            </div>
        </div>

        <div style="font-size: 16px; line-height: 32px;margin-top: 23px;">个人简介</div>

        <div style="margin-top: 17px;">
            <div class="form-row-container" style="margin-top: 15px;">
                <div class="form-row-item" style="width:100%;">
                    <p class="font-normal" style="margin-bottom: 5px;">说明</p>
                    <t-textarea
                        placeholder="请输入文案，高度可自适应，最小3行，最大5行；autosize={minRows: 3, maxRows: 5}"
                        name="description"
                        :autosize="{ minRows: 5, maxRows: 7 }"
                    />
                </div>
                <div style="width: 24px;height: 15px;"></div>
            </div>
        </div>



    </div>
</template>

<script>
// import { reactive } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';

export default{
    name: 'ProfileDetail',
    data(){
        return{
            formData:{
                name:'',
                password:'',
                gender:'male'
            }

        }
    },
    methods:{
        onReset(){
            MessagePlugin.success('重置成功');
        },

        onSubmit(validateResult, firstError ){
            if (validateResult === true) {
                MessagePlugin.success('提交成功');
            } else {
                console.log('Validate Errors: ', firstError, validateResult);
                MessagePlugin.warning(firstError);
            }
        }

    }
}


</script>

<style scoped>
.profile-detail-container{
    background-color: white;
    border-radius: 8px;
    flex-grow: 1;
    padding: 24px;
}


.form-row-container{
    display: flex;
    flex-direction: row;
}
.form-row-item{
    width: calc(50% - 12px);
}

/* 当屏幕宽度小于 768px 时，切换为一列布局 */
@media (max-width: 1080px) {
  .form-row-container{
    flex-direction: column;
  }
  .form-row-item{
    width: 100%;
  }
}


</style>