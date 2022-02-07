/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-29 12:49:46
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-29 13:12:43
 */
import { RouteRecordRaw } from 'vue-router'
export interface IPermissionState {
  routes: RouteRecordRaw[]
  dynamicRoutes: RouteRecordRaw[]
}
