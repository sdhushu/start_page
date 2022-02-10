<script setup lang="ts">
import { onMounted, reactive } from 'vue';
let originData = reactive({
  nowData: '',  //当前时间
  isshow: false,  //add窗口开关值，默认不展示
  textdata: '',  //获取textarea中的内容
  noteBooks:[] as string[],
  //表示addNote的top值
  topValue: '116px',
  hiddenNote: 'hidden',
  isModifyShow: false,
  transferStation: '',//中转修改内容
  modify_num: Number,  //记录点击的是哪个noteText
  addshow: true,  //加号标签是否显示
  ulHidden: false
})

//设置输出当前时间，并实时刷新
//实时刷新当前时间
const currentTime = () => {
  setInterval(formatDate, 500);
}

const formatDate = () => {
  //获取程序执行时的时间
  let data = new Date();
  let month = data.getMonth() + 1; //月
  let day = data.getDate(); //日
  let week = data.getDay(); //星期
  let weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  let hour:any = data.getHours(); //时
  let moment = hour <= 12 ? "上午" : "下午"; //上/下午
  hour = hour <= 12 ? hour : hour - 12;
  hour = hour < 10 ? '0' + hour : hour; //时如果只有一位，则前面补零
  let minute:any = data.getMinutes(); //分
  minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
  originData.nowData = `${moment} ${hour}:${minute} ${weekArr[week]} ${month}月${day}日`;

}

onMounted(() => {
  currentTime(); //组件挂载时，记录时间
})

//点击addNote
const addNote = () => {
    originData.isshow = true
    //初始化上一次textarea向textdata输入的值
    originData.textdata = ''
}
//点击保存并推出
const save_quit = () => {
  originData.isshow = false
  //将textData中的数据迁移到noteBooks中，以供展示
  //判断textdata是否为空串,为空串时，不将其传入noteBooks
  if (!!originData.textdata) {
    originData.noteBooks.unshift(originData.textdata)
    originData.topValue = '196px'  //出现记事本的top值,传入空串addNote不下移
    originData.ulHidden = true  //noteBooks有内容时，打开ul
  }
}

//将noteText全部显示出
const changehidden = () => {
  originData.hiddenNote = 'visible'
  originData.addshow = false  //展开note内容时，关闭添加按钮
  // //新的top高度
  // let newtopValue = parseInt(originData.topValue)+(originData.noteBooks.length - 1)*80+'px'
  // console.log(newtopValue)
  // //将addNote键下移
  // if(originData.topValue != newtopValue){
  //   originData.topValue = newtopValue
  // }
  // console.log(originData.topValue)
  // console.log(newtopValue)
}
//修改内容——修改ing
const modifyNote = (item: any, index: any) => {
  originData.isModifyShow = true  //打开修改框
  originData.transferStation = item  //将相应的noteText中的内容传入transferStation
  originData.modify_num = index
}
//修改内容——确定修改完成
const save_modify = (index: any) => {
  //修改的内容注入到noteBooks中
  originData.noteBooks[index] = originData.transferStation
  //关闭修改框
  originData.isModifyShow = false
}


//删除该内容
const deleteNote = (index: any) => {
  // originData.noteBooks.splice(index, 1)

  if(originData.noteBooks.length != 1){
    originData.noteBooks.splice(index, 1)
  }else{
    originData.noteBooks.splice(index, 1)
    originData.addshow = true
    originData.topValue = '116px'
    packuplist(event);
    originData.ulHidden = false //删除最后一个li，将ul关闭
  }
  
}

//收起列表
const packuplist = (event:any)=>{
  originData.hiddenNote = 'hidden'
  //阻止冒泡
  event.cancelBubble = true
  //将addNote显示出
  originData.addshow = true
}

</script>

<template>
  <!-- 当前时间 -->
  <div class="nowDate">{{ originData.nowData }}</div>
  <!-- 新插入的Note内容 -->
  <ul class="noteText" @click="changehidden" v-show="originData.ulHidden">
    <li v-for="(item, index) in originData.noteBooks">
      {{ item }}
      <br />
      <button @click="modifyNote(item, index)">修改</button>
      <button @click="deleteNote(index)">删除</button>
    </li>
    <!-- 收起note列表 -->
    <button class="cancelBubble-btn" v-show="!originData.addshow" @click="packuplist">收起</button>
  </ul>
  <!-- 添加note -->
  <div id="add" class="addNote" @click="addNote" v-show="originData.addshow">
    <i class="l"></i>
    <i class="r"></i>
  </div>
  <!-- addNote输入框 -->
  <div class="mask" teleport="html" v-show="originData.isshow">
    <textarea
      class="textarea"
      type="text"
      rows="4"
      v-model.lazy="originData.textdata"
      placeholder="Writing your thoughts."
    ></textarea>
    <br />
    <button @click="save_quit" class="savebutton">保存并退出</button>
  </div>
  <!-- 修改框 -->
  <div class="modify" v-show="originData.isModifyShow">
    <textarea
      class="modify_textarea"
      rows="4"
      v-model="originData.transferStation"
    ></textarea>
    <br>
    <button class="modify_button" @click="save_modify(originData.modify_num)">保存修改</button>
  </div>
</template>


<style scoped lang="less">
.nowDate {
  display: flex; //设为弹性容器
  flex-direction: row; //设置主轴方向
  justify-content: center; //主轴方向空白内容分配
  align-items: center; //辅轴方向空白内容分配

  font-family: Roboto,serif;
  font-size: 24px;
  line-height: 28px;

  width: 305px;
  height: 44px;
  position: absolute;
  top: 48px;
  left: 48px;
  border-radius: 29px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(200px);
}
.addNote {
  width: 304px;
  height: 64px;
  position: relative;
  top: v-bind("originData.topValue");
  left: 48px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  .r {
    position: absolute;
    width: 6px;
    height: 32px;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background-color: #ffffff;
    border-radius: 15px;
  }
  .l {
    position: absolute;
    width: 32px;
    height: 6px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background-color: #ffffff;
    border-radius: 15px;
  }
}
.mask {
  position: absolute;
  top: 108px;
  .textarea {
    font-size: 0.8rem;
    letter-spacing: 1px;
    padding: 10px;
    width: 500px; //最大宽度
    line-height: 1.5;
    border-radius: 5px; //边框圆角
    border: 1px solid #fff; //边框
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25); //textarea阴影
    outline: none; //取出获取焦点时的边框
    resize: none; //控制文本区是否可调整大小
  }
  .savebutton {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    border: 1px solid #fff;
    right: 0;
    border-radius: 3px;
  }
}
.noteText {
  position: absolute;
  width: 542px;
  height: 64px;
  left: 48px;
  top: 116px;
  border-radius: 15px;
  //多余的不显示
  overflow: v-bind("originData.hiddenNote");
  li {
    width: 542px;
    height: 64px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    margin-bottom: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
    font-family: Roboto,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    overflow: hidden;
    //设置li中button按钮的样式
    button {
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 3px;
    }
  }
  .cancelBubble-btn{
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
  }
}
.modify {
  position: absolute;
  top: 108px;
  .modify_textarea {
    font-size: 0.8rem;
    letter-spacing: 1px;
    padding: 10px;
    width: 500px; //最大宽度
    line-height: 1.5;
    border-radius: 5px; //边框圆角
    border: 1px solid #fff; //边框
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25); //textarea阴影
    outline: none; //取出获取焦点时的边框
    resize: none; //控制文本区是否可调整大小
  }
  .modify_button {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    border: 1px solid #fff;
    right: 0;
    border-radius: 3px;
  }
}
</style>