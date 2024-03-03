<template>
    <div style="width: 100%; display: flex;justify-content: center;margin-top: 15px;">
        <div id="province" style="width: 850px;height: 850px;z-index: 999;"></div>
    </div>
</template>

<script>
import * as echarts from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {MapChart,ScatterChart} from "echarts/charts";
import { LegendComponent, TitleComponent,TooltipComponent } from 'echarts/components';
import MyTooltip from './MyTooltip.vue';
import { createApp } from "vue";

import $ from 'jquery';

echarts.use([MapChart,ScatterChart ]);
echarts.use([TitleComponent,LegendComponent,TooltipComponent ]);

export default{
    data(){
        return{
            province_geo_data:[
                {
                    marker:[103.046,30.106],
                    title:'看望乡村留守儿童',
                    location:'四川省雅安市蒙顶山',
                    img:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'这是一段描述',
                    state:1,
                    link:'http://sc.chinavolunteer.mca.gov.cn/subsite/sichuan/projectInfo/b0f1f7d451474e07bc5ddb10070f1dc5/511323000000000000'
                },
                {
                    marker:[104.046,32.106],
                    title:'乡村留守儿童',
                    location:'四川省雅安市',
                    img:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'这是第二段描述',
                    state:0,
                    link:'http://sc.chinavolunteer.mca.gov.cn/subsite/sichuan/projectInfo/b0f1f7d451474e07bc5ddb10070f1dc5/511323000000000000'
                },
                {
                    marker:[104.046,33.106],
                    title:'留守儿童',
                    location:'四川省雅安市',
                    img:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'这是第二段描述',
                    state:2,
                    link:'http://sc.chinavolunteer.mca.gov.cn/subsite/sichuan/projectInfo/b0f1f7d451474e07bc5ddb10070f1dc5/511323000000000000'
                },
            ],
            legend:[
                {name:'进行中',color:'#48c79c'},
                {name:'已结项',color:'#a6a6a6'},
                {name:'未开始',color:'#f2995f'}
            ],
            map_path:'https://geo.datav.aliyun.com/areas_v3/bound/510000_full.json'

        }
    },
    mounted(){
        this.createProvinceChart()
    },
    methods:{
        createProvinceChart(){
            var chartDom = document.getElementById('province');
            echarts.use(CanvasRenderer)
            var myChart = echarts.init(chartDom);


            var path = this.map_path;
            var option;

            myChart.showLoading({
                text : '加载中...',  //加载时候的文本
                color:'#32846e',      //加载时候小圆圈的颜色
                // textColor:'white',  //加载时候文本颜色
                maskColor:'#08204200' //加载时候的背景颜色
            });

            var _this = this

            $.get(path,function(usaJson){
                // console.log(usaJson);
                myChart.hideLoading();
                echarts.registerMap('SC', usaJson);
                option = {
                    title: {
                        text:"四川省地图",
                        // subtext: 'Data from www.census.gov',
                        left: 'center'
                    },
                    tooltip: {
                        show:true,
                        trigger: 'item',
                        showDelay: 0,
                        enterable: true,
                        hideDelay: 200,
                        transitionDuration: 0.2,
                        formatter: function(params) {
                            const title = params.data.name
                            const img = params.data.img
                            const state = params.data.state
                            const link = params.data.link
                            // 容器，之后会把组件渲染在容器中
                            const div = document.createElement('div')
                            // vue文件直接用不行，得创建app实例,同时提供组件的props
                            const app = createApp(MyTooltip, {title, img, state, link})
                            // 将app实例挂载到dom上
                            app.mount(div)
                            // 将含有组件实例的dom返回给echats
                            return div

                        },

                        position: (point) => {
                            let pointX = point[0];
                            let pointY = point[1];
                            return [pointX, pointY];
                        },
                    },
                    legend: {
                        data: _this.legend.map(function(item){
                            // console.log(item);
                            return{
                                name:item.name,
                                itemStyle:{
                                    color:item.color
                                }
                            }
                        }),
                        left: 'center',
                        bottom: 5,
                    },
                    geo:{
                        map:'SC',
                        itemStyle: {
                            areaColor: {
                                type: 'linear', // 设置渐变色
                                x: 0,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [
                                {
                                    offset: 0,
                                    color: '#5eb139' // 起始颜色
                                },
                                {
                                    offset: 1,
                                    color: '#2d8241' // 结束颜色
                                }
                                ]
                            },// 地图区域的颜色
                            borderColor: '#ffecb2', // 地图区域的边框颜色
                            borderWidth: 0.5 // 地图区域的边框宽度
                        },
                        emphasis: {  // 高亮状态下的样式
                            itemStyle:{
                                areaColor: {
                                type: 'linear', // 设置渐变色
                                x: 0,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [
                                {
                                    offset: 0,
                                    color: '#5eb139' // 起始颜色
                                },
                                {
                                    offset: 1,
                                    color: '#2d8241' // 结束颜色
                                }
                                ]
                            },// 地图区域的颜色
                            borderColor: '#ffecb2', // 地图区域的边框颜色
                            borderWidth: 0.5 // 地图区域的边框宽度
                            }

                        }
                    },
                    series:[

                        {
                            name:'进行中',
                            type:'scatter',
                            emphasis: {
                                focus: 'series'
                            },
                            coordinateSystem: 'geo',
                            data:_this.province_geo_data.map(function(item){
                                if(item.state == 1){
                                    return{
                                        name:item.title,
                                        value: item.marker,
                                        img:item.img,
                                        description:item.description,
                                        state:item.state,
                                        location:item.location,
                                        link:item.link,
                                        itemStyle:{ color: _this.legend[0].color}
                                    }
                                }
                            }),
                            itemStyle:{
                                borderColor: '#ffffff', // 设置描边颜色
                                borderWidth: 2 // 设置描边宽度
                            },
                            symbolSize:10,

                        },
                        {
                            name:'已结项',
                            type:'scatter',
                            emphasis: {
                                focus: 'series'
                            },
                            coordinateSystem: 'geo',
                            data:_this.province_geo_data.map(function(item){
                                if(item.state == 0){
                                    return{
                                        name:item.title,
                                        value: item.marker,
                                        img:item.img,
                                        description:item.description,
                                        state:item.state,
                                        location:item.location,
                                        link:item.link,
                                        itemStyle:{ color: _this.legend[1].color}
                                    }
                                }
                            }),
                            itemStyle:{
                                borderColor: '#ffffff', // 设置描边颜色
                                borderWidth: 2 // 设置描边宽度
                            },
                            symbolSize:10,

                        },
                        {
                            name:'未开始',
                            type:'scatter',
                            emphasis: {
                                focus: 'series'
                            },
                            coordinateSystem: 'geo',
                            data:_this.province_geo_data.map(function(item){
                                if(item.state == 2){
                                    return{
                                        name:item.title,
                                        value: item.marker,
                                        img:item.img,
                                        description:item.description,
                                        state:item.state,
                                        location:item.location,
                                        link:item.link,
                                        itemStyle:{ color: _this.legend[2].color}
                                    }
                                }
                            }),
                            itemStyle:{
                                borderColor: '#ffffff', // 设置描边颜色
                                borderWidth: 2 // 设置描边宽度
                            },
                            symbolSize:10,

                        },

                    ]
                }
                myChart.setOption(option);
            })


        }
    },
}

</script>

<style scoped>

</style>