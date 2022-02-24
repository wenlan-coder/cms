/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-23 19:24:43
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-24 09:20:48
 */
/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-05 15:42:44
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-14 10:54:34
 */

import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators'
import store from '@/store'
import { IEchartInfo } from './types'
import {
  getPieList,
  getLineList,
  getBooksCount,
  getRayList
} from '@/service/main/ananlysis'
@Module({ dynamic: true, store, name: 'analysis', namespaced: true })
class analysis extends VuexModule implements IEchartInfo {
  public count = []
  public pie = []
  public line = []
  public ray = []
  @Mutation
  private SET_COUNT(count: any) {
    this.count = count
  }

  @Mutation
  private SET_PIE(pie: any) {
    this.pie = pie
  }

  @Mutation
  private SET_LINE(line: any) {
    this.line = line
  }
  @Mutation
  private SET_RAY(ray: any) {
    this.ray = ray
  }

  //请求echart数据
  @Action
  public async getDashboradEchartsData() {
    const pie = await getPieList()
    this.SET_PIE(pie.data)
    const count = await getBooksCount()
    this.SET_COUNT(count.data)
    const ray = await getRayList()
    this.SET_RAY(ray.data)
    const line = await getLineList()
    this.SET_LINE(line.data)
  }
}

export const analysisModule = getModule(analysis)
