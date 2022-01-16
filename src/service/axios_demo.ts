/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-16 12:20:52
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-16 14:59:42
 */

import axios from 'axios'

axios.get('https://v1.hitokoto.cn/').then((res) => {
  console.log(res)
})

console.log(import.meta.env.VITE_MODE_NAME)
console.log(import.meta.env.VITE_APP_ID)
console.log(import.meta.env.VITE_APP_TITLE)
