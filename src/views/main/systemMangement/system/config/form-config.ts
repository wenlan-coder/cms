/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-14 18:10:54
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-23 16:28:15
 */

import { Iform } from '@/views/main/userMangement/user/types/index'
export const formConfig: Iform = {
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
    { field: 'id', label: 'id', type: 'input', placeholder: '请输入id' },
    {
      field: 'phone',
      label: 'phone',
      type: 'input',
      placeholder: '请输入手机号'
    },
    {
      field: 'disabled',
      label: '权限',
      type: 'select',
      placeholder: '是否禁用',
      options: [
        {
          label: '禁用',
          value: false
        },
        {
          label: '启用',
          value: true
        }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
