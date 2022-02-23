/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-22 16:47:15
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 16:48:18
 */
import { LoginModule } from '@/store/login/index'

export const checkPermission = (value: string[]): boolean => {
  if (value && value instanceof Array && value.length > 0) {
    const roles = LoginModule.roles
    const permissionRoles = value
    const hasPermission = roles.some((role) => {
      return permissionRoles.includes(role)
    })
    return hasPermission
  } else {
    console.error("need roles! Like v-permission=\"['admin','editor']\"")
    return false
  }
}
