<template>
    <div style="display: flex;justify-content: center; width: 100%; background-color: #fff;">
        <div style="width: 1280px;">
            <div class="title">{{ title }}</div>
            <div class="time">
                <div class="bar"></div>
                <div style="margin-left: 20px;color: #999999;">时间：{{ time }}, 来源：{{ source }}</div>
            </div>
            <div style="margin-top: 20px;">
                <!-- <p class="text">{{ text }}</p>
                <p></p> -->
                <div v-for="(paragraph, index) in text.split('\n')" :key="index" class="text">
                    {{ paragraph }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'WenZhang',
    data(){
        return{
            title:'描绘新的蓝图：深刻领悟高质量发展这个硬道理——2024年全国两会前瞻（中）',
            time:'2024-03-01',
            source:'新华社',
            text:'必须把坚持高质量发展作为新时代的硬道理”——习近平总书记在去年中央经济工作会议上深刻总结新时代做好经济工作的“五个必须”规律性认识，其中这个“硬道理”居于首位。\n今年是新中国成立75周年，是实现“十四五”规划目标任务的关键一年。在这个重要年份召开的全国两会，如何聚焦高质量发展这个硬道理，进一步擘画出推进高质量发展的路线图、施工图，备受各方关注。'
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.title{
    font-size: 30px;
    font-weight: bold;
    margin-top: 25px;
}
.time{
    display: flex;
    margin-top: 25px;
    font-size: 15px;
}
.bar{
    height: 10px;
    width: 25px;
    background-color: red;
    border-radius: 10px;
    margin-top: 5px;
}
.text{
    text-indent:2em;
    font-size: 18px;
    line-height: 35px;
    white-space: pre-wrap;
}
</style>