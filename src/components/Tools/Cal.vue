<template>
  <div class="calendar">
    <!-- 生成左侧醒目日期提示 -->
    <ul>
      <li id="week-appear">周{{ weekStr }}</li>
      <li id="date-appear">{{ date }}</li>
      <li id="day-appear">{{ year }}年{{ month }}月</li>
      <li></li>
      <!-- 生成星期标题 -->
      <ul class="week-title">
        <li v-for="i in weeks">{{ i }}</li>
      </ul>
      <div class="day-box">
        <ul class="day" v-for="i in 6" key="i">
          <li
            v-for="j in 7"
            key="j"
            :class="{
              now: !isNow(setDay()[(i - 1) * 7 + (j - 1)]),
              today: isToday(setDay()[(i - 1) * 7 + (j - 1)])
            }"
          >{{ setDay()[(i - 1) * 7 + (j - 1)].getDate() }}</li>
        </ul>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Bg from './Bg.vue';
// 获取当前日期
var year = new Date().getFullYear() //获取当前年份
var month = new Date().getMonth() + 1 //获取当前月份
var date = new Date().getDate()  //获取当前日期
var day = new Date().getDay() //获取当前星期
var weeks = new Array('日', '一', '二', '三', '四', '五', '六') //将星期前缀封装成数组


// 获取当前星期几
const getWeek = () => {
  const week = weeks[day]
  return week
}
//获取当前月份的第一天
var currentFirstday: any = new Date(year, month - 1, 1)
//获取当前月份第一天是周几
var curFirstWeek = currentFirstday.getDay();
// 当前月份第一天是周几就往前移动几天
var dayMove = currentFirstday - curFirstWeek * 60 * 60 * 1000 * 24 + 8 * 60 * 60 * 1000

const setDay = () => {
  // 新建数组存入数据
  var arr = []
  // 循环往后顺延42天s
  for (let i = 0; i < 42; i++) {
    arr.push(new Date(dayMove + i * 60 * 60 * 1000 * 24))
  }
  return arr
}
const weekStr = getWeek()
// 判断是否是当年当月
const isNow = (d: any) => {
  // 查询目前的年和月
  let y = d.getFullYear()
  let m = d.getMonth() + 1
  // 如果是当前年月则返回true
  return y === year && m === month
}
// 判断是否是当前日期
const isToday = (t: any) => {
  let d = t.getDate()
  let m = t.getMonth() + 1
  return d === date && m === month
}
</script>

<style scoped lang="less">
@import url("../../styles/cal.less");
</style>

