<template>
    <div style="display: flex;">
        <div class="left">
            <div style="display: flex;">
                <div class="bar"></div>
                <p class="title">公益活动</p>
            </div>
            <div style="margin: 10px;">
                <t-list>
                    <t-list-item v-for="(item,index) in current_page" :key="index" style="cursor:pointer">
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>{{ item.title }}</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> {{ item.time }} </p>
                        </template>
                    </t-list-item>
                </t-list>
            </div>
            <div style="margin-left: 25px;margin-right: 15px;padding-bottom: 10px;">
                <t-pagination
                    :total="dongtai.length"
                    showJumper
                    showFirstAndLastPageBtn
                    :showPageSize="false"
                    showPreviousAndNextBtn
                    totalContent
                    pageSize="15"
                    @change="onChangePagination"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'XinXiDongTai',
    data(){
        return{
            prompt:'https://i.postimg.cc/jqZjDpQq/prompt.png',
            dongtai:[
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态2',
                    time:'2024-2-29'
                },
                {
                    title:'动态3',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态4',
                    time:'2024-2-29'
                },
                {
                    title:'动态5',
                    time:'2024-2-29'
                },
                {
                    title:'动态6',
                    time:'2024-2-29'
                },
                {
                    title:'动态7',
                    time:'2024-2-29'
                },
                {
                    title:'动态8',
                    time:'2024-2-29'
                },
                {
                    title:'动态9',
                    time:'2024-2-29'
                },
                {
                    title:'动态0',
                    time:'2024-2-29'
                },
                {
                    title:'动态0',
                    time:'2024-2-29'
                },
                {
                    title:'动态9',
                    time:'2024-2-29'
                },
                {
                    title:'动态8',
                    time:'2024-2-29'
                },
                {
                    title:'动态7',
                    time:'2024-2-29'
                },
                {
                    title:'动态6',
                    time:'2024-2-29'
                },
                {
                    title:'动态5',
                    time:'2024-2-29'
                },
                {
                    title:'动态4',
                    time:'2024-2-29'
                },
                {
                    title:'动态3',
                    time:'2024-2-29'
                },
                {
                    title:'动态2',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态3',
                    time:'2024-2-29'
                },
                {
                    title:'动态4',
                    time:'2024-2-29'
                },
                {
                    title:'动态5',
                    time:'2024-2-29'
                },
                {
                    title:'动态5',
                    time:'2024-2-29'
                },
                {
                    title:'动态6',
                    time:'2024-2-29'
                },
                {
                    title:'动态7',
                    time:'2024-2-29'
                },
                {
                    title:'动态8',
                    time:'2024-2-29'
                },
                {
                    title:'动态9',
                    time:'2024-2-29'
                },
                {
                    title:'动态9',
                    time:'2024-2-29'
                },
                {
                    title:'动态19',
                    time:'2024-2-29'
                },
                {
                    title:'动态19',
                    time:'2024-2-29'
                },
                {
                    title:'动态17',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态2',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态2',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
                {
                    title:'动态1',
                    time:'2024-2-29'
                },
            ],
            dongtai_chunked:[],
            current_page:[],
        }
    },
    methods:{
        chunkArray(originalArray){
            var chunkedArray = [];
            for (let i = 0; i < originalArray.length; i += 15) {
                const chunk = originalArray.slice(i, i + 15);
                chunkedArray.push(chunk);
            }
            return chunkedArray
        },

        // 分页变化时触发,分页大小固定12
        onChangePagination(e){
            let current = e.current
            // let previous = e.previous
            this.current_page = this.dongtai_chunked[current-1]
        },

        initCurrentPage(){
            this.dongtai_chunked = this.chunkArray(this.dongtai)
            this.current_page = this.dongtai_chunked[0]
        }

    },
    mounted(){
        this.initCurrentPage()
    }
}
</script>

<style scoped>
.bar{
    height: 25px;
    width: 5px;
    background-color: red;
    margin-top: 27px;
    margin-left: 25px;
}
.title{
    font-size: 20px;
    font-weight: bold;
    margin-top: 25px;
    margin-left: 10px;
}
.left{
    background-color: white;
    border-radius: 8px;
    width: 100%;
    margin: 24px;
}
.circle{
    width: 5px;
    height: 5px;
    background-color: #EDBA66;
    margin: 10px;
    border-radius: 100px;
}
</style>