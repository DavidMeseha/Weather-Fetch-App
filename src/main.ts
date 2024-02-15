import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = 'https://api.weatherapi.com/v1/'
axios.defaults.headers['Content-type'] = 'application/json'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
