/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-14 08:46:06
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-14 08:53:03
 */
export const codeRules = {
  number: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    // 手机号/电话号验证 正则
    {
      pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      message: '请输入合法手机号/电话号',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6,}$/,
      message: '请输入正确位数验证码',
      trigger: 'blur'
    }
  ]
}
