/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-18 12:30:48
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-18 12:47:16
 */
import { formatStamp } from '@/utils/date-format'
import { App } from 'vue'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filter = {
    formatTime(value: number) {
      return formatStamp(value)
    }
  }
}
