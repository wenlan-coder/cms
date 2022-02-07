<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-23 17:12:21
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-07 14:35:33
-->
<script setup lang="ts">
import { ref } from 'vue'
import NavHeader from '@/components/nav-header'
import NavMenu from '@/components/nav-menu'
import { useRoute } from 'vue-router'
let ISCollapse = ref<boolean>(false)
const route = useRoute()
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
          <router-view v-slot="{ Component }">
            <transition name="why" appear>
              <div :key="(route.name as string)">
                <component :is="Component"></component>
              </div>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.why-active {
  color: red;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
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
