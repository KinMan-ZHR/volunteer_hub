<template>
    <div>
        <div style="margin-top: 34px;">道德建设</div>
        <div style="margin-top: 17px;">
            <div style="display: flex;">
                <div style="flex-grow: 1;">
                    <t-tabs theme="card" :default-value="1">
                        <t-tab-panel :value="1" label="道德模范">
                        <!-- <p style="margin: 20px">选项卡1内容区</p> -->
                        <t-swiper
                            :duration="300"
                            :interval="2000"
                            >
                            <t-swiper-item>
                                <div class="people-container">
                                    <div>
                                        <div>
                                            <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain">
                                            <div>
                                                <p>周承志</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div></div>
                                </div>
                            </t-swiper-item>
                            <t-swiper-item>
                                <div
                                :style="{ height: '200px', background: 'var(--td-warning-color-7)' }"
                                />
                            </t-swiper-item>
                            <t-swiper-item>
                                <div
                                :style="{ height: '200px', background: 'var(--td-error-color-7)' }"
                                />
                            </t-swiper-item>
                        </t-swiper>

                        </t-tab-panel>
                        <t-tab-panel :value="2" label="身边好人">
                        <!-- <p style="margin: 20px">选项卡2内容区</p> -->
                        </t-tab-panel>
                    </t-tabs>
                </div>
                <div style="width: 450px;">

                </div>
            </div>
        </div>


    </div>
</template>

<script>

export default{
    name: 'DaodeJianshe',
    data(){
        return{
            goodpeople:[],
            model:[]
        }
    },
    methods:{
        getGoodPeople(){
            this.goodpeople=[
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
            ]
        },
        getModel(){
            this.model=[
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
                {
                    name:'周承志',
                    image:'https://tse1-mm.cn.bing.net/th/id/OIP-C.HUA4zI2IXtdJdb-Xk8FByAAAAA?rs=1&pid=ImgDetMain'
                },
            ]
        }
    },
    mounted(){
        this.getGoodPeople()
        this.getModel()

    }
}

</script>

<style scoped>
.people-container{
    display: flex;
    flex-direction: row;
}
</style>