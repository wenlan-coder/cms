/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-19 21:56:53
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-19 23:53:16
 */
/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-18 16:59:57
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-18 17:07:54
 */
import { ITableConfig } from '../types'
export const tableConfig: ITableConfig = {
  propsList: [
    { prop: '_id', label: '分类ID', minWidth: '100' },
    { prop: 'name', label: '分类名称', minWidth: '100' },
    { prop: 'handle', label: '操作', minWidth: '100', slotName: 'handle' }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: '分类列表'
}
