<template>
    <div class="video_container">
        <div class="container">
            <video width="780px" controls v-if="is_play" id="video_play">
                <source :src="current_video.link" type="video/mp4">
            </video>
        </div>
        <div style="margin-left: 20px;">
            <div class="title">{{ current_video.title }}</div>
            <div class="main">日期：{{ current_video.date }}</div>
            <div class="main">简介：{{ current_video.description }}</div>
        </div>
    </div>
</template>

<script>

export default{
    name:'WenZhangVideo',
    props:{
        current_video:{
            type:Object,
            required:true
        },
        is_play:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){
        if(this.is_play){
            let player = document.querySelector('#video_play')
            player.src = this.current_video.link
            player.play()
        }
    }
}
</script>

<style scoped>
.video_container{
    background-color: white;
    border-radius: 8px;
    width: 1000px;
    /* margin: 24px; */
    display: flex;
    /* padding: 20px; */
}
.title{
    font-size: 16px;
    font-weight: bold;
    line-height:24px
}
.main{
    font-size: 14px;
    color: #999999;
    word-break: break-all;
    margin-top: 10px;
    line-height: 20px;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
    width: 80%;
}
video{

}
</style>