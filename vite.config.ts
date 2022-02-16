import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const srcPath = path.resolve(__dirname, 'src');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  publicDir:'public',
  resolve:{
    alias:[
      {find:'@',replacement:srcPath}
    ]
  },
  server: {
    proxy:{
      '/api':{
        target:'http://startpage.zorn.wang/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
    cors:true
  }
})
