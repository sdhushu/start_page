<script setup lang="ts">
  import Memo from '@/components/Memo.vue'
  import Hyperlink from '@/components/Hyperlink/Hyperlink.vue'
  import Wallpaper from '@/components/Theme/Wallpaper.vue'
  import Search from '@/components/Search.vue'

  export default{
    components:{
      Memo,
      Hyperlink,
      Wallpaper,
      Search,
    }
  }
</script>

<template>
  <div class="page">
    <Memo></Memo>
    <Hyperlink></Hyperlink>
    <Wallpaper></Wallpaper>
    <Search></Search>
  </div>
</template>


<style scoped lang="less">
.page {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-image: url("@/assets/image/bground_mini.jpg");
}
</style>