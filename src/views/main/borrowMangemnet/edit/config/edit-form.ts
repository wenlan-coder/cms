/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-19 23:50:33
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-19 23:56:59
 */
/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-14 18:10:54
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-15 11:06:21
 */

import { IEditform } from '../types/index'
export const formConfig: IEditform = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItems: [
    {
      field: '_id',
      label: '分类ID',
      type: 'input',
      placeholder: '请输入分类ID'
    },
    {
      field: 'name',
      label: '分类名称',
      type: 'input',
      placeholder: '请输入分类名称'
    }
  ]
}
