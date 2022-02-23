<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-03 10:53:25
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-23 11:44:27
-->
<script setup lang="ts">
import pageSearch from '@/components/search-page/index'
import contenetTable from '@/components/content-table'
import pageModal from '@/components/page-modal/index'
import { formConfig } from '../config/form-config'
import { modalConfig } from '../config/modal-config'
import { tableConfig } from '../config/content-table'
import { useSearchPage } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

//相关的hooks逻辑

const newCallBack = () => {
  console.log('回调')
  modalConfig.title = '新增用户'
  const psaawordItem = modalConfig.formItems.find((item) => {
    return item.field === 'password'
  })
  psaawordItem!.isHidden = false
  console.log(psaawordItem)
}
const editCallBack = () => {
  modalConfig.title = '编辑用户'
  const psaawordItem = modalConfig.formItems.find((item) => {
    return item.field === 'password'
  })
  psaawordItem!.isHidden = true
  console.log(psaawordItem)
}
const [pageContentRef, handleClickReset, handleClickSearch] = useSearchPage()
const [pageModalRef, handleEditClick, handleNewClick, defaultFormData] =
  usePageModal(newCallBack, editCallBack)
</script>

<template>
  <div class="user">
    <page-search
      :form-config="formConfig"
      @click-reset="(handleClickReset as any)"
      @click-search="(handleClickSearch as any)"
    ></page-search>
    <contenet-table
      ref="pageContentRef"
      :table-config="tableConfig"
      page-name="user"
      @new-btn="(handleNewClick as any)"
      @edit-btn="(handleEditClick as any)"
    >
      <!-- user页面特有插槽 -->
      <template #roles="scope">
        <el-tag type="success">{{ scope.row.roles?.[0] }}</el-tag>
      </template>
      <template #status="scope">
        <el-tag :type="scope.row.disabled ? '' : 'success'">{{
          scope.row.disabled ? '禁用' : '启用'
        }}</el-tag>
      </template>
    </contenet-table>
    <div class="modal">
      <page-modal
        ref="pageModalRef"
        :modal-config="modalConfig"
        page-name="user"
        :default-form-data="defaultFormData"
      ></page-modal>
    </div>
  </div>
</template>

<style scoped lang="less">
.user {
  margin: 40px 0px;
}
</style>
