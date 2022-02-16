<script setup lang="ts">
const option = {
  types: [
    {
      description:'Images',
      accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
      }
    }
  ],
  excludeAcceptAllOption: true,
  multiple: false
}
const Upload = () => {
  (window as any).showOpenFilePicker(option)
}
</script>

<template>
  <div class="upload" @click="Upload">
    <div class="plus">
      <span class="line1"></span>
      <span class="line2"></span>
    </div>
  </div>
</template>

<style scoped lang="less">
.upload {
  width: 20%;
  height: 30%;
  //border: 1px solid black;
  .plus{
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #205DA2;
    font-size: 75px;
    border-radius: 13.18px;
    border: 4.16px dashed #205DA2;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 11.1px;
  }
  .line1 {
    width: 60%;
    border: 3px solid #55a7c8;
  }
  .line2 {
    height: 60%;
    border: 3px solid #55a7c8;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>