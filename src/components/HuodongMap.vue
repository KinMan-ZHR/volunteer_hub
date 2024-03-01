<template>
    <div style="width: 100%; display: flex;justify-content: center;;">
        <div id="province" style="width: 850px;height: 850px;z-index: 999;"></div>
    </div>
</template>

<script>
import * as echarts from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {MapChart} from "echarts/charts";
import $ from 'jquery';

echarts.use([MapChart]);

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
                },
                {
                    marker:[104.046,32.106],
                    title:'乡村留守儿童',
                    location:'四川省雅安市',
                    img:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'这是第二段描述',
                    state:0,
                },
                {
                    marker:[104.046,32.106],
                    title:'乡村留守儿童',
                    location:'四川省雅安市',
                    img:'https://tdesign.gtimg.com/site/source/card-demo.png',
                    description:'这是第二段描述',
                    state:2,
                },
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
                        transitionDuration: 0.2,
                        formatter: function(params) {
                            // console.log('params',params);
                            // return params.name + ': ' + params.value[2];
                            return params.data.title
                        }
                    },
                    // legend: {
                    //     data: province_geo_data[index].legend.map(function(item){
                    //         // console.log(item);
                    //         return{
                    //             name:item.name,
                    //             itemStyle:{
                    //                 color:item.color
                    //             }
                    //         }
                    //     }),
                    //     left: 'center',
                    //     bottom: 5,
                    // },
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
                    // series:[
                    //     {
                    //         name:'绿茶',
                    //         type:'scatter',
                    //         emphasis: {
                    //             focus: 'series'
                    //         },
                    //         coordinateSystem: 'geo',
                    //         data:province_geo_data[index].value.map(function(item){
                    //             if(item.type == '绿茶'){
                    //                 return{
                    //                     name:item.location_name,
                    //                     value: item.marker,
                    //                     itemStyle:{ color: item.color}
                    //                 }
                    //             }
                    //         }),
                    //         itemStyle:{
                    //             borderColor: '#ffffff', // 设置描边颜色
                    //             borderWidth: 2 // 设置描边宽度
                    //         },

                    //         symbolSize:10,

                    //     },
                    //     {
                    //         name:'白茶',
                    //         type:'scatter',
                    //         emphasis: {
                    //             focus: 'series'
                    //         },
                    //         coordinateSystem: 'geo',
                    //         data:province_geo_data[index].value.map(function(item){
                    //             if(item.type == '白茶'){
                    //                 return{
                    //                     name:item.location_name,
                    //                     value: item.marker,
                    //                     itemStyle:{ color: item.color}
                    //                 }
                    //             }
                    //         }),
                    //         itemStyle:{
                    //             borderColor: '#ffffff', // 设置描边颜色
                    //             borderWidth: 2 // 设置描边宽度
                    //         },

                    //         symbolSize:10,

                    //     },
                    //     {
                    //         name:'黄茶',
                    //         type:'scatter',
                    //         emphasis: {
                    //             focus: 'series'
                    //         },
                    //         coordinateSystem: 'geo',
                    //         data:province_geo_data[index].value.map(function(item){
                    //             if(item.type == '黄茶'){
                    //                 return{
                    //                     name:item.location_name,
                    //                     value: item.marker,
                    //                     itemStyle:{ color: item.color}
                    //                 }
                    //             }
                    //         }),
                    //         itemStyle:{
                    //             borderColor: '#ffffff', // 设置描边颜色
                    //             borderWidth: 2 // 设置描边宽度
                    //         },

                    //         symbolSize:10,

                    //     },
                    //     {
                    //         name:'乌龙茶',
                    //         type:'scatter',
                    //         emphasis: {
                    //             focus: 'series'
                    //         },
                    //         coordinateSystem: 'geo',
                    //         data:province_geo_data[index].value.map(function(item){
                    //             if(item.type == '乌龙茶'){
                    //                 return{
                    //                     name:item.location_name,
                    //                     value: item.marker,
                    //                     itemStyle:{ color: item.color}
                    //                 }
                    //             }
                    //         }),
                    //         itemStyle:{
                    //             borderColor: '#ffffff', // 设置描边颜色
                    //             borderWidth: 2 // 设置描边宽度
                    //         },

                    //         symbolSize:10,

                    //     },
                    //     {
                    //         name:'红茶',
                    //         type:'scatter',
                    //         emphasis: {
                    //             focus: 'series'
                    //         },
                    //         coordinateSystem: 'geo',
                    //         data:province_geo_data[index].value.map(function(item){
                    //             if(item.type == '红茶'){
                    //                 return{
                    //                     name:item.location_name,
                    //                     value: item.marker,
                    //                     itemStyle:{ color: item.color}
                    //                 }
                    //             }
                    //         }),
                    //         itemStyle:{
                    //             borderColor: '#ffffff', // 设置描边颜色
                    //             borderWidth: 2 // 设置描边宽度
                    //         },

                    //         symbolSize:10,

                    //     },
                    //     {
                    //         name:'黑茶',
                    //         type:'scatter',
                    //         emphasis: {
                    //             focus: 'series'
                    //         },
                    //         coordinateSystem: 'geo',
                    //         data:province_geo_data[index].value.map(function(item){
                    //             if(item.type == '黑茶'){
                    //                 return{
                    //                     name:item.location_name,
                    //                     value: item.marker,
                    //                     itemStyle:{ color: item.color}
                    //                 }
                    //             }
                    //         }),
                    //         itemStyle:{
                    //             borderColor: '#ffffff', // 设置描边颜色
                    //             borderWidth: 2 // 设置描边宽度
                    //         },

                    //         symbolSize:10,
                    //     },

                    // ]
                }
                myChart.setOption(option);
            })


        }
    },
}

</script>

<style scoped>

</style>