/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-22 11:11:41
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 12:45:23
 */
/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-18 16:59:57
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-18 17:07:54
 */
export const tableConfig = {
  propsList: [
    { prop: 'ISBN', label: 'ISBN', minWidth: '100' },
    { prop: 'title', label: '书名', minWidth: '100' },
    { prop: 'category', label: '分类', minWidth: '100', slotName: 'category' },
    {
      prop: 'cover',
      label: '封面',
      minWidth: '100',
      slotName: 'image'
    },
    { prop: 'author', label: '作者', minWidth: '100' },
    { prop: 'date', label: '出版时间', minWidth: '100' },
    { prop: 'press', label: '出版社', minWidth: '100' },
    {
      prop: 'price',
      label: '价格',
      minWidth: '100',
      slotName: 'price'
    },
    {
      prop: 'total',
      label: '数量',
      minWidth: '100'
    },
    { prop: 'handle', label: '操作', minWidth: '200', slotName: 'handle' }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: '用户列表'
}
