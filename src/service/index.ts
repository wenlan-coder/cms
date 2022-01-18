/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-16 16:57:17
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-18 19:19:11
 */
import WDRequest from './request'
import { TIME_OUT } from './request/config'
//创建实例
const MyRequest = new WDRequest({
  timeout: TIME_OUT,
  baseURL: import.meta.env.VITE_APP_BASE_API,
  interceptors: {
    requestInterceptor: (config) => {
      // const token = ''
      // //携带token
      // if (token) {
      //   config.headers['Authorization'] = 'Bearer ' + token
      // }
      console.log('实例请求拦截成功')
      return config
    },
    requestIntetceptorCatch: (err) => {
      console.log('实例请求拦截失败')
      return err
    },
    reponseInterceptor: (config) => {
      console.log('实例响应拦截成功')
      return config
    },
    reponseInterceptorCatch: (err) => {
      console.log('实例响应拦截失败')
      return err
    }
  }
})
export default MyRequest
