import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.rtl.css'
import router from './router'

createApp(App)
.use(router)
.mount('#app')
