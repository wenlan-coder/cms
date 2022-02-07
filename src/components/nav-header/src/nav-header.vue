<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-27 22:13:01
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-05 20:49:53
-->
<script setup lang="ts">
import { ref } from 'vue'
import { LoginModule } from '@/store/login/index'
import { useRouter, useRoute } from 'vue-router'

//data
const isCollapse = ref<boolean>(false)
const user: userinfo = LoginModule.userInfo
const router = useRouter()
const route = useRoute()
//emit
const emit = defineEmits<{
  (e: 'changeCollapse', isCollapse: boolean): void
}>()
//type
interface userinfo {
  avatar?: string
}
const changeSideBar = () => {
  isCollapse.value = !isCollapse.value
  emit('changeCollapse', isCollapse.value)
}
const logout = async () => {
  await LoginModule.LogOut()
  router.push(`/login?redirect=${route.fullPath}`).catch((err) => {
    console.warn(err)
  })
}
</script>

<template>
  <div class="nav-header">
    <Icon
      :icon="isCollapse ? 'Expand' : 'Fold'"
      class="icon-container"
      @click="changeSideBar"
    ></Icon>
    <div class="user">
      <el-dropdown trigger="click" size="default">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="38" :src="user?.avatar"></el-avatar>
          <Icon icon="CaretBottom" class="icon-bottom"></Icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <router-link to="/">首页</router-link></el-dropdown-item
            >
            <router-link to="/profile">
              <el-dropdown-item> 个人中心 </el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/wenlan-coder">
              <el-dropdown-item>项目地址</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              <span style="display: block">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav-header {
  width: 100%;
  /* background-color: aqua; */
  height: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .icon-container {
    width: 21px;
    cursor: pointer;
  }
  .user {
    margin-right: 20px;
  }
  .icon-bottom {
    position: absolute;
    top: -60px;
    right: -15px;
    cursor: pointer;
    width: 12px;
    font-size: 12px;
  }
  .avatar-wrapper {
    cursor: pointer;
    position: relative;
  }
}
</style>
