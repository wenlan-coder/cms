/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-29 12:49:39
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-05 15:45:02
 */
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators'
import store from '@/store'
import { asyncRoutes, constantRoutes } from '@/router'
import type { RouteRecordRaw } from 'vue-router'
import { IPermissionState } from './type'
//验证角色
const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => (route.meta?.roles as string[]).includes(role))
  } else {
    return true
  }
}
//过滤权限路由
export const filterAsyncRoutes = (
  routes: RouteRecordRaw[],
  roles: string[]
) => {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}
//dynamic动态创建动态模块即new Vuex.Store({})里面不用注册的.空着就行
//store当前模块注册到store上，也可以写在getModule（premissionModule,STORE）
//namespce命名空间
@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteRecordRaw[] = [] //声明为public可访问
  public dynamicRoutes: RouteRecordRaw[] = []
  @Mutation
  private SET_ROUTES(routes: RouteRecordRaw[]) {
    this.routes = constantRoutes.concat(routes)
    this.dynamicRoutes = routes
  }
  @Action
  public GenerateRoutes(roles: string[]) {
    let accessedRoutes
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    this.SET_ROUTES(accessedRoutes)
  }
}

export const PermissionModule = getModule(Permission)
