<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-23 21:12:07
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-24 10:06:29
-->
<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'
//data
const echartDivRef = ref<HTMLElement>()
interface Props {
  options: EChartsOption
  width: string
  height: string
}
//确保html以及生成
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)

  //收集依赖更新数据
  watchEffect(() => {
    setOptions(props.options)
  })
})

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
  width: '100%',
  height: '360px'
})

defineExpose({})
</script>

<template>
  <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
</template>

<style scoped></style>
