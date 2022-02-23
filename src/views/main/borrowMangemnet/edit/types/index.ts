/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-19 22:01:06
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-19 23:52:42
 */

export interface Iform {
  formData?: any
  formItems: Iformconfig[]
  labelWidth?: string
  colLayout?: any
  itemLayout: any
}
export interface ITableConfig {
  propsList: any[]
  showIndexColumn: boolean
  showSelectColumn: boolean
  title: string
}
/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-14 18:00:40
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-18 17:24:49
 */
type IformType = 'input' | 'password' | 'select' | 'datepicker'
export interface Iformconfig {
  label: string
  field: string
  type: IformType
  placeholder?: string
  rules?: any[]
  //select
  options?: any[]
  //特殊属性
  otherOptions?: any
}
export interface IEditform {
  formData?: any
  formItems: Iformconfig[]
  labelWidth?: string
  colLayout?: any
  itemLayout: any
}
