<template>
    <div id="app">
      <div style="display: flex; ">
        <div style="border-right: 2px solid rgba(0,0,0,0.05); height: 100vh;position: sticky;top: 0; ">
          <NavigationRegion ref="child_navigation" :handle-update-index="handleUpdateIndex" ></NavigationRegion>
        </div>
        <div style="flex-grow: 1;background-color: var(--td-gray-color-1);">
          <TopBar :props_data="props_data" style="position: sticky;top: 0;z-index: 999;" @onClickUser="handleClickUser"></TopBar>
          <router-view>
            <router-view></router-view>
          </router-view>
        </div>
      </div>
    </div>
  </template>

  <script>
  import NavigationRegion from '../../components/NavigationRegion.vue'
  import TopBar from '@/components/TopBar.vue';


  export default {
    name: 'HomeView',
    components: {
      NavigationRegion,
      TopBar
    },
    data(){
      return{
        props_data:{
          top_bar_index:0
        }

      }
    },
    methods:{
      handleUpdateIndex(index){
        console.log(index);
        this.props_data.top_bar_index = index-1
      },

      handleClickUser(){
        // 使navigationregion跳转到个人页
        console.log('父组件 handle');
        this.handleUpdateActiveValue()
      },

      handleUpdateActiveValue(){
        // 在父组件中处理子组件传递的 active_value
        this.$refs.child_navigation.active_value = 'item6';
      }
    }
  }
  </script>