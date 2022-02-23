/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-16 21:14:15
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-23 11:36:43
 */
import MyRequest from '../../index'
import type { IDataType } from '@/service/type'
//获取数据
export function getList(url: string, queryInfo: any) {
  return MyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
//删除数据
export function delList(url: string) {
  return MyRequest.delete<IDataType>({
    url: url
  })
}
//新增
export function insertList(url: string, newData: any) {
  return MyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}
//edit
export function editList(url: string, editData: any) {
  return MyRequest.put<IDataType>({
    url: url,
    data: editData
  })
}
