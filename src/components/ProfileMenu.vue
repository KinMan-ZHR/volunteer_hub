<template>
    <div class="menu-container">

      <!-- 头像上传组件 -->

        <div style="text-align: center; padding: 32px 0px 0px 0px;width: 100%;">
          <t-upload
              :request-method="requestMethod1"
              :before-upload="beforeUpload"
          >
            <t-avatar :image="userinfo.avatar" size="96px"/>
          </t-upload>
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


<script  setup>
import '../assets/css/index.css'
import {useUserStore} from "@/dataStore/userdata";
import {MessagePlugin} from "tdesign-vue-next";
import {updateUserAPI} from "@/apis/usersHandler";
import {reactive} from "vue";

const userinfo =useUserStore().userInfo;
let tempAvatar;
const beforeUpload = (file) => {
  if (file.size > 5 * 1024 * 1024) {
    MessagePlugin.warning('上传的图片不能大于5M');
    return false;
  }
  tempAvatar = file;
  return true;
};
//todo 上传头像和id
const requestMethod1 = async () => {
  const id = userinfo.id;
  const formData = new reactive(null);
  console.log('tempAvatar', tempAvatar);
  console.log('id', id);
  // formData.append('avatar', tempAvatar);
  // formData.append('id', id);
  updateUserAPI(formData).then(
      (response) => {
        if (response.data.code === 200) {
          MessagePlugin.success('上传成功');
        }
      }
  );

};
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