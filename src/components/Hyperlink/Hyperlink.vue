<script setup lang="ts">
import Website from "./Website.vue";
</script>

<template>
  <div class="wrapper">
    <div class="frame12">
      <Website name="掘金" nameClass="juejin" webpath="https://juejin.cn"/>
      <Website name="简书" nameClass="jianshu" webpath="https://www.jianshu.com/" />
      <Website name="牛客网" nameClass="niuke" webpath="https://www.nowcoder.com/" />
      <Website name="Bilibili" nameClass="bilibili"  webpath="https://www.bilibili.com" />
    </div>
    <div class="frame13">
      <Website name="CSDN" nameClass="csdn" webpath="https://www.csdn.net/" />
      <Website name="Github" nameClass="github" webpath="https://github.com/" />
      <Website name="力扣" nameClass="leetcode" webpath="https://leetcode-cn.com/" />
      <Website name="谷歌" nameClass="goog" webpath="https://www.google.com/" />
    </div>
    <div class="frame10">
      <Website />
      <Website />
      <Website />
      <Website />
    </div>
  </div>
</template>


<style scoped lang="less">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;

  position: absolute;
  width: 528px;
  height: 258px;
  left: calc(50% - 528px / 2);
  top: calc(50% - 258px / 2 + 74px);
  // overflow-y: scroll;
}

.frame12 {
  /* Frame 12 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
}

.frame13 {
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
}

.frame10 {
  /* Frame 10 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 10px 0px;
}
</style>