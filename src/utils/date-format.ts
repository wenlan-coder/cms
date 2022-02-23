/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-18 12:36:37
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-18 12:41:28
 */
import dayjs from 'dayjs'
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export function formatStamp(stamp: number, format: string = DATE_TIME_FORMAT) {
  return dayjs(stamp).format(format)
}
