/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-22 17:05:14
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-05 18:10:23
 */
import MyRequest from '../index'
import type { IAccount, IDataType, ILoginResult, IuserInfo } from './type'
enum LoginApi {
  AccountLogin = '/user/login',
  UserInfo = '/user/getinfo',
  logout = '/user/logout'
}
//登录请求
export function accountLoginRequest(account: IAccount) {
  return MyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}
//获取用户信息请求
export function accountGetUserInfo() {
  return MyRequest.get<IDataType<IuserInfo>>({
    url: LoginApi.UserInfo
  })
}
//登出
export function logout() {
  return MyRequest.post<IDataType>({
    url: LoginApi.logout
  })
}
