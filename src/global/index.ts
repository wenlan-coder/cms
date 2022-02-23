/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-13 10:46:08
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-18 12:34:28
 */
import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'
export function globalRegister(app: App) {
  app.use(registerElement)
  app.use(registerProperties)
}
