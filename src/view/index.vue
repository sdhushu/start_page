<script setup lang="ts">
import Tools from '../components/Tools/Tools.vue';
import Memo from '@/components/Memo.vue'
import Hyperlink from '@/components/Hyperlink/Hyperlink.vue'
import Wallpaper from '@/components/Theme/Wallpaper.vue'
import Search from "@/components/Search.vue";
import Setting from "@/components/Setting/Setting.vue"
</script>

<template>
  <div id="page">
    <Tools></Tools>
    <Memo></Memo>
    <Search></Search>
    <Hyperlink></Hyperlink>
    <Setting></Setting>
    <Wallpaper></Wallpaper>
  </div>
</template>


<style scoped lang="less">
#page {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
</style>