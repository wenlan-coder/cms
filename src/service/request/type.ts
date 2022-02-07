/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-18 13:38:02
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-19 13:14:28
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface WDRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestIntetceptorCatch?: (err: any) => any
  reponseInterceptor?: (res: T) => T
  //any 大法
  // reponseInterceptor?: (res: any) => any
  reponseInterceptorCatch?: (err: any) => any
}

export interface WDAxiosRequestConfig<T> extends AxiosRequestConfig {
  interceptors?: WDRequestInterceptors<T>
  showLoading?: boolean
}
