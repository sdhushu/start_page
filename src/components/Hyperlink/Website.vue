<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  webpath: {
    type: String,
    default: "1",
  },
  nameClass: {
    type: String
  }
});
</script>

<template>
  <div class="website-item">
    <a :href="webpath">
      <div class="website-icon" :style="`background-image:url(${webpath}/favicon.ico);`"></div>
      <div class="website-name" :class="nameClass">{{ name }}</div>
    </a>
  </div>
</template>

<style scoped lang="less">
a {
  text-decoration: none;
}

a:hover .website-icon{
  
}

.website-item {
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 40px;
}
.website-icon {
  position: static;
  width: 32px;
  height: 32px;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.website-name {
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
  vertical-align: middle;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  color: #ffffff;
}
.juejin {
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}
.jianshu {
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}
.niuke {
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}
.bilibili {
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}
.csdn {
  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}
.github {
  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}
.leetcode {
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}
.google {
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}
</style>