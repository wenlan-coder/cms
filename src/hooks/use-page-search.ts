/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-20 21:27:21
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-21 21:39:06
 */
import { ref } from 'vue'
import contenetTable from '@/components/content-table'
export function useSearchPage() {
  const pageContentRef = ref<InstanceType<typeof contenetTable>>()
  const handleClickSearch = () => {
    pageContentRef.value?.getPageList()
  }
  const handleClickReset = (queryInfo: any) => {
    console.log(queryInfo)
    pageContentRef.value?.getPageList(queryInfo)
  }
  return [pageContentRef, handleClickSearch, handleClickReset]
}
