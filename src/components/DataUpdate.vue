<template>
    <div>
        <p style="font-size: 15px;line-height: 32px;">数据更新</p>
        <t-tabs v-model="value">
            <t-tab-panel :value="1" label="文明四川" :destroy-on-hide="false">
                <p style="padding: 25px">选项卡1的内容，使用 t-tab-panel 渲染</p>
            </t-tab-panel>
            <t-tab-panel :value="2" label="志愿四川" :destroy-on-hide="false">
                <template #panel>
                <p style="padding: 25px">选项卡2的内容，使用 t-tab-panel 渲染</p>
                </template>
            </t-tab-panel>
            <t-tab-panel :value="3" label="活动广告" :destroy-on-hide="false">
                <p style="padding: 25px">选项卡3的内容，使用 t-tab-panel 渲染</p>
            </t-tab-panel>
            <t-tab-panel :value="4" label="信息发布" :destroy-on-hide="false">
                <p style="padding: 25px">选项卡4的内容，使用 t-tab-panel 渲染</p>
            </t-tab-panel>
        </t-tabs>
    </div>
</template>

<script>
import { ref } from "vue";
export default{
    name:'DataUpdate',
    data(){
        return{
            value: ref(1),
        }
    }
}
</script>

<style scoped>

</style>