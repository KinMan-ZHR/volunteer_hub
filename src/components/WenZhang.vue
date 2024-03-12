<template>
    <div style="display: flex;justify-content: center; width: 100%; background-color: #fff;">
        <div style="width: 100%;">
            <div class="title">{{ current_article.title }}</div>
            <div class="time">
                <div class="bar"></div>
                <div style="margin-left: 20px;color: #999999;">时间：{{ current_article.time }}, 来源：{{ current_article.source }}</div>
            </div>

            <!-- 图片 -->
            <div style="display: flex;justify-content: center;">
                <img :src="current_article.image" style="width: 50%; margin-top: 20px;">
            </div>
            <div style="margin-top: 20px;">
                <!-- <p class="text">{{ text }}</p>
                <p></p> -->
                {{ current_article.text }}
                <!-- <div v-for="(paragraph, index) in current_article.text.split('\n')" :key="index" class="text">
                    {{ paragraph }}
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'WenZhang',
    props:{
        current_article:{
            type:Object,
            required:true
        }
    },
    data(){
        return{

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