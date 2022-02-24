<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-23 22:52:50
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-24 10:53:22
-->
<script setup lang="ts">
import baseEchart from '@/base-ui/base-echart'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'
import * as echarts from 'echarts'
// prettier-ignore
let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
// prettier-ignore
let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
let yMax = 500
let dataShadow = []
for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax)
}
//利用computed收集数据更新依赖
const options = computed((): EChartsOption => {
  return {
    title: {
      text: '特性示例：渐变色 阴影 点击缩放',
      subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    },
    xAxis: {
      data: dataAxis,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: data
      }
    ]
  }
})
</script>

<template>
  <div class="bar-echart">
    <baseEchart :options="options"></baseEchart>
  </div>
</template>

<style scoped></style>
