/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-13 15:26:43
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-16 14:42:44
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare const $store: any

interface ImportMetaEnv {
  VITE_MODE_NAME: string
  VITE_APP_ID: string
  VITE_AGENT_ID: string
  VITE_LOGIN_TEST: string
  VITE_RES_URL: string
  VITE_APP_TITLE: string
}
