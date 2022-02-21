<script setup lang="ts">
import { ref, onMounted, reactive} from "vue";
import ThemeBlock from './ThemeBlock.vue'
import Loading from './Loading.vue'
import Upload from './Upload.vue'
import {getAllImg} from "../../api/theme";
import goPage from "../../utils/goPage";
import theme from "../../assets/image/8d92efcdb0007a3af8e277731bcb561b.jpg"
import theme1 from "../../assets/theme/2.jpg"
import theme2 from "../../assets/theme/3.jpg"
import theme3 from "../../assets/theme/4.jpg"
import theme4 from "../../assets/theme/5.jpg"
import theme6 from "../../assets/theme/6.jpg"
import theme7 from "../../assets/theme/7.jpg"
import theme8 from "../../assets/theme/8.jpg"
import theme9 from "../../assets/theme/9.jpg"
import theme10 from "../../assets/theme/10.jpg"
defineProps({
  flag: {
    type: Boolean
  }
})
const emit = defineEmits(['update:flag'])
const CloseHandle = () => {
  emit('update:flag',false)
}
let loading = ref(false)
let loadText = ref(false)
let dataText = reactive([
  {
    id: 1,
    title: '城市晚霞',
    path:theme
  },
  {
    id: 2,
    title: '海天一色',
    path:theme1
  },
  {
    id: 3,
    title: '悬崖边的派大星',
    path:theme2
  },
  {
    id: 4,
    title: '绿色护眼',
    path:theme3
  },
  {
    id: 5,
    title: '大雄和小伙伴',
    path:theme4
  },
  {
    id: 6,
    title: '虎年大吉',
    path:theme6
  },
  {
    id: 7,
    title: '山海与你',
    path:theme7
  }
])
let loadDate = ref(false)
let localDate = ref(false)
let pageNum = ref(0)
onMounted(()=>{
  if (localStorage.getItem('selfImg')) {
   return  document.getElementById('page')!.style.backgroundImage = `url(${localStorage.getItem('selfImg')})`
  }
  document.getElementById('page')!.className = localStorage.getItem('theme') || 'theme'
  const BlockEle = document.getElementsByClassName('BlockWarp')[0]
  BlockEle.addEventListener('scroll',async ()=>{
    if(BlockEle.scrollTop+BlockEle.clientHeight+1 >= BlockEle.scrollHeight) {
      if (dataText.length < 10) {
        loadText.value = true
        loading.value = true
          if (loadDate.value === false) {
            loadDate.value = true
            dataText.push(
                {
                  id:8,
                  title: '逢考必过',
                  path: theme8
                },
                {
                  id:9,
                  title: '朋克时代',
                  path: theme9
                },
                {
                  id:10,
                  title: '虎年大吉',
                  path: theme10
                }
            )
            loadText.value = false
            loading.value = false
          }
      }
      if (loadDate.value === true && localDate.value === false) {
        localDate.value = true
        const res = await getAllImg()
        if (res.statusCode === 200) {
         goPage(5,res.data).forEach((item,index)=> localStorage.setItem(`page${index}`, JSON.stringify(item)))
        }
      }
    }
  })
})

const ChangeTheme = async (num:number,id:string|number) => {
  num = num+1
  localStorage.setItem('theme',`theme${num}`)
  loading.value = true
  if (num > 9) {
    const res = await getAllImg()
    let data: any
    res.data.forEach((item: { url: string | number; }) =>{
      if (item.url === id) {
        data = item
      }
    })
    document.getElementById('page')!.style.backgroundImage = `url(${data.url})`
    localStorage.setItem('selfImg',data.url)
  }else {
    document.getElementById('page')!.style.backgroundImage = ''
    localStorage.setItem('selfImg','')
  }
  setTimeout(()=>{
    loading.value = false
    document.getElementById('page')!.className = `theme${num}`
  },600)
}

</script>

<template>
  <div class="Dialog" v-show="flag">
    <div class="CloseIcon" @click="CloseHandle">
      <svg
          x="1644496080139"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1350"
          width="35"
          height="35">
        <path
            d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z"
            p-id="1351">
        </path>
        <path
            d="M557.05545 513.376159l138.367639-136.864185c12.576374-12.416396 12.672705-32.671738 0.25631-45.248112s-32.704421-12.672705-45.248112-0.25631l-138.560301 137.024163-136.447897-136.864185c-12.512727-12.512727-32.735385-12.576374-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.248112l136.255235 136.671523-137.376804 135.904314c-12.576374 12.447359-12.672705 32.671738-0.25631 45.248112 6.271845 6.335493 14.496116 9.504099 22.751351 9.504099 8.12794 0 16.25588-3.103239 22.496761-9.247789l137.567746-136.064292 138.687596 139.136568c6.240882 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0 16.352211-3.135923 22.591372-9.34412 12.512727-12.480043 12.54369-32.704421 0.063647-45.248112L557.05545 513.376159z"
            p-id="1352">
        </path>
      </svg>
    </div>
    <div class="BlockWarp" ref="BlockEle">
      <ThemeBlock @click="ChangeTheme(index,item.id)" v-for="(item,index) in dataText" :src="item.path" :text="item.title"></ThemeBlock>
      <Upload :dataText="dataText"></Upload>
      <div class="LoadText" v-show="loadText">
        <p>下滑加载更多数据</p>
      </div>
      <div class="LoadText" v-show="!loadText">
        <p>数据已全部加载完成</p>
      </div>
    </div>
  </div>
  <Loading v-if="loading"></Loading>
</template>

<style scoped lang="less">
.Dialog {
  width: 50%;
  height: 70%;
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 30px;
  opacity: 0.9;
  .CloseIcon {
    position: absolute;
    right: 20px;
    top: 20px;
    :hover {
      transition: 1s;
      transform: rotate(360deg);
    }
  }
  .BlockWarp {
    width: 100%;
    height: 85%;
    position: absolute;
    bottom: 0;
    overflow-x: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .LoadText {
    margin-top: -15px;
    width: 100%;
    text-align: center;
    color: rgba(85,85,85,0.34);
  }
}
</style>