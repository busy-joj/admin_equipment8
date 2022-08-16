import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import Datepicker from '@vuepic/vue-datepicker';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css'
// import "@/styles/main.css"

createApp(App)
    .component('Datepicker', Datepicker)
    // .use(ElementPlus)
    .use(router)
    .use(store)
    .mount('#app')