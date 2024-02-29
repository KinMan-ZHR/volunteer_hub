<template>
    <div>
        <div style="width: 320px">
    <t-form ref="formRef" :data="formData" :rules=rules :colon="true" :label-width="0" @reset="onReset" @submit="onSubmit">
      <t-form-item name="username">
        <t-input v-model="formData.username" clearable placeholder="请输入账户名">
          <template #prefix-icon>
            <desktop-icon />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="password">
        <t-input v-model="formData.password" type="password" clearable placeholder="请输入密码">
          <template #prefix-icon>
            <lock-on-icon />
          </template>
        </t-input>
      </t-form-item>
      <t-form-item name="confirmPassword">
        <t-input v-model="formData.confirmPassword" type="password" clearable placeholder="请确认密码">
          <template #prefix-icon>
            <lock-on-icon />
          </template>
        </t-input>
      </t-form-item>
      <t-form-item name="email">
        <t-input v-model="formData.email" type="text" clearable placeholder="请输入邮箱">
          <template #prefix-icon>
            <lock-on-icon />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item>
        <t-button theme="primary" type="submit" block>注册新账号</t-button>
      </t-form-item>
    </t-form>
  </div>
    </div>
</template>

<script>
export default {
    name: "RegisterForm"
  }
</script>

<script setup>
import {reactive, ref} from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next';
import {registerAPI} from "@/apis/usersHandler";
import {defineEmits} from "vue";
const emit = defineEmits(
    ['switchType']

);
//获取form实例
const formRef = ref(null);
const formData = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
});
const rules = ref({
  username: [
    { required: true, message: 'Please enter your username', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please enter your password', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: 'Please confirm your password', trigger: 'blur' },
    // { validator: validatePasswordConfirm, trigger: 'blur' },
    {
      validator(value) {
        console.log('confirmPassword:', formData.confirmPassword);
        if (formData.confirmPassword === formData.password) {
          return true;
        } else {
          return new Error('两次输入的密码不一致');
        }
      },
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: 'Please enter your email', trigger: 'blur' },
      //todo 利用正则表达式校验邮箱格式
    //{ type: 'email', message: 'Invalid email format', trigger: 'blur' },
    {
      validator(value) {
        const pattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        if (pattern.test(value)) {
          return true;
        } else {
          return new Error('邮箱格式不正确');
        }
      },
      trigger: 'blur'
    },
  ],
})

const onReset = () => {
  MessagePlugin.success('重置成功');
};

const onSubmit = async ({ validateResult, firstError }) => {
  if (validateResult === true) {
    await registerAPI({
      username: formData.username,
      password: formData.password,
      email: formData.email,
    })
        .then(response => {
          if (response.data.code === 200) {
            //todo 这里执行父组件中的方法 switchType();
            emit('switchType');
          }
        })
        .catch(error => {
          console.log('Register Error: ', error);
        });
  } else {
    console.log('Validate Errors: ', firstError, validateResult);
    await MessagePlugin.warning(firstError);
  }
};
</script>