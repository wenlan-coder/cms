/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-15 16:55:13
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-23 16:22:06
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Main from '@/views/main/Main.vue'
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue'),
    meta: { title: '登录', hidden: true }
  },
  {
    path: '/',
    component: Main,
    redirect: '/dashboard',
    name: 'dashboard',
    meta: { icon: 'Flag' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/main/dashboard/dashboard.vue'),
        meta: { title: '首页', icon: 'Flag' }
      }
    ]
  },
  {
    path: '/profile',
    component: Main,
    redirect: '/profile/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/main/profile/index.vue'),
        name: 'Profile',
        meta: { title: '个人中心', icon: 'Flag' }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/not-found'),
    meta: { hidden: true, title: '404' }
  }
]
//动态路由
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/borrowMagement',
    component: Main,
    redirect: '/borrowMagement/edit',
    name: 'borrowMagement',
    meta: {
      title: '借阅管理',
      icon: 'OfficeBuilding',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'edit',
        name: 'edit',
        component: () => import('@/views/main/borrowMangemnet/edit/edit.vue'),
        meta: { title: '图书归还' }
      },
      {
        path: 'history',
        name: 'history',
        component: () =>
          import('@/views/main/borrowMangemnet/history/history.vue'),
        meta: { title: '借阅记录' }
      }
    ]
  },
  {
    path: '/UserMangement',
    component: Main,
    redirect: '/UserMangement/user',
    name: 'UserMangement',
    meta: { title: '用户管理', icon: 'User', roles: ['admin'] },
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/main/userMangement/user/src/user.vue'),
        meta: { title: '角色管理' }
      },
      {
        path: 'apply',
        name: 'apply',
        component: () => import('@/views/main/userMangement/apply/apply.vue'),
        meta: { title: '应用管理' }
      }
    ]
  },
  {
    path: '/BooksMangement',
    component: Main,
    redirect: '/BooksMangement/message',
    name: 'BooksMangement',
    meta: { title: '图书管理', icon: 'Reading', roles: ['admin'] },
    children: [
      {
        path: 'message',
        name: 'message',
        component: () =>
          import('@/views/main/booksMangement/message/src/message.vue'),
        meta: { title: '图书信息管理' }
      },
      {
        path: 'booksCategory',
        name: 'booksCategory',
        component: () =>
          import('@/views/main/booksMangement/booksCategory.vue'),
        meta: { title: '图书分类管理' }
      }
    ]
  },
  {
    path: '/SystemMangement',
    component: Main,
    redirect: '/SystemMangement/system',
    name: 'SystemMangement',
    meta: { title: '系统管理', icon: 'Tools', roles: ['admin'] },
    children: [
      {
        path: 'system',
        name: 'system',
        component: () =>
          import('@/views/main/systemMangement/system/src/system.vue'),
        meta: { title: '权限管理' }
      },
      {
        path: 'lateMangement',
        name: 'lateMangement',
        component: () =>
          import('@/views/main/systemMangement/lateMangement.vue'),
        meta: { title: '到期管理' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: { hidden: true, title: '重定向' }
  }
]

//添加普通路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { top: 0 }
  }
})

//重置路由 用户登出 防止管理员和普通用户路由冲突
export function resetRouter() {
  const newRouter = router
  ;(router as any).matcher = (newRouter as any).matcher // reset router
}

console.log('路由', router.getRoutes())

export default router
