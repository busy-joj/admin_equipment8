import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import Datepicker from '@vuepic/vue-datepicker';

createApp(App)
    .component('Datepicker', Datepicker)
    .use(router)
    .use(store)
    .mount('#app')