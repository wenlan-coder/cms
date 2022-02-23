/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-02-16 20:49:25
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-23 16:22:59
 */
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators'
import store from '@/store'
import type { ISystemState } from './type'
import { getList, delList } from '@/service/main/system/index'
@Module({ dynamic: true, store, name: 'system', namespaced: true })
class System extends VuexModule implements ISystemState {
  public userList: any[] = []
  public booksList: any[] = []
  public categoryList: any[] = []
  public menuList: any[] = []

  get pageListData() {
    return (pageName: string) => {
      switch (pageName) {
        case 'user':
          return this.userList
        case 'books':
          return this.booksList
        case 'category':
          return this.categoryList
      }
    }
  }
  //后端没做分页，这里直接获取length
  get pageListCount() {
    return (pageName: string) => {
      switch (pageName) {
        case 'user':
          return this.userList.length
        case 'books':
          return this.booksList.length
        case 'category':
          return this.categoryList.length
      }
    }
  }
  @Mutation
  private async SET_USERLIST(userList: []) {
    {
      this.userList = userList
    }
  }
  @Mutation
  private async SET_BOOKSLIST(booksList: []) {
    {
      this.booksList = booksList
    }
  }
  @Mutation
  private async SET_CATEGORY(categoryList: []) {
    {
      this.categoryList = categoryList
    }
  }

  @Action
  public async delListAction(payload: any) {
    const { pageName, _id } = payload
    switch (pageName) {
      case 'user':
        await delList(`/user/deleteUser/${_id}`)
        break
      case 'books':
        await delList(`/books/deleteBooks/${_id}`)
        break
      case 'category':
        await delList(`/category/deleteCategory/${_id}`)
        break
    }
    await this.getListAction({ pageName })

    console.log(pageName, _id)
  }

  @Action
  public async getListAction(payload: any) {
    const pageName = payload.pageName
    let pageUrl = ''
    switch (pageName) {
      case 'user':
        pageUrl = '/user/getUserList'
        break
      case 'books':
        pageUrl = '/books/list'
        break
      case 'category':
        pageUrl = '/category/list'
        break
    }
    console.log(pageUrl)
    //发送请求
    const pageResult = await getList(pageUrl, payload.queryInfo)
    const list = pageResult.data
    switch (pageName) {
      case 'user':
        this.SET_USERLIST(list)
        break
      case 'books':
        this.SET_BOOKSLIST(list)
        break
      case 'category':
        this.SET_CATEGORY(list)
        break
    }
  }

  @Action
  public async createListAction(payload: any) {
    const { pageName, newData } = payload
    let pageUrl = ''
    switch (pageName) {
      case 'user':
        pageUrl = '/user/register'
        break
      case 'books':
        pageUrl = '/books/createBooks'
        break
      case 'category':
        pageUrl = '/category/insertCategory'
        break
    }
    console.log(pageUrl, newData)

    //发送新增请求

    //重新加载数据
    await this.getListAction({ pageName })
  }

  @Action
  public async editListAction(payload: any) {
    const { pageName, editData, id } = payload
    let pageUrl = ''
    switch (pageName) {
      case 'user':
        pageUrl = '/user/register'
        break
      case 'books':
        pageUrl = '/books/createBooks'
        break
      case 'category':
        pageUrl = '/category/insertCategory'
        break
    }
    console.log(pageUrl, editData, id)
    //发送编辑请求

    //重新加载数据
    await this.getListAction({ pageName })
  }
}
export const SystemModule = getModule(System)
