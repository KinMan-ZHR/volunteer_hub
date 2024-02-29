<template>
    <div class="top-bar-container">
        <!-- 搜索框区域 -->
        <div style="width:20%;padding: 20px;">
            <div >
                <t-input placeholder="输入以搜索" clearable>
                <template #suffixIcon>
                    <search-icon :style="{ cursor: 'pointer' }" />
                </template>
                </t-input>
            </div>
        </div>
        <!-- 中间的选项卡区域 -->
        <div style="flex-grow: 1;"></div>
        <div style="padding-right: 40px;display: flex;align-items: center;" v-if="showTopBarTabs">
            <t-tabs :default-value="1" @change="onChangeTabs">
                <t-tab-panel v-for="(item,index) in top_bar_tabs[top_bar_index]" :key="index" :value="index+1" :label="item.session" ></t-tab-panel>
            </t-tabs>
        </div>
        <!-- 末尾的图标区域 -->
        <div style="display: flex;align-items: center;padding: 24px;">
            <Icon name="logo-github" size="24"></Icon>
            <div style="width: 20px;"></div>
            <icon name="user" size="24"></icon>
        </div>
    </div>
</template>

<script>
import router from '@/router'
import {SearchIcon} from 'tdesign-icons-vue-next'
import { Icon } from 'tdesign-icons-vue-next'

export default {
    name: 'TopBar',
    components:{
        SearchIcon,
        Icon
    },
    data(){
        return{
            top_bar_tabs:[
            [],
            [
                {session:'志愿项目',pathname:'zyprojectshall'},
                {session:'信息动态',pathname:'zyinformation'},
                {session:'宣传视频',pathname:'zyvideo'},
                {session:'活动地图',pathname:'zyactivitiesmap'},
            ],
            // ['志愿项目','信息动态','宣传视频','活动地图'],
            [
                {session:'公益活动',pathname:'gyactivities'},
                {session:'公益广告',pathname:'gyadvertisement'},
            ],
            // ['公益活动','公益广告'],
            [],
            [],
            []
          ],
          top_bar_index:0
        }
    },
    props:["props_data"],
    computed: {
        showTopBarTabs() {
            // console.log(this.props_data.top_bar_index);
            var i = this.props_data.top_bar_index
            this.updateIndex(i)
            return this.top_bar_tabs[this.props_data.top_bar_index].length > 0;
        }
    },
    methods:{
        updateIndex(i){
            this.top_bar_index = i
        },
        onChangeTabs(TabValue){
            // console.log(TabValue);
            router.push({name:this.top_bar_tabs[this.top_bar_index][TabValue-1].pathname})
        }
    }

}

</script>

<style scoped>
.top-bar-container{
    background-color: white;
    /* border-left: 1px solid black; */
    width: 100%;
    display: flex;
    border-bottom: 2px solid rgba(0,0,0,0.05);;
}

</style>
