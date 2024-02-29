<template>
    <div style="padding: 24px 36px;">
        <WMHeadLine></WMHeadLine>
        <DaodeJianshe></DaodeJianshe>
        <WenmingShijian></WenmingShijian>
        <SiChuanDiFangWenMingWangZhan></SiChuanDiFangWenMingWangZhan>
    </div>
</template>

<script>
import WMHeadLine from './WMHeadLine.vue';
import DaodeJianshe from './DaodeJianshe.vue';
import WenmingShijian from './WenmingShijian.vue';
import SiChuanDiFangWenMingWangZhan from './DiFangWenMingWangZhan.vue';


export default {
    name: 'WenmingSichuan',
    components: {
        WMHeadLine,
        DaodeJianshe,
        WenmingShijian,
        SiChuanDiFangWenMingWangZhan,
    },
    data() {
        return {
        }
    },
    methods: {
    }
}

</script>

<style scoped>

</style>