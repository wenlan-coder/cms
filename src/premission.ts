/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-27 23:44:50
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-05 16:49:34
 */
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from 'element-plus'
import { RouteLocationNormalized } from 'vue-router'
import getPageTitle from '@/utils/get-page-title'
import Cache from './utils/cache'
import { PermissionModule } from '@/store/premission/index'
import { LoginModule } from '@/store/login/index'
NProgress.configure({ showSpinner: false })
const whiteList = ['/login']
router.beforeEach(
  async (
    to: RouteLocationNormalized,
    _: RouteLocationNormalized,
    next: any
  ) => {
    // Start progress bar
    NProgress.start()
    //获取token
    const hasToken = Cache.getCache('token')
    // Determine whether the user has logged in
    if (hasToken) {
      if (to.path === '/login') {
        next({ path: '/' }) //中断此次守卫，前往/
        NProgress.done()
      } else {
        // 1.1解析：若当前路径不在登录页面且有Token(已经登录过了)，则从store中获取用户信息
        const hasRoles = LoginModule.roles.length
        if (hasRoles === 0) {
          try {
            // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
            await LoginModule.accountGetInfoAction()
            //拿到roles角色
            const roles: string[] = LoginModule.roles
            console.log('拿到权限', roles)
            // 获取动态路由
            PermissionModule.GenerateRoutes(roles)
            // 动态添加路由
            console.log('拿到动态路由', PermissionModule.dynamicRoutes)

            PermissionModule.dynamicRoutes.forEach((route) => {
              router.addRoute(route)
            })
            //确保路由全部添加
            next({ ...to, replace: true })
          } catch (err) {
            // Remove token and redirect to login page
            console.log('token被清楚')

            await LoginModule.ResetToken()
            ElMessage({
              message: '"Has Error"',
              type: 'error'
            })
            next(`/login?redirect=${to.path}`)
            NProgress.done()
          }
        } else {
          next()
        }
      }
    } else {
      // Has no token
      if (whiteList.indexOf(to.path) !== -1) {
        // In the free login whitelist, go directly
        next()
      } else {
        // Other pages that do not have permission to access are redirected to the login page.
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  }
)

router.afterEach((to: RouteLocationNormalized) => {
  NProgress.done()

  // set page title
  document.title = getPageTitle(to.meta.title)
})
