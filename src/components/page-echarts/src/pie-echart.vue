<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-23 22:52:50
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-24 10:02:24
-->
<script setup lang="ts">
import baseEchart from '@/base-ui/base-echart'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'
import { pipData } from '../types/index'
interface Props {
  pieData: pipData[]
}
const props = withDefaults(defineProps<Props>(), {
  pieData: () => []
})
//利用computed收集数据更新依赖
const options = computed((): EChartsOption => {
  return {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<template>
  <div class="pie-echart">
    <baseEchart :options="options"></baseEchart>
  </div>
</template>

<style scoped></style>
