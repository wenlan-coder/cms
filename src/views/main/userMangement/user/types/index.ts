/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-14 18:00:40
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 22:49:35
 */
type IformType = 'input' | 'password' | 'select' | 'datepicker'
export interface Iformconfig {
  label: string
  field: string
  type: IformType
  placeholder?: string
  rules?: any[]
  isHidden?: boolean
  //select
  options?: any[]
  //特殊属性
  otherOptions?: any
}
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
