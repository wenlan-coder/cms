/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-21 16:07:53
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-16 21:46:32
 */
import { IloginState } from './login/type'
import { IPermissionState } from './main/premission/type'
export interface IRootState {
  loginModule: IloginState
  PremissionMudole: IPermissionState
}
export interface IRootWithModule {
  loginModule: IloginState
  PremissionMudole: IPermissionState
}
//交叉类型
export type IStoreType = IRootState & IRootWithModule
