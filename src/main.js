import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-vue-next';

import router from './router';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
import './assets/css/theme.css'

const app = createApp(App);
app.use(TDesign);
app.use(router)
app.mount('#app')
