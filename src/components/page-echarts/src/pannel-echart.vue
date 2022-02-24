<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-23 22:52:50
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-24 10:52:59
-->
<script setup lang="ts">
import baseEchart from '@/base-ui/base-echart'
import { ref, computed } from 'vue'
import * as echarts from 'echarts'
let pannelData = ref<number>(60)
const options = computed((): any => {
  return {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: '业务指标',
        type: 'gauge',
        detail: {
          formatter: '{value}%'
        },
        data: [
          {
            value: pannelData.value,
            name: '完成率'
          }
        ],
        axisLine: {
          show: true,
          lineStyle: {
            color: [
              [
                1,
                new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0.1,
                    color: '#FFC600'
                  },
                  {
                    offset: 0.6,
                    color: '#30D27C'
                  },
                  {
                    offset: 1,
                    color: '#0B95FF'
                  }
                ])
              ]
            ]
          }
        }
      }
    ]
  }
})
setInterval(() => {
  pannelData.value = ((Math.random() * 100).toFixed(2) as any) - 0
}, 2000)
//利用computed收集数据更新依赖
</script>

<template>
  <div class="pannel-echart">
    <baseEchart :options="options"></baseEchart>
  </div>
</template>

<style scoped></style>
