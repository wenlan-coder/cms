<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-22 20:43:23
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-23 11:54:35
-->
<script setup lang="ts">
import { ref, watch } from 'vue'
import myForm from '@/base-ui/form'
import { SystemModule } from '@/store/main/system/index'

//types
interface propsConfig {
  modalConfig: any
  defaultFormData: any
  pageName: string
}
const props = withDefaults(defineProps<propsConfig>(), {
  modalConfig: () => ({}),
  defaultFormData: () => ({}),
  pageName: ''
})
//data
const centerDialogVisible = ref<boolean>(false)
const formData = ref<any>({})

//watch
watch(
  () => props.defaultFormData,
  (newValue) => {
    console.log(newValue)
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
//methods
const handleConfirmClick = () => {
  centerDialogVisible.value = false
  if (Object.keys(props.defaultFormData).length > 0) {
    //编辑操作
    //actions
    SystemModule.createListAction({
      pageName: props.pageName,
      newData: { ...formData },
      id: props.defaultFormData._id
    })
  } else {
    //新增操作
    console.log('新建用户')
    //actions
    SystemModule.createListAction({
      pageName: props.pageName,
      newData: { ...formData }
    })
  }
}

defineExpose({
  centerDialogVisible
})
</script>

<template>
  <el-dialog
    v-model="centerDialogVisible"
    :title="props.modalConfig.title"
    width="50%"
    center
    destroy-on-close
  >
    <template #footer>
      <my-form v-model:formData="formData" v-bind="props.modalConfig"></my-form>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmClick">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
