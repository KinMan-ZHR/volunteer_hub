import {defineStore} from "pinia";
import {ref} from "vue";
// 1️⃣ import defineStore
export const useUserStore = defineStore("user", ()=>{ // 2️⃣ define a store
    const userInfo=ref({})// 3️⃣ add some state
    const loginStatus=ref(false)

    // 4️⃣ 定义一些actions
    const setUserInfo= (data)=>{
        loginStatus.value=true
        userInfo.value=data
        console.log(userInfo.value)
    }
    const clearUserInfo=()=>{
        loginStatus.value=false
        userInfo.value={}
    }
    // 5️⃣ return the state and the actions
    return {
        userInfo,
        loginStatus,
        setUserInfo,
        clearUserInfo
    }
},{
    persist: true,
});
