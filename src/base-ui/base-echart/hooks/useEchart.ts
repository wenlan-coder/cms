/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-23 22:17:26
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-24 11:41:17
 */
import * as echart from 'echarts'
import ChinaMap from '../data/china.json'
echart.registerMap('china', ChinaMap as any)
export default function (el: HTMLElement) {
  const echarInstance = echart.init(el)
  const setOptions = (options: echarts.EChartsOption) => {
    echarInstance.setOption(options)
  }
  window.addEventListener('resize', () => {
    echarInstance.resize()
  })
  return {
    echarInstance,
    setOptions
  }
}
