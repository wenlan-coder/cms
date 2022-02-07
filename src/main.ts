/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-13 15:26:43
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-07 10:15:58
 */
import { createApp, createVNode } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store/index'
import * as Icons from '@element-plus/icons-vue'
//css
import 'normalize.css'
import './assets/style/index.less'
import '@/premission' // 权限控制
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//创建icon组件
const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(Icons[icon as keyof typeof Icons])
}
const app = createApp(App)
app.use(router) // 挂载之前
app.use(store)
app.mount('#app')
app.component('Icon', Icon)
console.log('sasa')
