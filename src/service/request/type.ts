/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-18 13:38:02
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-18 22:52:35
 */
import type { AxiosRequestConfig } from 'axios'
export interface WDRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestIntetceptorCatch?: (err: any) => any
  reponseInterceptor?: (res: any) => any
  reponseInterceptorCatch?: (err: any) => any
}

export interface WDAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: WDRequestInterceptors
  showLoading?: boolean
}
