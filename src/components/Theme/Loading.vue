<script setup lang="ts">

</script>

<template>
  <div class="sword">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped lang="less">
  .sword {
    position: relative;
    margin: 200px auto;
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  .sword span{
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .sword :first-child{
    left: 0;
    top: 0;
    border-bottom: 3px solid black;
    animation: sword-one 1s linear infinite;
  }
  .sword :nth-child(2){
    right: 0;
    top: 0;
    animation: sword-two 1s linear infinite;
    border-right: 3px solid black;
  }

  .sword :last-child{
    right: 0;
    bottom: 0;
    animation: sword-three 1s linear infinite;
    border-top: 3px solid black;
  }
  @keyframes sword-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }
  @keyframes sword-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes sword-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
</style>