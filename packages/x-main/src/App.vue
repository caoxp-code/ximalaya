<template>
  <div id="app" class="w-full h-full pb-14 font-sans">
    <!-- 显示header -->
    <Header />
    <!-- 显示主应用内的视图view -->
    <router-view />
    <!-- 挂载子应用节点 -->
    <div id="micro_wrapper"></div>
  </div>
</template>
<script>
import Header from '@/components/vheader'
export default {
  components: {
    Header
  }
}
</script>
