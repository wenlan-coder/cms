/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-13 11:22:28
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-18 16:06:02
 */
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { App, createVNode } from 'vue'
import * as Icons from '@element-plus/icons-vue'
export default function (app: App) {
  const Icon = (props: { icon: string }) => {
    const { icon } = props
    return createVNode(Icons[icon as keyof typeof Icons])
  }
  app.component('Icon', Icon)
  app.use(ElementPlus, {
    locale: zhCn
  })
}
