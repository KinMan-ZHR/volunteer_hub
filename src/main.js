import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-vue-next';
// import Vue from 'vue'
// import * as echarts from 'echarts'; //引入echarts
import $ from 'jquery';
// import { VueRenderer } from '@vue/server-renderer'

window.jQuery = $
window.$ = $

import router from './router';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
import './assets/css/theme.css'
import './assets/css/index.css'

//导入pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// Vue.prototype.$echarts = echarts

const pinia = createPinia().use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(TDesign);
app.use(router);
app.use(pinia);
app.mount('#app')
