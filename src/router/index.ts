/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-15 16:55:13
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-15 19:51:06
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/main',
    component: () => import('../views/Main.vue')
  }
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  routes,
  history: createWebHashHistory()
})
export default router
