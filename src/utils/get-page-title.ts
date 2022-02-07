/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-29 15:40:13
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-29 15:48:17
 */
import defaultSettings from '@/setting'

const title = defaultSettings.title || 'book-mangement-system'

export default function getPageTitle(pageTitle: any) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
