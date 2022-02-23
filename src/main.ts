/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-13 15:26:43
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-15 16:27:06
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store/index'
import './assets/style/index.less' //全局less
import '@/premission' // 权限控制
import { globalRegister } from '@/global' // 全局注册
const app = createApp(App)
app.use(globalRegister) //全局注册
app.use(router) // 挂载之前
app.use(store)
app.mount('#app')
