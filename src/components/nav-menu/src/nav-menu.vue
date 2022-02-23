<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-27 22:29:28
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-19 22:07:35
-->
<script setup lang="ts">
import { PermissionModule } from '@/store/main/premission/index'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
//computed
const routes = computed(() => {
  return PermissionModule.routes
})
// console.log('route', route)
//computed
const activeMenu = computed(() => {
  const { meta, name } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu as string
  }
  // console.log(name)
  return name as string
})
//methods
const changeRoute = (name: any) => {
  // console.log(name)
  router.push({ name: name })
}
//
interface Props {
  data: boolean
}
const props = withDefaults(defineProps<Props>(), {
  data: false
})
const isCollapse = computed(() => {
  return props.data
})
// console.log(props.data)
</script>

<template>
  <div class="nav-menu">
    <div class="logo-container">
      <div class="logo">
        <img src="~@/assets/img/logo.png" alt="" />
      </div>
      <div v-if="!isCollapse" class="text">WENLAN-CMS</div>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        hide-timeout="150"
        :collapse="isCollapse"
        active-text-color="#ffd04b"
        background-color="#61a5c2"
        :unique-opened="false"
        class="el-menu-vertical-demo"
        :default-active="activeMenu"
        text-color="#fff"
      >
        <template v-for="item in routes" :key="item.name">
          <template v-if="!item.meta?.hidden">
            <template v-if="item.children?.length === 1">
              <el-menu-item
                class="menu-item"
                :index="(item?.children[0].name as string)"
                @click="changeRoute(item.name)"
              >
                <el-icon>
                  <i
                    ><Icon
                      :icon="item?.children[0]?.meta?.icon"
                      class="icon-container"
                    ></Icon></i
                ></el-icon>

                <template #title>
                  <span>{{ item.children[0]?.meta?.title }}</span>
                </template>
              </el-menu-item>
            </template>
            <template v-else>
              <el-sub-menu :index="(item.name as string)">
                <template #title>
                  <el-icon>
                    <i
                      ><Icon
                        :icon="item?.meta?.icon"
                        class="icon-container"
                      ></Icon
                    ></i>
                  </el-icon>

                  <span>{{ item.meta?.title }}</span>
                </template>
                <el-menu-item
                  v-for="subitem in item.children"
                  :key="subitem.path"
                  :index="(subitem.name as string)"
                  @click="changeRoute(subitem.name)"
                >
                  <template #title>{{ subitem.meta?.title }}</template>
                </el-menu-item>
              </el-sub-menu>
            </template></template
          >
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="less">
.el-menu {
  border-right: 0px;
}
.icon-container {
  width: 20px;
}
.icon-container {
  margin-right: 15px;
  width: 20px;
}

.menu-item {
  display: flex;
}
.logo-container {
  display: flex;
  width: 100%;
  align-items: center;
  height: 50px;
  background-color: #588b8b;
  justify-content: space-around;

  .logo img {
    width: 32px;
    height: 32px;
  }
}
</style>
