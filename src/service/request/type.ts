/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-18 13:38:02
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-18 13:38:02
 */
import type { AxiosResponse, AxiosRequestConfig } from 'axios'
export interface WDRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestIntetceptorCatch?: (err: any) => any
  reponseInterceptor?: (res: AxiosResponse) => AxiosResponse
  reponseInterceptorCatch?: (err: any) => any
}

export interface WDAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: WDRequestInterceptors
}
