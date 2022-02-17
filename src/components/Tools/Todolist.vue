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
import { getUser, loginUser, refreshUser, exitLogin } from '../../api/login';
import { ref, onMounted } from 'vue';
// 引入animate css样式
import 'animate.css';
// 调用封装的API
import { request } from '../../api/axios';
// 创建空数组和字符串用来存储数据
const add: any = ref('')
const addList: any = ref([])

// 使用onMounted API
onMounted(() => {
  // 请求登录
  // loginUser({
  //   "username": "test",
  //   "password": "test",
  // }).then(res => {
  //   const token = window.localStorage.setItem("token", res.data.accessToken)
  // })
  // // 请求用户信息
  // getUser().then(res => {
  //   console.log(res);
  // })

  // request('api/todo', {
  //   method: "get",
  // }).then(res => {
  //   addList.value.push({ item: res.data.content })
  // })

  // 读取本地存储中的数据
  const data = readStorage()
  // 遍历data数组并向addList数组中添加元素
  for (let i = 0; i < data.length; i++) {
    addList.value.push({ item: data[i].item, checked: data[i].checked })
  }
})

// 绑定点击和回车事件
const addTask = () => {
  // 用trim方法去掉所输入字符串的前后的空格判断用户输入是否合法
  if ((add.value).trim() === '') {
    alert('请输入有效的文字！')
  } else {
    // 添加用户输入的数据到addList
    addList.value.push({ item: add.value, checked: false })
    // 向服务端发送请求添加用户输入的数据
    // request('api/todo', {
    //   data: {
    //     content: `${add.value}`
    //   },
    //   method: "post",
    // }).then(res => {
    //   console.log('------', res);
    // })
    // 向本地存储中添加addList数组，并通过stringify方法转换为字符串格式
    localStorage.setItem("todo", JSON.stringify(addList.value))
    add.value = '' //清空输入框
  }
}
// 定义函数来读取本地存储的数据
const readStorage = () => {
  const data: any = localStorage.getItem("todo")
  return JSON.parse(data) || []
}
// 绑定todo已办点击事件
const complete = (i: any) => {
  // 更改事项完成状态
  addList.value[i].checked = !addList.value[i].checked
  const oldList = readStorage()
  // 遍历数组并更改事项完成状态
  for (let i = 0; i < oldList.length; i++) {
    oldList[i].checked = !oldList[i].checked
    localStorage.setItem("todo", JSON.stringify(addList.value))
  }



}
// 绑定点击删除对应事项函数
const deleteIt = (i: any) => {
  // 删除对应索引的元素
  addList.value.splice(i, 1)
  const oldList = readStorage()
  // 遍历数组删除之后重新添加
  for (let i = 0; i < oldList.length; i++) {
    oldList[i].checked = !oldList[i].checked
    localStorage.setItem("todo", JSON.stringify(addList.value))
  }
}

</script>

<style scoped lang="less">
@import url("../../styles/todolist.less");
</style>