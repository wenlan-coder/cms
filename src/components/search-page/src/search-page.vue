<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-15 17:23:14
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 08:19:39
-->
<script setup lang="ts">
import MyForm from '@/base-ui/form/index'
import { ref } from 'vue'
const MyFormRef = ref<InstanceType<typeof MyForm>>()
//types
interface Iformconfig {
  formConfig: any
}
//props
const props = withDefaults(defineProps<Iformconfig>(), {
  formConfig: () => ({})
})
//data
//动态生成
const formItems = props.formConfig?.formItems ?? []
let defaultFormData: any = {}
for (let item of formItems) {
  defaultFormData[`${item.field}`] = ''
}
let formData = ref<any>(defaultFormData)

//emits

const emit = defineEmits<{
  (e: 'clickReset'): void
  (e: 'clickSearch', queryInfo: any): void
}>()
//methods
const handleClickReset = () => {
  for (let key in defaultFormData) {
    formData.value[`${key}`] = ''
    defaultFormData[`${key}`] = ''
    emit('clickReset')
  }
}
const handleClickSearch = () => {
  emit('clickSearch', formData.value)
}
</script>

<template>
  <el-card>
    <MyForm v-bind="formConfig" ref="MyFormRef" v-model:formData="formData">
      <template #header> <h2>检索</h2> </template>
      <template #footer>
        <el-button type="success" @click="handleClickSearch">搜索</el-button>
        <el-button type="primary" @click="handleClickReset">重置</el-button>
      </template></MyForm
    >
  </el-card>
</template>

<style scoped></style>
