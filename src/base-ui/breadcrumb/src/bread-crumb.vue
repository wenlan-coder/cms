<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-13 14:50:20
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-13 17:39:27
-->
<script setup lang="ts">
import { compile } from 'path-to-regexp'
import { toRefs, reactive, watch } from 'vue'
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import type { IBreadcrumbList } from '../type'
const route = useRoute()
const router = useRouter()
let breadList = reactive<IBreadcrumbList>({
  list: []
})
const { list } = toRefs(breadList)
watch(
  () => route.name,
  (newValue) => {
    console.log('@', newValue)
    getBreadcrumb()
  },
  { deep: true }
)
const pathCompile = (path: string) => {
  const { params } = route
  const toPath = compile(path) //解决url中携带参数问题
  return toPath(params)
}
const isDashboard = (route: RouteRecordRaw) => {
  const name = route?.name
  if (!name) {
    return false
  }
  return (
    (name as string).trim().toLocaleLowerCase() ===
    'dashboard'.toLocaleLowerCase()
  )
}
const getBreadcrumb = () => {
  // only show routes with meta.title
  let matched = route.matched.filter((item) => item.meta && item.meta.title)
  console.log('@@', matched)

  const first = matched[0] ?? undefined
  if (!isDashboard(first)) {
    matched = [
      {
        path: '/dashboard',
        meta: { title: 'Dashboard' }
      } as any
    ].concat(matched)
  }

  breadList.list = matched.filter((item) => item.meta && item.meta.title)
  console.log('@@@', breadList)
}

getBreadcrumb()

const handleLink = (item: any) => {
  const { redirect, path } = item
  console.log(path, redirect)

  if (redirect) {
    router.push(redirect).catch((err) => {
      console.warn(err)
    })
    return
  }
  router.push(pathCompile(path)).catch((err) => {
    console.warn(err)
  })
}
</script>

<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item in list" :key="item.path">
        <a @click.prevent="handleLink(item)">{{ item.meta?.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style scoped lang="less">
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
