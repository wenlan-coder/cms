/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-22 20:48:43
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-23 11:47:30
 */
/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-14 18:10:54
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-15 11:06:21
 */

export const modalConfig = {
  title: '新增用户',
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  },
  formItems: [
    {
      field: 'username',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名称'
    },
    {
      field: 'password',
      label: '密码',
      type: 'input',
      placeholder: '请输入用户密码',
      isHidden: false
    },
    {
      field: 'phone',
      label: '手机号',
      type: 'input',
      placeholder: '请输入手机号码'
    },
    {
      field: 'email',
      label: '邮箱',
      type: 'input',
      placeholder: '请输入邮箱'
    }
  ]
}
