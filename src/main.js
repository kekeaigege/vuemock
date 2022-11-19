
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './config/rem'
if( process.env.NODE_ENV === "development") {
     require('@/api/mock')
    // console.log("")
}
createApp(App).use(store).use(router).mount('#app')
