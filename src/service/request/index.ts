/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-16 16:52:38
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-18 16:09:29
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { WDAxiosRequestConfig, WDRequestInterceptors } from './type'
class WDRequest {
  instance: AxiosInstance
  interceptors?: WDRequestInterceptors
  constructor(config: WDAxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    //实例拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestIntetceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.reponseInterceptor,
      this.interceptors?.reponseInterceptorCatch
    )
    //默认拦截

    this.instance.interceptors.request.use(
      (config) => {
        console.log('默认请求拦截成功')
        return config
      },
      (err) => {
        console.log('默认请求拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        console.log('默认响应拦截成功')
        return config
      },
      (err) => {
        console.log('默认响应拦截失败')
        return err
      }
    )
  }
  request(config: WDAxiosRequestConfig): void {
    //单独请求拦截
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.reponseInterceptor) {
        res = config.interceptors.reponseInterceptor(res)
      }
      console.log(res)
    })
  }
}
export default WDRequest
