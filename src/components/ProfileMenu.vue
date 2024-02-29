<template>
    <div class="menu-container">
        <div style="text-align: center; padding: 32px 0px 0px 0px;width: 100%;">
            <t-avatar :image="userinfo.avatar" size="96px"/>
            <div class="edit-container">
                <t-icon name="camera" color="rgba(133, 142, 189, 1)"/>
            </div>
        </div>

        <div class="username">
            {{ userinfo.username }}
        </div>

        <div class="note" style="text-align: center;">最后更新 {{ userinfo.lastUpdate }}</div>

        <div style="margin-top: 16px; padding: 0px 24px;">
            <div class="menu-item-container">
                <div style="display:flex ;">
                    <div class="menu-icon-container" >
                        <t-icon name="user" color="white" size="24px"/>
                    </div>
                    <div style="margin-left: 16px;font-size: 14px;display: flex;align-items: center;" >个人信息</div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import '../assets/css/index.css'

export default {
    name: 'ProfileMenu',
    data() {
        return {
            userinfo:{
                username:'张三',
                userrole:'管理员',
                userphone:'12345678901',
                useremail:'123456@foxmail.com',
                useraddress:'北京市朝阳区',
                avatar:'https://tdesign.gtimg.com/site/avatar.jpg',
                gender:'男',
                marry:'未婚',
                birthday:'1999-01-01',
                note:'这是一段备注',
                lastUpdate:'2024-2-28'
            }
        }
    },
}

</script>

<style scoped>
.menu-container{
    background-color: white;
    border-radius: 8px;
    width: 320px;
    padding-bottom: 32px;
}
.username{
    text-align: center;
    font-size: 18px;
    line-height: 24px;
}
.edit-container{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color:white;
    box-shadow: 0px 4px 16px  rgba(179, 192, 231, 0.32);
    position: relative;
    top: -29px;
    left: 179px;
    z-index: 999;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-item-container{
    width: 262px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 4px 16px  rgba(179, 192, 231, 0.32);
    padding: 8px;
}

.menu-item{

}

.menu-icon-container{
    background-color: var(--td-brand-color-4); width: 40px; height: 40px; border-radius: 8px;
    display: flex;justify-content: center;align-items: center;
}


</style>