import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'


window.$ = window.jQuery = jQuery

import'popper.js'
import 'bootstrap'
import '@/assets/app.scss'

import axios from 'axios'
import Vueaxios from 'vue-axios'


createApp(App).use(router).use(store).use(Vueaxios,axios).mount('#app')
