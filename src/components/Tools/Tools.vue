<script setup lang="ts">
import { ref } from 'vue';
import Sun from './Sun.vue';

// 声明属性值
const listShow = ref(false)
const sunShow = ref(false)
const calShow = ref(false)

// 绑定小图标点击事件
const calClick = () => {
  calShow.value = !calShow.value
  if (sunShow.value || listShow.value) {
    listShow.value = false
    sunShow.value = false
  }
}
const sunClick = () => {
  sunShow.value = !sunShow.value
  if (calShow.value || listShow.value) {
    calShow.value = false
    listShow.value = false
  }
}
const taskClick = () => {
  listShow.value = !listShow.value
  if (calShow.value || sunShow.value) {
    calShow.value = false
    sunShow.value = false
  }
}
// 绑定待办点击监听
const eyeClick = () => {

}

</script>

<template>
  <!-- 创建todo-list容器 -->
  <div id="todo-list">
    <!-- 创建list-bar容器 -->
    <nav id="list-bar">
      <div id="calendar" @click="calClick">
        <img src="../../assets/todolist_img/calendar.svg" />
      </div>
      <div class="line"></div>
      <div id="sun" @click="sunClick">
        <img src="../../assets/todolist_img/sun.svg" />
      </div>
      <div class="line"></div>
      <div id="task" @click="taskClick">
        <img src="../../assets/todolist_img/task.svg" />
      </div>
    </nav>
    <!-- 创建待办容器 -->
    <ul class="list" v-if="listShow">
      <div>
        <img src="../../assets/todolist_img/eye.svg" @click="eyeClick" />
        <div id="title">To-Do list</div>
      </div>
    </ul>
    <div class="sun" v-if="sunShow">
      <Sun></Sun>
    </div>
    <div class="calendar" v-if="calShow"></div>
  </div>
</template>


<style scoped lang="less">
// 设置todolist的title样式
.list #title {
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

// 设置整体样式
#todo-list {
  position: absolute;
  top: 65px;
  right: 48px;
}
// 设置待办样式
.list {
  /* todo */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: absolute;
  width: 240px;
  height: 360px;
  right: 0;
  top: 60px;

  background: rgba(255, 255, 255, 0.3);
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(200px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 24px 0px;
  // 设置todolist标题图标样式
  img {
    position: absolute;
    height: 20px;
    width: 20px;
    left: 16px;
    top: 25px;
    border-radius: 0px;
    cursor: pointer;
  }
}
// 设置顶部list-bar样式
#list-bar {
  /* tool_bar */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;

  position: static;
  width: 115px;
  height: 25px;

  background: rgba(255, 255, 255, 0.3);
  opacity: 0.95;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(200px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 29px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 0px 24px 155px;
  img {
    cursor: pointer;
    &:hover {
      border-radius: 8px;
      background-color: rgba(217, 217, 217, 0.75);
    }
  }
}
// 设置顶部图标样式
#calendar,
#sun,
#task {
  margin: 0px 10px;
}
// 设置中间分隔线样式
.line {
  width: 1px;
  height: 20px;
  color: white;
  border-right: 2px solid white;
}
// 设置中间天气展开样式
.sun {
  width: 240px;
  height: 200px;
  background: rgba(255, 255, 255, 0.3);
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(200px);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: absolute;
  right: 0;
}
// 设置左侧日历展开样式
.calendar {
  .sun();
  right: 0;
  background-color: beige;
}
</style>