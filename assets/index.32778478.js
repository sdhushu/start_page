import{o as u,c as f,r as d,a as p,b as m,d as _}from"./vendor.ddef4f4c.js";const h=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};h();var v=(i,s)=>{const n=i.__vccOpts||i;for(const[r,e]of s)n[r]=e;return n};const y={};function g(i,s){const n=d("router-view");return u(),f(n)}var L=v(y,[["render",g]]);const x="modulepreload",c={},O="./",k=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${O}${r}`,r in c)return;c[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":x,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",l)})})).then(()=>s())},E=p({history:m(),routes:[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:()=>k(()=>import("./index.29f75aa4.js"),["assets/index.29f75aa4.js","assets/index.904184f0.css","assets/vendor.ddef4f4c.js"])}]});_(L).use(E).mount("#app");export{v as _};
