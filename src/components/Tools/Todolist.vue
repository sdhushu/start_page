<template>
  <div id="todolist">
    <img src="../../assets/tools_img/eye.svg" />
    <div id="title">To-Do list</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
// 设置todolist的title样式
#title {
  position: absolute;
  width: 112px;
  height: 28px;
  right: 0;
  top: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: right;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 20px;
}
// 设置tools标题图标样式
img {
  position: absolute;
  height: 20px;
  width: 20px;
  left: 16px;
  top: 25px;
  border-radius: 0px;
  cursor: pointer;
}
</style>