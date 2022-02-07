<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-23 17:12:21
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-06 21:04:01
-->
<script setup lang="ts">
import { markRaw, ref } from 'vue'
import NavHeader from '@/components/nav-header'
import NavMenu from '@/components/nav-menu'
import { useRoute } from 'vue-router'
const route = markRaw(useRoute())
let ISCollapse = ref<boolean>(false)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleCollapse = (isCollapse: boolean) => {
  console.log(isCollapse)
  ISCollapse.value = isCollapse
}
</script>

<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="ISCollapse ? '49px' : '210px'" class="page-aside">
        <nav-menu :data="ISCollapse"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @change-collapse="handleCollapse"></nav-header>
        </el-header>
        <el-main class="page-content">
          <router-view :key="route.path"> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.page-aside {
  background-color: #61a5c2;
}
.main-content {
  .page {
    height: 100%;
  }
  .page-header {
    height: 50px;
  }
  .page-content {
    height: calc(100vh - 50px);
  }
}
</style>
