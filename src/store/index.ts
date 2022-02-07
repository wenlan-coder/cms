/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-15 20:18:17
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-05 16:41:39
 */
import { createStore, useStore as useVuexStore, Store } from 'vuex'
import { IRootState } from './type'
import { IStoreType } from './type'

//解决vuex对module未找到
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default createStore<IRootState>({
  modules: {}
}) //dynamic: true: 是动态创建动态模块,所以不需要再次注册
