import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './styles/reset.less'
import './theme/style.less'

createApp(App)
    .use(router)
    .mount('#app')