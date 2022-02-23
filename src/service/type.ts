/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-16 21:46:58
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-16 21:46:59
 */
export interface IDataType<T = any> {
  code: string
  data: T
  type?: string
}
