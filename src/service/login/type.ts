/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-22 17:05:21
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-05 17:35:21
 */
//请求用户类型
export interface IAccount {
  username: string
  password: string
}

//登录请求类型
export interface ILoginResult {
  token: string
}

export interface IDataType<T = any> {
  code: string
  data: T
  type?: string
}
export interface IuserInfo {
  _id: string
  username: string
  password: string
  roles: string[]
  email: string
  phone: number
  __v: number
  user_state: boolean
  avatar: string
  intro: string
}
