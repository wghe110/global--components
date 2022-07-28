<template>
  <el-menu router :default-active="active">
    <el-menu-item v-for="item in menus" :key="item.path" :index="item.path">{{ item.meta.title }}
    </el-menu-item>
  </el-menu>
</template>

<script>
import routes from '@/router/routes'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const menus = routes[0].children || []
    const route = useRoute();
    const active = route.path;

    return {
      menus,
      active,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>