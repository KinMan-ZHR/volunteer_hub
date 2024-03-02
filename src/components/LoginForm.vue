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

      <t-form-item>
        <t-button theme="primary" type="submit" block>登录</t-button>
      </t-form-item>
    </t-form>
  </div>
    </div>
</template>

<script>
export default {
    name: "LoginForm"
  }
</script>

<script setup>
import {onMounted, reactive, ref} from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next';
import {useUserStore} from "@/dataStore/userdata";
import {useRouter} from "vue-router";
// eslint-disable-next-line no-unused-vars
import {loginAPI} from "@/apis/usersHandler";
const userStore = useUserStore();
//获取路由实例
const router = useRouter();
//获取form实例
const formRef = ref(null);

const formData = reactive({
  username: '',
  password: '',
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
})
const onReset = () => {
  MessagePlugin.success('重置成功');
};

const onSubmit = async ({validateResult, firstError}) => {
  if (validateResult === true) {
    const {username, password} = formData;
    //const result = await loginAPI({username,password});
    const result = await loginAPI({username, password}).then(
        (response) => {
          if (response.data.code === 200) {
            console.log('Login Success: ', response.data);
            userStore.setUserInfo(response.data.coredata.user);
          }
        }
    );
  } else {
    console.log('Validate Errors: ', firstError, validateResult);
    await MessagePlugin.warning(firstError);
  }
  checkLoginState();
};
const checkLoginState=()=>{
  if(userStore.loginStatus === false){
    return
  }
  router.replace('/home')
}
onMounted(()=>{
  checkLoginState()
})
</script>