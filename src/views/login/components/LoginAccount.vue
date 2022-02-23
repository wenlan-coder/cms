<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-20 16:14:23
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-19 17:42:53
-->
<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
// More info see https://github.com/element-plus/element-plus/blob/dev/docs/examples/form/utils.ts
import type { ElForm } from 'element-plus'
import { accountRules } from '../config/login-account'
import { useRoute, useRouter } from 'vue-router'
import Cache from 'utils/cache'
import { LoginModule } from '@/store/login/index'
//data
const route = useRoute()
const router = useRouter()
const ruleFormRef = ref<InstanceType<typeof ElForm>>()
let isLoading = ref(false)
let redirectPath = ref<any>()
//types
interface Iprops {
  loginsubmit: any
}

//watch
watch(
  () => route.query,
  (val) => {
    redirectPath.value = val && val.redirect
  }
)
//methods
const accountValidate = (isKeepPassword: boolean) => {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      //1 判断是否需要记住密码
      if (isKeepPassword) {
        Cache.setCache('username', account.username)
        Cache.setCache('password', account.password)
      } else {
        Cache.deleteCache('username') // 清楚缓存
        Cache.deleteCache('password')
      }
      //2 登录验证
      isLoading.value = true
      console.log('提交成功')
      LoginModule.accountLoginAction({ ...account })
        .then(() => {
          router.push({ path: redirectPath.value || '/' })
          isLoading.value = false
        })
        .catch(() => {
          isLoading.value = false
        })
      //模拟请求
    } else {
      isLoading.value = false
      console.log('提交失败')
    }
  })
}
const loginSubmit = () => {
  props.loginsubmit()
}
//data
const account = reactive({
  username: Cache.getCache('username') ?? '',
  password: Cache.getCache('password') ?? ''
})
const formRules = reactive(accountRules)

//props
const props = withDefaults(defineProps<Iprops>(), {
  loginsubmit: () => null
})

//expose
defineExpose({
  account,
  isLoading,
  accountValidate
})
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="account"
    status-icon
    size="large"
    :rules="formRules"
    label-width="100px"
    label-position="right"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="username">
      <el-input v-model="account.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="account.password"
        type="password"
        show-password
        autocomplete="off"
        @keyup.enter="loginSubmit"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="less"></style>
