<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-20 16:14:07
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-20 22:29:34
-->
<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-20 16:14:23
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-20 21:45:55
-->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { ElForm } from 'element-plus'
const ruleFormRef = ref<InstanceType<typeof ElForm>>()
const phone = reactive({
  number: '',
  code: ''
})

const formRules = reactive({
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
})
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="phone"
    status-icon
    size="large"
    :rules="formRules"
    label-width="100px"
    label-position="right"
    class="demo-ruleForm"
  >
    <el-form-item label="手机号" prop="number">
      <el-input v-model="phone.number" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="login-phone-code">
        <el-input
          v-model="phone.code"
          autocomplete="off"
          maxlength="6"
        ></el-input>
        <el-button type="primary">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="less">
.login-phone-code {
  justify-content: space-between;
  display: flex;
}
</style>
