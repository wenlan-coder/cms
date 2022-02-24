<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-23 20:57:51
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-23 21:04:37
-->
<script setup lang="ts">
interface Props {
  title: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  title: 'Title'
})
</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
}
</style>
