<template>
    <div id="app">
      <div style="display: flex; height: 100vh; overflow-y: hidden;">
        <div style="border-right: 2px solid rgba(0,0,0,0.05);"><NavigationRegion @update="handleUpdateIndex"></NavigationRegion></div>
        <div style="flex-grow: 1;background-color: var(--td-gray-color-1);">
          <TopBar :props_data="props_data"></TopBar>
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
      }
    }
  }
  </script>