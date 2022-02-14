<script setup lang="ts">
import { ref } from 'vue';
import Sun from './Sun.vue';
import Cal from './Cal.vue';
import Todolist from './Todolist.vue';

// 声明响应式变量
const listShow = ref(false)
const sunShow = ref(false)
const calShow = ref(false)
const isCalendar = ref(false)
const isSun = ref(false)
const isTodolist = ref(false)

// 绑定小图标点击事件
const calClick = () => {
  calShow.value = !calShow.value
  isCalendar.value = !isCalendar.value
  if (sunShow.value || listShow.value) {
    listShow.value = false
    sunShow.value = false
  }
  if (isTodolist.value || isSun.value) {
    isTodolist.value = false
    isSun.value = false
  }
}
const sunClick = () => {
  sunShow.value = !sunShow.value
  isSun.value = !isSun.value
  if (calShow.value || listShow.value) {
    calShow.value = false
    listShow.value = false
  }
  if (isTodolist.value || isCalendar.value) {
    isTodolist.value = false
    isCalendar.value = false
  }
}
const taskClick = () => {
  listShow.value = !listShow.value
  isTodolist.value = !isTodolist.value
  if (calShow.value || sunShow.value) {
    calShow.value = false
    sunShow.value = false
  }
  if (isSun.value || isCalendar.value) {
    isSun.value = false
    isCalendar.value = false
  }
}
</script>

<template>
  <!-- 创建todo-list容器 -->
  <div id="tools">
    <!-- 创建list-bar容器 -->
    <nav id="tools-bar">
      <div id="calendar" @click="calClick">
        <!-- <Bg v-if="true"></Bg> -->
        <img src="../../assets/tools_img/calendar.svg" :class="{ cal: isCalendar }" />
      </div>
      <div class="line"></div>
      <div id="sun" @click="sunClick">
        <img src="../../assets/tools_img/sun.svg" :class="{ weather: isSun }" />
      </div>
      <div class="line"></div>
      <div id="task" @click="taskClick">
        <img src="../../assets/tools_img/task.svg" :class="{ td: isTodolist }" />
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