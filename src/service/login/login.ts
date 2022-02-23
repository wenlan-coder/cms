/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-22 17:05:14
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 17:55:33
 */
import MyRequest from '../index'
import type { IAccount, ILoginResult, IuserInfo } from './type'
import type { IDataType } from '@/service/type'
enum LoginApi {
  AccountLogin = '/user/login',
  UserInfo = '/user/getinfo',
  logout = '/user/logout',
  MessageAuth = '/user/message',
  codeAuth = '/user/codeAuth'
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
//获取短信验证码
export function accountMeesageCode(phone: any) {
  return MyRequest.post<IDataType>({
    url: LoginApi.MessageAuth,
    data: phone
  })
}
//验证码登录请求
export function accounByCodeAction(code: string) {
  return MyRequest.post<IDataType>({
    url: LoginApi.codeAuth,
    data: code
  })
}
