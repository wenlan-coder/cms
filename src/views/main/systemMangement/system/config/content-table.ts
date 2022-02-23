/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-18 16:59:57
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-23 16:28:57
 */

export const tableConfig = {
  propsList: [
    { prop: 'email', label: '角色', minWidth: '100' },
    { prop: 'handle', label: '权限描述', minWidth: '100', slotName: 'handle' }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: '权限列表'
}
