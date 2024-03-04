<template>
    <t-menu theme="light" defaultValue="item1" :collapsed="collapsed" @change="changeHandler" height="550px" v-model:value="active_value">
      <div><img :width="collapsed ? 50 : 200" :src="iconUrl" alt="logo" /></div>
      <t-menu-group title="内容展示区">
        <t-menu-item value="item1" href="/#/wenming" >
          <template #icon>
            <icon name="city-15" />
          </template>
          <router-link to="/wenming">文明四川</router-link>
        </t-menu-item>
        <t-menu-item value="item2" href="/#/zhiyuan" >
          <template #icon>
            <icon name="heart" />
          </template>
          <router-link to="/zhiyuan">志愿四川</router-link>
        </t-menu-item>
        <t-menu-item value="item3" href="/#/activities" >
          <template #icon>
            <icon name="sticky-note" />
          </template>
          <router-link to="/activities">活动广告</router-link>
        </t-menu-item>
      </t-menu-group>
      <t-menu-group title="视频展示区">
        <t-menu-item value="item4" href="/#/videoplay" >
          <template #icon>
            <icon name="film-1" />
          </template>
          视频播放
        </t-menu-item>
        <t-menu-item value="item5" href="/#/informationpub">
          <template #icon>
            <icon name="edit-1" />
          </template>
          信息发布
        </t-menu-item>
      </t-menu-group>
      <t-menu-group title="系统管理区">
        <t-menu-item value="item8"  href="/#/usermanage">
          <template #icon>
            <icon name="user-list" />
          </template>
          管理用户
        </t-menu-item>
        <t-menu-item value="item9" href="/#/datamanage">
          <template #icon>
            <icon name="data-base" />
          </template>
          数据管理
        </t-menu-item>
        <t-menu-item value="item10" href="/#/systeminfo">
          <template #icon>
            <icon name="system-2" />
          </template>
          系统信息
        </t-menu-item>
      </t-menu-group>
      <t-menu-group title="更多">
        <t-menu-item value="item6" href="/#/myprofile">
          <template #icon>
            <icon name="user" />
          </template>
          个人页
        </t-menu-item>
        <t-menu-item value="item7" >
          <template #icon>
            <icon name="login" />
          </template>
          登录页
        </t-menu-item>
      </t-menu-group>
      <template #operations>
        <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click="changeCollapsed">
          <icon name="view-list" />
        </t-button>
      </template>
    </t-menu>
  </template>

<script>
import router from '@/router'
import { Icon } from 'tdesign-icons-vue-next'
import { Menu as TMenu } from 'tdesign-vue-next'
import { MenuGroup as TMenuGroup } from 'tdesign-vue-next'
import { MenuItem as TMenuItem } from 'tdesign-vue-next'
import {computed, ref} from "vue";
import {useUserStore} from "@/dataStore/userdata";

export default {
  name: 'NavigationRegion',
  components: {
    Icon,
    TMenu,
    TMenuGroup,
    TMenuItem,
  },
  props: ['handleUpdateIndex'],
  data(){
    return{

    }
  },

  setup (props) {
    const active_value = ref('item1')
    const collapsed = ref(false)
    const iconUrl = computed(() => collapsed.value ? require('../assets/img/logo_1@3x.png') : require('../assets/img/logo@3x.png'))
    function changeHandler (active) {
      // console.log('change', active)
      active_value.value = active
      // 点击退出登录时
      if(active == 'item7'){
        onClickToLogin()
        return;
      }
      // 调用父组件的方法handleUpdateIndex传入参数active.match(/\d+/)[0]
      props.handleUpdateIndex(active.match(/\d+/)[0]);
    }


    function changeCollapsed () {
      collapsed.value = !collapsed.value
    }
    const userStore = useUserStore();
    const onClickToLogin=()=>{
      // console.log('login');
      userStore.clearUserInfo()
      router.replace({name:'login'})
    }

    return {
      collapsed,
      iconUrl,
      active_value,
      changeHandler,
      changeCollapsed,
      onClickToLogin,
    }
  }
}
</script>

<style scoped>

</style>