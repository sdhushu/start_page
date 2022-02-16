<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
    setup(){
        const searchPrefix=ref("https://www.baidu.com/s");
        const searchParam = ref("");
        const place=ref("百度一下");
        const getVal = (event:any) =>{
            searchPrefix.value=event?.target.getAttribute("url");
            searchParam.value=event.target.value;
            place.value=event.target.placeholder;
            console.log(searchPrefix);
            console.log(searchParam);
        }
        return{
            searchPrefix,
            searchParam,
            place,
            getVal
        }
    }
})
</script>
<template>
    <div class="search">
        <div class="search-nav">
            <input checked hidden type='radio' name="type" id='type-baidu' value="wd" placeholder='百度一下' @click="getVal" url="https://www.baidu.com/s">
            <label for='type-baidu' class="active"><span>百度</span></label>
            <input checked hidden type='radio' name="type" id='type-google' value='query' placeholder='谷歌搜索' @click="getVal" url="https://www.google.com.hk/search">
            <label for='type-google' class="active"><span>谷歌</span></label>
            <input checked hidden type='radio' name="type" id='type-bing' value='q' placeholder='微软Bing' @click="getVal" url="https://cn.bing.com/search">
            <label for='type-bing' class="active"><span>必应</span></label>
            <input checked hidden type="radio" name="type" id="type-github" value="q" placeholder="源代码搜索" @click="getVal" url="https://github.com/search">
            <label for='type-github' class="active"><span>Github</span></label>
            <input checked hidden type="radio" name="type" id="type-bilibili" value="keyword" placeholder="哔哩哔哩搜索" @click="getVal" url="https://search.bilibili.com/all">
            <label for='type-bilibili' class="active"><span>Bilibili</span></label></div>
        <div class="search-box">
            <form :action="searchPrefix" method="get" target="_blank"><input type="text" class="search-in" :name="searchParam" :placeholder="place">
            <button class="search-btn" type="submit"><img src="../assets/image/search-normal.svg"></button></form>
        </div>
    </div>
</template>


<style scoped lang="less">
.search{
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-content: center;
    align-items: flex-start;
    height:60%;
}
.search-nav{
    width:600px;
    height: 30px;
}

.active{
    font-size: 18px;
    margin: 0 0 5% 8%;
    color: #ffffff;
}

.active:hover{
    color: #3D8CFF;
}

.search-box{
    width: 600px;
    height: 50px;
    background: rgba(255, 255, 255, 0.3);
    opacity: 0.95;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(200px);
    border-radius: 57px;
}
.search-in{
    outline-style: none;
    border: 0ch;
    margin: 0 0 0 4%;
    padding: 16px 0px;
    width:80%;
    background:transparent;
    font-size: 16px;
}
.search-btn{
    position: absolute;
    width: 60px;
    height: 32px;
    right: 8px;
    top: calc(50% - 32px/2);
    background: #3D8CFF;
    border-radius: 30px;
    outline-style: none;
    border: 0ch;
}
</style>

