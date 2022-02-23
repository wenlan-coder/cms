/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-16 16:52:38
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-16 21:47:22
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { WDAxiosRequestConfig, WDRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
const DEFAULT_LOADING = false
class WDRequest {
  instance: AxiosInstance
  showLoading: boolean
  interceptors?: WDRequestInterceptors
  loading?: any
  constructor(config: WDAxiosRequestConfig<any>) {
    //创建axios实例
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? false
    this.interceptors = config.interceptors

    //实例拦截操作
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestIntetceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.reponseInterceptor,
      this.interceptors?.reponseInterceptorCatch
    )

    //默认类的拦截（全局拦截）

    //请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('默认请求拦截成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'laoding',
            fullscreen: false,
            background: 'rgba(0,0,0,.7)'
          })
        }
        return config
      },
      (err) => {
        // console.log('默认请求拦截失败')
        return err
      }
    )
    //响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        // Loading should be closed asynchronously
        this.loading?.close()
        const data = res.data
        // if (data.code === '-1000') {
        //   console.log('请求失败')
        // } else {
        //   return data
        // }
        return data
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('返回状态码错误为404')
        }
        console.log('默认响应拦截失败')
        return err
      }
    )
  }

  request<T>(config: WDAxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //单独请求拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === true) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //单独响应拦截
          if (config.interceptors?.reponseInterceptor) {
            res = config.interceptors.reponseInterceptor(res)
          }
          //确保不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          //确保不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  //GET
  get<T = any>(config: WDAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  //PUT
  put<T = any>(config: WDAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
  //POST
  post<T = any>(config: WDAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  //DEL
  delete<T = any>(config: WDAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}
export default WDRequest
