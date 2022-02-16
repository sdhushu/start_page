<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    const searchPrefix = ref("https://www.baidu.com/s");
    const searchParam = ref("");
    const place = ref("百度一下");

    const active = {
      百度一下: false,
      谷歌搜索: false,
      微软Bing: false,
      源代码搜索: false,
      哔哩哔哩搜索: false
    };

    const isActive = ref({...active});
    console.log(isActive)

    function setVal(key: keyof typeof isActive.value, val: boolean) {
      isActive.value[key] = val
    }

    const getVal = (event: any) => {
      searchPrefix.value = event?.target.getAttribute("url");
      searchParam.value = event.target.value;
      place.value = event.target.placeholder;
      isActive.value = {...active};
      setVal(event.target.placeholder, true);
      console.log(isActive);
    }

    return {
      searchPrefix,
      searchParam,
      place,
      isActive,
      getVal
    }
  }
})
</script>
<template>
  <div class="search">
    <div class="search-nav">
      <input checked hidden type='radio' name="type" id='type-baidu' value="wd" placeholder='百度一下' @click="getVal"
             url="https://www.baidu.com/s">
      <label for='type-baidu' class="active" :class="{ selected: isActive.百度一下}"><span>百度</span></label>
      <input checked hidden type='radio' name="type" id='type-google' value='query' placeholder='谷歌搜索' @click="getVal"
             url="https://www.google.com.hk/search">
      <label for='type-google' class="active" :class="{ selected: isActive.谷歌搜索}"><span>谷歌</span></label>
      <input checked hidden type='radio' name="type" id='type-bing' value='q' placeholder='微软Bing' @click="getVal"
             url="https://cn.bing.com/search">
      <label for='type-bing' class="active" :class="{ selected: isActive.微软Bing}"><span>必应</span></label>
      <input checked hidden type="radio" name="type" id="type-github" value="q" placeholder="源代码搜索" @click="getVal"
             url="https://github.com/search">
      <label for='type-github' class="active" :class="{ selected: isActive.源代码搜索}"><span>Github</span></label>
      <input checked hidden type="radio" name="type" id="type-bilibili" value="keyword" placeholder="哔哩哔哩搜索"
             @click="getVal" url="https://search.bilibili.com/all">
      <label for='type-bilibili' class="active" :class="{ selected: isActive.哔哩哔哩搜索}"><span>Bilibili</span></label>
    </div>
    <div class="search-box">
      <form :action="searchPrefix" method="get" target="_blank">
        <input type="text" class="search-in" :name="searchParam" :placeholder="place">
        <button class="search-btn" type="submit"><img src="../assets/image/search-normal.svg"></button>
      </form>
    </div>
  </div>
</template>


<style scoped lang="less">
.search {
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-content: center;
  align-items: flex-start;
  height: 60%;
}

.search-nav {
  display: flex;
  position: relative;
  left: 40px;
  width: auto;
  height: 32px;
}

.active {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 18px;
  width: 72px;
  line-height: 32px;
  color: #ffffff;
}

.active:hover {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 18px;
  width: 72px;
  line-height: 32px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(200px);
  border-radius: 10px 10px 0px 0px;
}

.selected {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(200px);
  border-radius: 10px 10px 0px 0px;
}

.search-box {
  width: 600px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(200px);
  border-radius: 57px;
}

.search-in {
  outline-style: none;
  border: 0ch;
  margin: 0 0 0 4%;
  padding: 16px 0px;
  width: 80%;
  background: transparent;
  font-size: 16px;
}

.search-btn {
  position: absolute;
  width: 60px;
  height: 32px;
  right: 8px;
  top: calc(50% - 32px / 2);
  background: #3D8CFF;
  border-radius: 30px;
  outline-style: none;
  border: 0ch;
}
</style>

