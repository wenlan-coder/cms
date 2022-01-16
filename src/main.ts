/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-13 15:26:43
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-16 14:27:14
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import './service/axios_demo'
const app = createApp(App)
app.use(router) // 挂载之前
app.use(store)
app.mount('#app')
