<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-17 11:50:15
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 16:57:07
-->
<script setup lang="ts">
interface ItableConfig {
  data: any[]
  dataCount: number
  propsList: any[]
  showIndexColumn: boolean
  showSelectColumn: boolean
  title: string
  page: any
}
const props = withDefaults(defineProps<ItableConfig>(), {
  data: () => [],
  propsList: () => [],
  showIndexColumn: false,
  showSelectColumn: false,
  title: '列表',
  dataCount: 0,
  page: () => ({ currentPage: 0, pageSize: 10 })
})
//emit
const emit = defineEmits<{
  (e: 'handleSelect', value: string): void
  (e: 'update:page', value: any): void
}>()

//methods
const handleSelect = (value: any) => {
  console.log(value)
  emit('handleSelect', value)
}
const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage })
}
</script>

<template>
  <div class="table">
    <el-card>
      <div class="header">
        <slot name="header">
          <div class="title">
            <h1>{{ props.title }}</h1>
          </div>
          <div class="handler">
            <slot name="handler"></slot>
          </div>
        </slot>
      </div>
      <el-table
        :data="props.data"
        border
        style="width: 100%"
        @selection-change="handleSelect"
      >
        <el-table-column
          v-if="props.showSelectColumn"
          type="selection"
          align="center"
          min-width="60"
        ></el-table-column>
        <el-table-column
          v-if="props.showIndexColumn"
          type="index"
          align="center"
          min-width="40"
        ></el-table-column>
        <template v-for="propsItem in props.propsList" :key="propsItem.prop">
          <el-table-column v-bind="propsItem" align="center">
            <template #default="scope">
              <slot :name="propsItem.slotName" :row="scope.row">
                {{ scope.row[propsItem.prop] }}</slot
              >
            </template>
          </el-table-column>
          ></template
        >
      </el-table>
      <div class="footer">
        <slot name="footer">
          <el-pagination
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="dataCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </slot>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
}
.footer {
  margin: top 20px;
}
.footer {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
