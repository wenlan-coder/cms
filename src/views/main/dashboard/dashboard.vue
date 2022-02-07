<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-03 10:50:45
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-07 16:42:49
-->
<script setup lang="ts">
import { LoginModule } from '@/store/login/index'
import { computed } from 'vue'
import AdminDashboard from './admin/index.vue'
import EditorDashboard from './editor/index.vue'
let currentRole = computed(() => {
  return LoginModule.roles.includes('admin') ? AdminDashboard : EditorDashboard
})
</script>

<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<style scoped></style>
