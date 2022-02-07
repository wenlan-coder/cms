<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-15 16:43:43
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-23 11:14:36
-->
<script setup lang="ts">
import LoginPannel from './components/LoginPannel.vue'
</script>

<template>
  <div class="login">
    <login-pannel v-loading="false"></login-pannel>
  </div>
</template>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgb(34, 51, 195);
  background: linear-gradient(
    354deg,
    rgba(34, 51, 195, 0.5214460784313726) 0%,
    rgba(38, 158, 200, 1) 9%,
    rgba(39, 195, 204, 1) 58%,
    rgba(40, 224, 176, 0.9864320728291317) 100%
  );
}
</style>
