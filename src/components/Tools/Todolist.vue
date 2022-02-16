<template>
  <!-- 标题栏 -->
  <div class="list-bar">
    <div class="icon">
      <img src="../../assets/tools_img/icon.svg" />
    </div>
    <span id="title" class="animate__animated animate__heartBeat">To-do List</span>
  </div>
  <!-- 主体内容 -->
  <!-- 遍历传入的数组，动态绑定class -->
  <ul class="list-text">
    <li
      class="animate__animated animate__fadeInUp"
      v-for="(add, index) in addList"
      :key="index"
      :class="{ itemShow: addList[index].checked }"
    >
      <span>
        <img
          src="../../assets/tools_img/check.svg"
          id="ok"
          @click="complete(index)"
          v-show="!addList[index].checked"
        />
        <img
          src="../../assets/tools_img/complete.svg"
          v-show="addList[index].checked"
          id="complete"
          @click="complete(index)"
        />
      </span>
      {{ add.item }}
      <span>
        <img src="../../assets/tools_img/delete.svg" id="delete" @click="deleteIt(index)" />
      </span>
    </li>
  </ul>
  <!-- 底部输入栏 -->
  <div class="list-foot">
    <input
      id="input"
      type="text"
      @keyup.enter="addTask"
      v-model="add"
      maxlength="14"
      placeholder="你有什么事情要做呢？"
    />
    <button class="button" @click="addTask">
      <span>Submit</span>
    </button>
    <!-- <input type="submit" class="button" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// 引入animate css样式
import 'animate.css';
// 创建空数组和字符串用来存储数据
const add: any = ref('')
const addList: any = ref([])
const showList: any = ref([])
// 绑定点击和回车事件
const addTask = () => {
  // 用trim方法去掉所输入字符串的前后的空格判断用户输入是否合法
  if ((add.value).trim() === '') {
    alert('请输入有效的文字！')
  } else {
    addList.value.push({ item: add.value, checked: false })
    add.value = '' //清空输入框
  }
}
// 绑定todo已办点击事件
const complete = (i: any) => {
  addList.value[i].checked = !addList.value[i].checked
}
// 绑定点击删除对应事项函数
const deleteIt = (i: any) => {
  addList.value.splice(i, 1)
}

</script>

<style scoped lang="less">
@import url("../../styles/todolist.less");
</style>