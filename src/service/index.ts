/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-16 16:57:17
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-23 16:48:30
 */
import WDRequest from './request'
import { TIME_OUT } from './request/config'
import Cache from '@/utils/cache'
//创建实例
const MyRequest = new WDRequest({
  timeout: TIME_OUT,
  baseURL: import.meta.env.VITE_APP_BASE_API,

  interceptors: {
    requestInterceptor: (config: any) => {
      console.log(import.meta.env.VITE_APP_BASE_API)
      const token = Cache.getCache('token')
      //携带token
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
      }
      // console.log('实例请求拦截成功')
      return config
    },
    requestIntetceptorCatch: (err: any) => {
      // console.log('实例请求拦截失败')
      return err
    },
    reponseInterceptor: (config: any) => {
      // console.log('实例响应拦截成功')
      return config
    },
    reponseInterceptorCatch: (err: any) => {
      // console.log('实例响应拦截失败')
      return err
    }
  }
})
export default MyRequest
