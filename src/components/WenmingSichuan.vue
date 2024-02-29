<template>
    <div style="padding: 24px 36px;">
        <WMHeadLine></WMHeadLine>
        <DaodeJianshe></DaodeJianshe>
        <WenmingShijian></WenmingShijian>
    </div>
</template>

<script>
import WMHeadLine from './WMHeadLine.vue';
import DaodeJianshe from './DaodeJianshe.vue';
import WenmingShijian from './WenmingShijian.vue';


export default {
    name: 'WenmingSichuan',
    components: {
        WMHeadLine,
        DaodeJianshe,
        WenmingShijian
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