<script setup lang="ts">
import { ref } from 'vue';
import Sun from './Sun.vue';
import Cal from './Cal.vue';
import Todolist from './Todolist.vue';

// 声明属性值
const listShow = ref(false)
const sunShow = ref(false)
const calShow = ref(false)
const isTodo = ref(false)

// 绑定小图标点击事件
const calClick = () => {
  calShow.value = !calShow.value
  if (sunShow.value || listShow.value || isTodo.value) {
    listShow.value = false
    sunShow.value = false
    isTodo.value = false
  }
}
const sunClick = () => {
  sunShow.value = !sunShow.value
  if (calShow.value || listShow.value || isTodo.value) {
    calShow.value = false
    listShow.value = false
    isTodo.value = false
  }
}
const taskClick = () => {
  listShow.value = !listShow.value
  if (calShow.value || sunShow.value || isTodo.value) {
    calShow.value = false
    sunShow.value = false
    isTodo.value = false
  }
}
const isBg = ref(false)
</script>

<template>
  <!-- 创建todo-list容器 -->
  <div id="tools">
    <!-- 创建list-bar容器 -->
    <nav id="tools-bar">
      <div id="calendar" @click="calClick">
        <!-- <Bg v-if="true"></Bg> -->
        <img src="../../assets/tools_img/calendar.svg" />
      </div>
      <div class="line"></div>
      <div id="sun" @click="sunClick">
        <img src="../../assets/tools_img/sun.svg" />
      </div>
      <div class="line"></div>
      <div id="task" @click="taskClick">
        <img src="../../assets/tools_img/task.svg" />
      </div>
    </nav>
    <!-- 创建待办容器放入小组件 -->
    <!-- 添加过渡效果 -->
    <transition name="slide">
      <ul class="list" v-show="listShow">
        <Todolist />
      </ul>
    </transition>
    <transition name="slide">
      <div class="sun" v-show="sunShow">
        <Sun />
      </div>
    </transition>
    <transition name="slide">
      <div class="calendar" v-show="calShow">
        <Cal />
      </div>
    </transition>
  </div>
</template>


<style scoped lang="less">
@import url("../../styles/tools.less");
</style>