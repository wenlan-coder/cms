<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-20 16:14:07
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-14 13:12:41
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
import { accountMeesageCode } from '@/service/login/login'
import { codeRules } from '../config/login-code'
import type { Iphone, IcodeReturn } from '../types/index'
import { LoginModule } from '@/store/login/index'
const ruleFormRef = ref<InstanceType<typeof ElForm>>()
const phone = reactive<Iphone>({
  number: '',
  code: ''
})
const codeReset = reactive<IcodeReturn>({
  message: '发送验证码',
  disabled: false
})
//验证码倒计时
let countDown = 60
const handleCodeReset = (obj: IcodeReturn) => {
  if (countDown === 0) {
    ;(obj.message = '发送验证码'), (obj.disabled = false)
    countDown = 60
    return
  } else {
    obj.disabled = true
    obj.message = `${countDown}s后重新发送`
    countDown--
  }
  setTimeout(() => {
    handleCodeReset(obj)
  }, 1000) //每1000毫秒执行一次
}
//获取验证码
const formRules = reactive(codeRules)
const getMessageCode = async (phone: string) => {
  ruleFormRef.value?.validateField('number', async (err) => {
    if (!err) {
      //如果验证通过
      const data = await accountMeesageCode({ phone })
      console.log(data)
      handleCodeReset(codeReset)
    }
  })
}
const messageValidata = async () => {
  ruleFormRef.value?.validate(async (valid) => {
    if (valid) {
      const data = await LoginModule.messageLoginAction(phone)
      console.log(data)
    }
  })
}
defineExpose({
  messageValidata
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
        <el-button
          type="primary"
          :disabled="codeReset.disabled"
          @click="getMessageCode(phone.number)"
          >{{ codeReset.message }}</el-button
        >
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
