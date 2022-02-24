<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-07 16:24:32
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-24 11:51:48
-->
<script setup lang="ts">
import MyCard from '@/base-ui/card'
import {
  pieEchart,
  pannelEchart,
  LineEchart,
  barEchart,
  mapEchart
} from '@/components/page-echarts'
import { analysisModule } from '@/store/main/analysis/dashboard'
import { computed, ref } from 'vue'
const pannelRef = ref<InstanceType<typeof pannelEchart>>()
//获取数据
analysisModule.getDashboradEchartsData()

const pieList = computed(() => {
  return analysisModule.pie
})
</script>
<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="7">
        <MyCard title="饼图">
          <pieEchart :pie-data="pieList"></pieEchart>
        </MyCard>
      </el-col>
      <el-col :span="10">
        <MyCard title="map"> <mapEchart></mapEchart> </MyCard
      ></el-col>
      <el-col :span="7">
        <MyCard title="仪表盘">
          <pannelEchart ref="pannelRef"></pannelEchart> </MyCard
      ></el-col>
    </el-row>
    <el-row :gutter="20" class="footer">
      <el-col :span="12">
        <MyCard title="分类图书"> <LineEchart></LineEchart> </MyCard
      ></el-col>
      <el-col :span="12">
        <MyCard title="柱状图"> <barEchart></barEchart> </MyCard
      ></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.footer {
  margin-top: 30px;
}
</style>
