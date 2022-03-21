import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import '@/assets/app.scss'
import axios from 'axios'
import Vueaxios from 'vue-axios'

createApp(App).use(router).use(Vueaxios,axios).mount('#app')
