<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-18 16:49:37
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 21:18:23
-->
<script setup lang="ts">
import { SystemModule } from '@/store/main/system/index'
import MyTable from '@/base-ui/table'
import { checkPermission } from '@/utils/premission'
import { ref, computed, watch } from 'vue'
//types
interface Iprops {
  tableConfig: any
  pageName: string
}
interface IPageInfo {
  currentPage: number
  pageSize: number
}
//data
const pageInfo = ref<IPageInfo>({
  currentPage: 0,
  pageSize: 10
})
//获取按钮操作权限
const isQuery = checkPermission(['admin', 'editor '])
const isCreated = checkPermission(['admin'])
const isEdit = checkPermission(['admin', 'editor'])
const isDel = checkPermission(['admin'])

//watch
const dataList = computed(() => {
  return SystemModule.pageListData(props.pageName)
})
const dataCount = computed(() => {
  return SystemModule.pageListCount(props.pageName)
})
//页码变化重新获取数据
watch(pageInfo, () => {
  getPageList()
})

//props
const props = withDefaults(defineProps<Iprops>(), {
  tableConfig: () => ({}),
  pageName: ''
})

//emit
const emit = defineEmits<{
  (e: 'newBtn'): void
  (e: 'editBtn', value: any): void
}>()

//methods
//请求数据 crud
const getPageList = (queryInfo: any = {}) => {
  if (!isQuery) return false
  SystemModule.getListAction({
    pageName: props.pageName,
    queryInfo: {
      ...queryInfo, //检索
      offset: pageInfo.value.currentPage * pageInfo.value.pageSize, //skip分页数据
      size: pageInfo.value.pageSize
    }
  })
}

const handleDelete = (item: any, pageName: string) => {
  SystemModule.delListAction({ ...item, pageName })
  console.log(item)
}
const handleInsert = () => {
  emit('newBtn')
}
const handleEdit = (value: any) => {
  emit('editBtn', value)
}

//dynamicSlots
const DynamicPropsSlots = props.tableConfig?.propsList.filter((item: any) => {
  if (item.slotName === 'handle') return false
  else return true
})

defineExpose({
  getPageList
})

getPageList() //初始加载数据
</script>

<template>
  <div class="content-table">
    <my-table
      v-model:page="pageInfo"
      :data="dataList"
      :data-count="dataCount"
      v-bind="props.tableConfig"
    >
      <!-- table外插槽 -->
      <template #handler>
        <el-button v-if="isCreated" type="primary" @click="handleInsert">
          <Icon icon="Plus" style="width: 15px; height: inherit"></Icon
          >新增</el-button
        >
        <el-button>
          <Icon icon="Refresh" style="width: 15px; height: inherit"></Icon
        ></el-button>
      </template>
      <template #footer> </template>
      <!-- table通用·插槽 -->
      <template #handle="scope">
        <div class="edit">
          <el-button
            v-if="isEdit"
            type="primary"
            size="small"
            @click="handleEdit(scope.row)"
          >
            <Icon icon="Edit" style="width: 15px; height: 15px"></Icon>
            编辑
          </el-button>
          <el-button
            v-if="isDel"
            type="danger"
            size="small"
            @click="handleDelete(scope.row, props.pageName)"
          >
            <Icon icon="Delete" style="height: 15px; width: 15px"></Icon
            >删除</el-button
          >
        </div>
      </template>
      <!-- 动态配置插槽 -->
      <template
        v-for="item in DynamicPropsSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </my-table>
  </div>
</template>

<style scoped lang="less">
.content-table {
  margin-top: 40px;
}
</style>
