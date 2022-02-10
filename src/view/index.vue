<script setup lang="ts">
  import Memo from '@/components/Memo.vue'
  import Hyperlink from '@/components/Hyperlink/Hyperlink.vue'
</script>

<template>
  <div class="page">
    <Memo></Memo>
    <Hyperlink></Hyperlink>
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