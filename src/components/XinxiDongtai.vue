<template>
    <div style="display: flex;">
        <div class="left">
            <div style="display: flex;">
                <div class="bar"></div>
                <p class="title">信息动态</p>
            </div>
            <div style="margin: 10px;">
                <t-list>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> 操作1 </p>
                        </template>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> 操作1 </p>
                        </template>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> 操作1 </p>
                        </template>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> 操作1 </p>
                        </template>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> 操作1 </p>
                        </template>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> 操作1 </p>
                        </template>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> 操作1 </p>
                        </template>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> 操作1 </p>
                        </template>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> 操作1 </p>
                        </template>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                        <template #action>
                            <p theme="primary" hover="color" style="margin-left: 16px"> 操作1 </p>
                        </template>
                    </t-list-item>
                </t-list>
            </div>
            <div style="margin-left: 25px;margin-right: 15px;padding-bottom: 10px;">
                <t-pagination
                    :total="30"
                    showJumper
                    showFirstAndLastPageBtn
                    :showPageSize="false"
                    showPreviousAndNextBtn
                    totalContent
                />
            </div>
        </div>
        <div class="right">
            <div class="right-up">
                <div style="display: flex;">
                    <div class="bar"></div>
                    <p class="title">热点新闻</p>
                </div>
                <div style="margin: 10px;">
                    <t-list>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                    </t-list-item>
                    <t-list-item>
                        <div style="display: flex;">
                            <div class="circle"></div>
                            <p>列表内容的描述性文字</p>
                        </div>
                    </t-list-item>
                </t-list>
                </div>
            </div>
            <div class="right-down">
                <div style="display: flex;">
                    <div class="bar"></div>
                    <p class="title">热点图片</p>
                </div>
                <div style="display: flex;margin-top: 10px;justify-content: center;align-items: center;">
                    <div style="margin: 25px;">
                        <img src="../assets/img/news_photo1.png" width="200" height="150"/>
                        <t-breadcrumbItem :max-width="'200'"> 面包屑中文案过长时可缩略显示，鼠标hover时显示全部 </t-breadcrumbItem>
                    </div>
                    <div style="margin: 25px;">
                        <img src="../assets/img/news_photo2.png" width="200" height="150"/>
                        <t-breadcrumbItem :max-width="'200'"> 面包屑中文案过长时可缩略显示，鼠标hover时显示全部 </t-breadcrumbItem>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'XinXiDongTai',
    data(){
        return{
            prompt:'https://i.postimg.cc/jqZjDpQq/prompt.png'
        }
    },
    methods:{

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
    width: 60%;
    margin-top: 24px;
    margin-left: 24px;
}
.circle{
    width: 5px;
    height: 5px;
    background-color: #EDBA66;
    margin: 10px;
    border-radius: 100px;
}
.right{
    margin-top: 24px;
    margin-left: 20px;
    width: 40%;
    margin-right: 24px;
    /* border-radius: 8px; */
}
.right-up{
    background-color: white;
    border-radius: 8px;
    width: 100%;
    height: 45%;

}
.right-down{
    background-color: white;
    border-radius: 8px;
    width: 100%;
    height: 50%;
    margin-top: 5%;
}
</style>