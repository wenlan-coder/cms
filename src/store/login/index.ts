/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-05 15:42:44
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-14 10:54:34
 */

import type { IloginState } from './type'
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators'
import store from '@/store'
import { resetRouter } from '@/router'
import {
  accountLoginRequest,
  accountGetUserInfo,
  accounByCodeAction
} from '@/service/login/login'
// import { SET_ROLES, SET_TOKEN, SET_USERINFO } from '../mutation-type'
import { IAccount } from '@/service/login/type'
import Cache from '@/utils/cache'
import { logout } from '@/service/login/login'

@Module({ dynamic: true, store, name: 'login', namespaced: true })
class Login extends VuexModule implements IloginState {
  public token = ''
  public userInfo = {}
  public roles: string[] = []
  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_USERINFO(userinfo: object) {
    this.userInfo = userinfo
  }
  //密码登录请求
  @Action
  public accountLoginAction(payload: IAccount) {
    //登录请求token
    return new Promise((resolve, reject) => {
      accountLoginRequest(payload)
        .then((res: any) => {
          console.log(res)
          const { token } = res.data
          console.log(token)
          this.SET_TOKEN(token) //保存state
          console.log(token)

          Cache.setCache('token', token)
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }
  //短信验证登录请求
  @Action async messageLoginAction(payload: any) {
    console.log(payload)

    const data = accounByCodeAction(payload)
    console.log(data)
  }

  //请求用户信息
  @Action
  public accountGetInfoAction() {
    return new Promise((resolve, reject) => {
      accountGetUserInfo()
        .then((res) => {
          console.log(res)
          const { roles } = res.data
          this.SET_USERINFO(res.data) //userinfo
          this.SET_ROLES(roles) //roles
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  //清除token
  @Action
  public ResetToken() {
    Cache.deleteCache('token') //清楚缓存token
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }
  @Action
  public async LogOut() {
    await logout()
    this.ResetToken()
    resetRouter()
  }
}

export const LoginModule = getModule(Login)
