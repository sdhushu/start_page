import{e as v,u as H,f as j,g as F,o as u,h as _,i as t,t as C,j as n,w as r,v as m,F as $,k as A,l as D,p as k,m as B,n as T,q as W,s as L,x as o,y as U}from"./vendor.ca00b86d.js";import{_ as w}from"./index.ff547928.js";const b=s=>(k("data-v-b1b3adcc"),s=s(),B(),s),q={class:"nowDate"},G=b(()=>t("br",null,null,-1)),J=["onClick"],K=["onClick"],O=b(()=>t("i",{class:"l"},null,-1)),P=b(()=>t("i",{class:"r"},null,-1)),Q=[O,P],R={class:"mask",teleport:"html"},X=b(()=>t("br",null,null,-1)),Y={class:"modify"},Z=b(()=>t("br",null,null,-1)),ee=v({setup(s){H(a=>({"76ebfaa1":n(e).topValue,e899c5fe:n(e).hiddenNote}));let e=j({nowData:"",isshow:!1,textdata:"",noteBooks:[],topValue:"116px",hiddenNote:"hidden",isModifyShow:!1,transferStation:"",modify_num:Number,addshow:!0,ulHidden:!1});const p=()=>{setInterval(h,500)},h=()=>{let a=new Date,i=a.getMonth()+1,c=a.getDate(),x=a.getDay(),y=["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"],d=a.getHours(),z=d<=12?"\u4E0A\u5348":"\u4E0B\u5348";d=d<=12?d:d-12,d=d<10?"0"+d:d;let g=a.getMinutes();g=g<10?"0"+g:g,e.nowData=`${z} ${d}:${g} ${y[x]} ${i}\u6708${c}\u65E5`};F(()=>{p()});const f=()=>{e.isshow=!0,e.textdata=""},M=()=>{e.isshow=!1,e.textdata&&(e.noteBooks.unshift(e.textdata),e.topValue="196px",e.ulHidden=!0)},E=()=>{e.hiddenNote="visible",e.addshow=!1},V=(a,i)=>{e.isModifyShow=!0,e.transferStation=a,e.modify_num=i},I=a=>{e.noteBooks[a]=e.transferStation,e.isModifyShow=!1},N=a=>{e.noteBooks.length!=1?e.noteBooks.splice(a,1):(e.noteBooks.splice(a,1),e.addshow=!0,e.topValue="116px",S(event),e.ulHidden=!1)},S=a=>{e.hiddenNote="hidden",a.cancelBubble=!0,e.addshow=!0};return(a,i)=>(u(),_($,null,[t("div",q,C(n(e).nowData),1),r(t("ul",{class:"noteText",onClick:E},[(u(!0),_($,null,A(n(e).noteBooks,(c,x)=>(u(),_("li",null,[T(C(c)+" ",1),G,t("button",{onClick:y=>V(c,x)},"\u4FEE\u6539",8,J),t("button",{onClick:y=>N(x)},"\u5220\u9664",8,K)]))),256)),r(t("button",{class:"cancelBubble-btn",onClick:S},"\u6536\u8D77",512),[[m,!n(e).addshow]])],512),[[m,n(e).ulHidden]]),r(t("div",{id:"add",class:"addNote",onClick:f},Q,512),[[m,n(e).addshow]]),r(t("div",R,[r(t("textarea",{class:"textarea",type:"text",rows:"4","onUpdate:modelValue":i[0]||(i[0]=c=>n(e).textdata=c),placeholder:"Writing your thoughts."},null,512),[[D,n(e).textdata,void 0,{lazy:!0}]]),X,t("button",{onClick:M,class:"savebutton"},"\u4FDD\u5B58\u5E76\u9000\u51FA")],512),[[m,n(e).isshow]]),r(t("div",Y,[r(t("textarea",{class:"modify_textarea",rows:"4","onUpdate:modelValue":i[1]||(i[1]=c=>n(e).transferStation=c)},null,512),[[D,n(e).transferStation]]),Z,t("button",{class:"modify_button",onClick:i[2]||(i[2]=c=>I(n(e).modify_num))},"\u4FDD\u5B58\u4FEE\u6539")],512),[[m,n(e).isModifyShow]])],64))}});var te=w(ee,[["__scopeId","data-v-b1b3adcc"]]);const se={class:"website-item"},ae=["href"],oe=v({props:{name:{type:String,default:""},webpath:{type:String,default:"1"},nameClass:{type:String}},setup(s){return(e,p)=>(u(),_("div",se,[t("a",{href:s.webpath},[t("div",{class:"website-icon",style:W(`background-image:url(${s.webpath}/favicon.ico);`)},null,4),t("div",{class:L(["website-name",s.nameClass])},C(s.name),3)],8,ae)]))}});var l=w(oe,[["__scopeId","data-v-64da6535"]]);const ne={class:"wrapper"},le={class:"frame12"},ie={class:"frame13"},de={class:"frame10"},ce=v({setup(s){return(e,p)=>(u(),_("div",ne,[t("div",le,[o(l,{name:"\u6398\u91D1",nameClass:"juejin",webpath:"https://juejin.cn"}),o(l,{name:"\u7B80\u4E66",nameClass:"jianshu",webpath:"https://www.jianshu.com/"}),o(l,{name:"\u725B\u5BA2\u7F51",nameClass:"niuke",webpath:"https://www.nowcoder.com/"}),o(l,{name:"Bilibili",nameClass:"bilibili",webpath:"https://www.bilibili.com"})]),t("div",ie,[o(l,{name:"CSDN",nameClass:"csdn",webpath:"https://www.csdn.net/"}),o(l,{name:"Github",nameClass:"github",webpath:"https://github.com/"}),o(l,{name:"\u529B\u6263",nameClass:"leetcode",webpath:"https://leetcode-cn.com/"}),o(l,{name:"\u8C37\u6B4C",nameClass:"goog",webpath:"https://www.google.com/"})]),t("div",de,[o(l),o(l),o(l),o(l)])]))}});var ue=w(ce,[["__scopeId","data-v-7a518d07"]]);const _e=s=>(k("data-v-1157f6ce"),s=s(),B(),s),re={class:"Dialog"},pe=_e(()=>t("svg",{x:"1644496080139",class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","p-id":"1350",width:"35",height:"35"},[t("path",{d:"M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z","p-id":"1351"}),t("path",{d:"M557.05545 513.376159l138.367639-136.864185c12.576374-12.416396 12.672705-32.671738 0.25631-45.248112s-32.704421-12.672705-45.248112-0.25631l-138.560301 137.024163-136.447897-136.864185c-12.512727-12.512727-32.735385-12.576374-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.248112l136.255235 136.671523-137.376804 135.904314c-12.576374 12.447359-12.672705 32.671738-0.25631 45.248112 6.271845 6.335493 14.496116 9.504099 22.751351 9.504099 8.12794 0 16.25588-3.103239 22.496761-9.247789l137.567746-136.064292 138.687596 139.136568c6.240882 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0 16.352211-3.135923 22.591372-9.34412 12.512727-12.480043 12.54369-32.704421 0.063647-45.248112L557.05545 513.376159z","p-id":"1352"})],-1)),he=[pe],ve=v({props:{flag:{type:Boolean}},emits:["update:flag"],setup(s,{emit:e}){const p=()=>{e("update:flag",!1)};return(h,f)=>r((u(),_("div",re,[t("div",{class:"CloseIcon",onClick:p},he)],512)),[[m,s.flag]])}});var me=w(ve,[["__scopeId","data-v-1157f6ce"]]);const we=s=>(k("data-v-2f7add15"),s=s(),B(),s),fe=we(()=>t("svg",{x:"1644493273814",class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","p-id":"1358",width:"35",height:"35"},[t("path",{d:"M128 855.04c0-20.48 10.24-35.84 25.6-46.08l225.28-128c25.6-15.36 56.32-15.36 81.92 0l107.52 71.68c46.08 30.72 102.4 25.6 148.48-5.12l256-194.56V870.4c0 30.72-71.68 102.4-102.4 102.4H204.8c-30.72 0-76.8-20.48-76.8-51.2v-66.56z",fill:"#5AC8FA","p-id":"1359"}),t("path",{d:"M102.4 721.92l256-143.36c40.96-20.48 92.16-20.48 133.12 5.12l107.52 71.68c25.6 15.36 61.44 15.36 87.04-5.12L921.6 471.04V153.6c0-30.72-20.48-51.2-51.2-51.2H153.6c-30.72 0-51.2 20.48-51.2 51.2v568.32z m0 61.44V870.4c0 30.72 20.48 51.2 51.2 51.2h716.8c30.72 0 51.2-20.48 51.2-51.2v-337.92l-204.8 158.72c-40.96 30.72-102.4 35.84-148.48 5.12L460.8 629.76c-25.6-15.36-56.32-15.36-76.8 0l-281.6 153.6zM153.6 51.2h716.8c56.32 0 102.4 46.08 102.4 102.4v716.8c0 56.32-46.08 102.4-102.4 102.4H153.6c-56.32 0-102.4-46.08-102.4-102.4V153.6c0-56.32 46.08-102.4 102.4-102.4z m153.6 384C235.52 435.2 179.2 378.88 179.2 307.2S235.52 179.2 307.2 179.2 435.2 235.52 435.2 307.2 378.88 435.2 307.2 435.2z m0-51.2c40.96 0 76.8-35.84 76.8-76.8S348.16 230.4 307.2 230.4 230.4 266.24 230.4 307.2 266.24 384 307.2 384z",fill:"","p-id":"1360"})],-1)),ge=[fe],be=v({setup(s){const e=U(!1);return(p,h)=>(u(),_($,null,[t("div",{class:"wallpaper",onClick:h[0]||(h[0]=f=>e.value=!e.value)},ge),o(me,{flag:e.value,"onUpdate:flag":h[1]||(h[1]=f=>e.value=f)},null,8,["flag"])],64))}});var xe=w(be,[["__scopeId","data-v-2f7add15"]]);const ye={class:"page"},Ce=v({setup(s){return(e,p)=>(u(),_("div",ye,[o(te),o(ue),o(xe)]))}});var Be=w(Ce,[["__scopeId","data-v-31aae4b6"]]);export{Be as default};