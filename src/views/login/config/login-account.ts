/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-20 22:14:59
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-21 14:03:06
 */
export const accountRules = {
  user: [
    { required: true, message: '用户名不为空', trigger: 'blur' },
    {
      min: 3,
      max: 12,
      trigger: 'blur',
      message: '用户名长度应该在1-12位之间'
    }
  ],
  password: [
    { required: true, message: '密码不为空', trigger: 'blur' },
    {
      min: 5,
      max: 16,
      message: '密码长度在5到16位之间',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9_-]{5,16}$/,
      message: '密码只能由英文字母和数字和下划线和-组成',
      trigger: 'blur'
    }
  ]
}
