<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    interface searchEngine {
      id: number;
      name: string;
      description: string;
      url: string;
      value: string;
    }

    const searchPrefix = ref("https://www.baidu.com/s");
    const searchParam = ref("");
    const place = ref("百度一下");
    const current_index = ref(0);

    const searchEngines = [
      {id: 1, name: '百度', description: '百度一下', url: 'https://www.baidu.com/s', value: 'wd'},
      {id: 2, name: '谷歌', description: '谷歌搜索', url: 'https://www.google.com.hk/search', value: 'query'},
      {id: 3, name: '必应', description: '微软Bing', url: 'https://cn.bing.com/search', value: 'q'},
      {id: 4, name: 'Github', description: '源代码搜索', url: 'https://github.com/search', value: 'q'},
      {id: 5, name: 'Bilibili', description: '哔哩哔哩搜索', url: 'https://search.bilibili.com/all', value: 'keyword'},
    ];

    const handleSearchTabClick = (index: number, value: searchEngine) => {
      current_index.value = index;
      searchPrefix.value = value.url;
      searchParam.value = value.value;
      place.value = value.description;
    };

    return {
      searchPrefix,
      searchParam,
      place,
      current_index,
      searchEngines,
      handleSearchTabClick
    }
  }
})
</script>
<template>
  <div class="search">
    <ul class="search-nav">
      <li v-for="(value,index) in searchEngines" @click="handleSearchTabClick(index,value)" class="active"
          :class="{ selected: current_index===index}">
        {{ value.name }}
      </li>
    </ul>
    <div class="search-box">
      <form class="search-box-items" :action="searchPrefix" method="get" target="_blank">
        <input type="text" class="search-in" :name="searchParam" :placeholder="place">
        <button class="search-btn" type="submit"><img src="../assets/image/search-normal.svg" alt="search-icon"></button>
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
  flex-direction: row;
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
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(200px);
  border-radius: 10px 10px 0 0;
}

.selected {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(200px);
  border-radius: 10px 10px 0 0;
}

.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  opacity: 0.95;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(200px);
  border-radius: 57px;
}

.search-box-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.search-in {
  outline-style: none;
  border: 0;
  margin-left: 16px;
  background: transparent;
  font-size: 16px;
}

.search-btn {
  //position: absolute;
  width: 60px;
  height: 32px;
  margin-right: 8px;
  background: #3D8CFF;
  border-radius: 30px;
  outline-style: none;
  border: 0;
}
</style>

