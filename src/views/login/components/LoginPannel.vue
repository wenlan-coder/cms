<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-20 14:37:07
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-21 16:59:09
-->
avatar
<script setup lang="ts">
import { computed, ref } from 'vue'
//components
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'
import { Avatar, Iphone } from '@element-plus/icons-vue'
//data
const isKeepPassword = ref<boolean>(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref<string>('account')

//methods
const loginSubmit = () => {
  //判断是密码登录/验证码
  if (currentTab.value === 'account') {
    accountRef.value?.accountValidate(isKeepPassword.value)
  } else {
    console.log('验证码登录·')
  }
}
//computed
const loading = computed(() => {
  return accountRef.value?.isLoading
})
</script>

<template>
  <div class="login-pannel">
    <div class="login-title">
      <h1>基于vue3+ts+vite后台管理(wenlan-coder)</h1>
    </div>
    <div class="login-container">
      <div class="left-container">
        <img src="~@/assets/img/login.png" alt="" />
      </div>
      <div class="right-container">
        <el-tabs v-model="currentTab" type="border-card" stretch>
          <el-tab-pane name="account">
            <template #label>
              <span>
                <el-icon><avatar /></el-icon>
                <span>密码登录</span>
              </span>
            </template>
            <login-account ref="accountRef"></login-account>
          </el-tab-pane>
          <el-tab-pane name="phone">
            <template #label>
              <span>
                <el-icon><iphone /></el-icon>
                <span>手机登录</span>
              </span>
            </template>
            <login-phone ref="phoneRef"></login-phone>
          </el-tab-pane>
        </el-tabs>
        <div class="login-bottom">
          <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
          <el-link type="primary">忘记密码</el-link>
        </div>
        <div class="login-btn-container">
          <el-button
            type="primary"
            size="large"
            class="login-btn"
            :loading="loading"
            @click="loginSubmit"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.login-pannel {
  width: 960px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  .login-title {
    text-align: center;
    margin-top: 15px;
    color: #646464;
  }
  .login-container {
    width: 960px;
    height: 450px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .left-container {
    width: 316px;
    margin-top: -40px;
    padding: 25px;
  }
  .right-container {
    margin-top: -40px;
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .login-bottom {
      display: flex;
      margin-top: 20px;
      justify-content: space-around;
    }
    .login-bottom {
      margin-top: 20px;
    }
    .login-btn {
      width: 100%;
    }
  }
}

// .right-container {
//   //穿透elelment 样式
// }
</style>
