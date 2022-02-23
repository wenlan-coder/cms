<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-03 10:47:03
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 12:48:42
-->
<script setup lang="ts">
import { tableConfig } from '../config/content-table'
import contenetTable from '@/components/content-table'
</script>
<template>
  <div class="books-message">
    <contenet-table
      ref="pageContentRef"
      :table-config="tableConfig"
      page-name="books"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.cover"
          :preview-src-list="[scope.row.cover]"
          fit="cover"
          preview-teleported
        >
        </el-image>
      </template>
      <template #price="scope">
        <el-tag>{{ `￥${scope.row.price}` }}</el-tag>
      </template>
      <template #category="scope">
        <el-tag>{{ scope.row.category?.name }}</el-tag>
      </template>
    </contenet-table>
  </div>
</template>

<style scoped></style>
