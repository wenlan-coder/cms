/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-13 15:26:43
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-18 16:12:43
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import MyRequest from './service'
const app = createApp(App)
app.use(router) // 挂载之前
app.use(store)
app.mount('#app')
MyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求拦截')
      return config
    },
    reponseInterceptor: (res) => {
      console.log('单独响应拦截')
      return res
    }
  }
})
// MyRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// })
