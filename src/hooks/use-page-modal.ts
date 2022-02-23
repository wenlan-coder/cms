/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-22 21:23:08
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 22:56:42
 */
import pageModal from '@/components/page-modal'
import { ref } from 'vue'
type CallBackFn = () => void
export function usePageModal(newCB: CallBackFn, editCB: CallBackFn) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultFormData = ref({})
  const handleNewClick = () => {
    defaultFormData.value = {} //清空
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    newCB && newCB() //回调
  }
  const handleEditClick = (value: any) => {
    defaultFormData.value = { ...value } //浅拷贝引用对象
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    editCB && editCB()
  }
  return [pageModalRef, handleEditClick, handleNewClick, defaultFormData]
}
