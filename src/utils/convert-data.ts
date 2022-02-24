/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-24 11:59:29
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-24 12:00:30
 */
import { coordinameData } from './coordinates'
export const convertData = function (data: any) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinameData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
