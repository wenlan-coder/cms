/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-23 20:26:39
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-24 08:52:10
 */

import MyRequest from '../../index'
import type { IDataType } from '@/service/type'
enum EchartApi {
  books = '/echart/getBooksCount',
  line = '/echart/getLineList',
  ray = '/echart/getRayList',
  pip = '/echart/getPipList'
}

export function getBooksCount() {
  return MyRequest.get<IDataType>({
    url: EchartApi.books
  })
}

export function getLineList() {
  return MyRequest.get<IDataType>({
    url: EchartApi.line
  })
}
export function getRayList() {
  return MyRequest.get<IDataType>({
    url: EchartApi.ray
  })
}
export function getPieList() {
  return MyRequest.get<IDataType>({
    url: EchartApi.pip
  })
}
