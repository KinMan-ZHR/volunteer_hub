<template>
    <div class="top-bar-container">
        <!-- 搜索框区域 -->
        <div style="width:20%;padding: 20px;">
            <div >
                <!-- <t-input placeholder="输入以搜索" clearable>
                <template #suffixIcon>
                    <search-icon :style="{ cursor: 'pointer' }" />
                </template>
                </t-input> -->

                <t-auto-complete
                    v-model="searchInput"
                    :options="options"
                    placeholder="请输入关键词搜索"
                    highlight-keyword
                    filterable
                    @select="onClickSearch"
                    >
                    <template #suffixIcon>
                        <search-icon/>
                    </template>
                </t-auto-complete>
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
            <div class="icon-container" @click="onClickGithub"><Icon name="logo-github" size="24" class="icon-hover"></Icon></div>
            <div style="width: 20px;"></div>
            <div class="icon-container" @click="onClickUser"><icon name="user" size="24" class="icon-hover"></icon></div>
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
            [],
            [],
            [],
            [],
            []
          ],
          top_bar_index:0,
          searchInput:'',
          options:[
            {
                label:'文明四川',
                value:'/wenming'
            },
            {
                label:'志愿项目',
                value:'/zhiyuan/zyprojectshall'
            },
            {
                label:'信息动态',
                value:'/zhiyuan/zyinformation'
            },
            {
                label:'宣传视频',
                value:'/zhiyuan/zyvideo'
            },
            {
                label:'活动地图',
                value:'/zhiyuan/zyactivitiesmap'
            },
            {
                label:'公益活动',
                value:'/activities/gyactivities'
            },
            {
                label:'公益广告',
                value:'/activities/gyadvertisement'
            },
            {
                label:'视频播放',
                value:'/videoplay'
            },
            {
                label:'信息发布',
                value:'/informationpub'
            },
            {
                label:'个人页',
                value:'/myprofile'
            }
        ]
        }
    },
    props:{
        props_data:{
            type:Object,
            required:true
        },
    },
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
            // console.log('tabValue',TabValue);
            router.push({name:this.top_bar_tabs[this.top_bar_index][TabValue-1].pathname})
        },

        onClickGithub(){
            window.open('https://github.com/LZY2275/volunteer_hub')
        },

        onClickUser(){
            this.$emit('onClickUser')
            router.push('/myprofile')
        },

        onClickSearch(){
            var link = this.findValueByLabel(this.searchInput)
            if(link !== null){
                router.push(link)
            }
        },

        findValueByLabel(label){
            var option = this.options.find((option) => option.label === label);
            return option ? option.value : null;
        },
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

.icon-container{
    /* padding: 8px; */
    cursor: pointer;
}

.icon-container :hover{
    color: var(--td-brand-color);
}



</style>
