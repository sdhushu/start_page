<script setup lang="ts">
import {defineProps} from "vue";

defineProps({
  src: {
    type:String
  },
  text: {
    type: String
  }
})
</script>

<template>
  <div class="block">
    <div class="up">
      <img :src="src" alt="主题缩略图" class="img">
    </div>
    <br>
    <h1>{{text}}</h1>
  </div>
</template>

<style scoped lang="less">
  .block {
    width: 20%;
    height: 40%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    margin-bottom: 20px;
    .up {
      width: 100%;
      height: 80%;
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>