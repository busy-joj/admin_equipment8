import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import Datepicker from '@vuepic/vue-datepicker';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css'
// import "@/styles/main.css"

import VueCookie from 'vue-cookies'

const app = createApp(App)
    .component('Datepicker', Datepicker)
    // .use(ElementPlus)
    .use(router)
    .use(store)
    .use(VueCookie)
    .mount('#app')

 app.$cookies.config('1d') // 쿠키의 만료일은 1일 (글로벌 세팅)