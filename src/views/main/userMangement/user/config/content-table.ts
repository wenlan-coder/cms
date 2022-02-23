/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-18 16:59:57
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 20:55:39
 */

export const tableConfig = {
  propsList: [
    { prop: '_id', label: '用户ID', minWidth: '100' },
    { prop: 'username', label: '用户名称', minWidth: '100' },
    { prop: 'email', label: '用户邮箱', minWidth: '100' },
    {
      prop: 'user_state',
      label: '用户状态',
      minWidth: '100',
      slotName: 'status'
    },
    { prop: 'roles', label: '用户权限', minWidth: '100', slotName: 'roles' },
    { prop: 'handle', label: '操作', minWidth: '100', slotName: 'handle' }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: '用户列表'
}
