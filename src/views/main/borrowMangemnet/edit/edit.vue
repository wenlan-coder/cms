<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-03 10:49:46
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 08:18:03
-->
<script setup lang="ts">
import contenetTable from '@/components/content-table'
import { tableConfig } from './config/edit-table'
import { formConfig } from './config/edit-form'
import pageSearch from '@/components/search-page/index'
import { useSearchPage } from '@/hooks/use-page-search'
const [pageContentRef, handleClickReset, handleClickSearch] = useSearchPage()
</script>

<template>
  <page-search
    :form-config="formConfig"
    @click-reset="(handleClickReset as any)"
    @click-search="(handleClickSearch as any)"
  ></page-search>
  <contenet-table
    ref="pageContentRef"
    :table-config="tableConfig"
    page-name="category"
  ></contenet-table>
</template>

<style scoped></style>
