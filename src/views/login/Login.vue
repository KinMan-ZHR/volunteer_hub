<template>
  <div class="login-background">
    <div class="login-logo">
      <img src="../../assets/img/logo@3x.png" alt="" width="200">
    </div>
    <div class="login-form-container">
      <div style="padding: 20px 20px 0 20px;"><p style="font-size: 18px;text-align: left;">登录</p></div>

      <div class="sub-title">
          <p class="tip">{{ type == 'register' ? '已有账号?' : '没有账号吗?' }}</p>
          <p class="tip" @click="switchType(type == 'register' ? 'login' : 'register')">
            {{ type == 'register' ? '登录' : '注册新账号' }}
          </p>
      </div>

      <div style="padding: 20px 20px 40px 20px;">
        <LoginForm v-if="type === 'login'" ></LoginForm>
        <RegisterForm v-if="type === 'register'"></RegisterForm>
      </div>
    </div>
  </div>

</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue'

export default{
  name:'LoginView',
  data(){
    return {
      type: 'login',
    };
  },
  components:{
    LoginForm,
    RegisterForm
  },
  methods: {
    switchType(val) {
      this.type = val;
    },
  },
}


</script>

<style scoped>
.login-background{
  width: 100vw;
  height: 100vh;
  background: url('../../assets/img/login-background.jpeg') no-repeat 50%;
}

.login-logo{
  position: absolute;
  top: 12px;
  left: 12px;
}

.login-form-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 2px 6px  rgba(0, 0, 0, 0.1);
}

.sub-title {
    margin-top: 16px;

    .tip {
      display: inline-block;
      margin-right: 8px;
      font-size: 14px;

      &:first-child {
        color: var(--td-text-color-secondary);
      }

      &:last-child {
        color: var(--td-text-color-primary);
        cursor: pointer;
      }
    }
  }

</style>
