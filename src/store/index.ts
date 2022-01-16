/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-15 20:18:17
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-15 20:19:19
 */
import { createStore } from 'vuex'
// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      count: 12
    }
  }
})
export default store
