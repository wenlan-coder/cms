<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-14 17:52:54
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 23:54:05
-->
<script setup lang="ts">
import { Iformconfig } from '@/views/main/userMangement/user/types'
import { ref } from 'vue'
import { useVModel } from '@vueuse/core'
import type { ElForm } from 'element-plus'
type FormInstance = InstanceType<typeof ElForm>
const formRef = ref<FormInstance>()
//types
interface Iform {
  formData?: any
  formItems: Iformconfig[]
  labelWidth?: string
  colLayout?: any
  itemLayout: any
}

//emit
const emit = defineEmits<{
  (e: 'update:formData', value: string): void
}>()

//props
const props = withDefaults(defineProps<Iform>(), {
  formData: () => ({}),
  formItems: () => [],
  labelWidth: '160px',
  itemLayout: () => ({
    padding: '10px 20px'
  }),
  colLayout: () => ({
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  })
})
//useVmodel
const formData = useVModel(props, 'formData', emit)

//methods
// const resetForm = () => {
//   formRef.value?.resetFields()
// }

// defineExpose({ resetForm })
//#region
//computed plan.1
//对象属性监听不到
// const formData = computed({
//   get: () => props.formData,
//   set: (newValue) => {
//     console.log('变化', newValue)

//     emit('update:formData', newValue)
//   }
// })
//#endregion

//#region
//plan.2
// const formData = ref({ ...props.formData })
//watch
// watch(
//   () => formData,
//   (newValue) => {
//     // console.log('new', newValue)
//     emit('update:formData', newValue)
//   },
//   { deep: true }
// )
//#endregion
</script>

<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form
      ref="formRef"
      :label-width="props.labelWidth"
      :model="props.formData"
    >
      <el-row :style="props.itemLayout">
        <template v-for="item in props.formItems" :key="item.label">
          <el-col v-bind="props.colLayout">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-form-item
                v-if="!item.isHidden"
                :label="item.label"
                style="width: 100%"
                v-bind="item.rules"
              >
                <el-input
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                ></el-input>
              </el-form-item>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-form-item :label="item.label">
                <el-select
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <el-option
                    v-for="subitem in item.options"
                    :key="subitem.value"
                    :label="subitem.label"
                    :value="subitem.value"
                  ></el-option> </el-select></el-form-item
            ></template>
            <template v-else-if="(item.type = 'datepicker')">
              <el-form-item :label="item.label">
                <el-date-picker
                  v-model="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
                >
                </el-date-picker>
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.form {
  margin: 10px;
}
</style>
