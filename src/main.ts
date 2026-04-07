import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { inject } from '@vercel/analytics'
import './assets/main.css'
import App from './App.vue'

inject()

const app = createApp(App)
app.use(MotionPlugin)
app.mount('#app')
