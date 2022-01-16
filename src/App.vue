<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-13 15:26:43
 * @LastEditors: wenlan
 * @LastEditTime: 2022-01-15 22:52:39
-->
<script setup lang="ts"></script>

<template>
  <div id="app">
    <router-link to="/login">Login</router-link>
    <router-link to="/main">Main</router-link>
    <router-view></router-view>
    <h2>{{ $store.state.count }}</h2>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
