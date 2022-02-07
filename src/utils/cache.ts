/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-21 13:53:13
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-21 14:43:14
 */
class LocalCache {
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string): any {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string): void {
    window.localStorage.removeItem(key)
  }
  //remove all
  clearCache(): void {
    window.localStorage.clear()
  }
}
export default new LocalCache()
