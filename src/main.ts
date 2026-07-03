import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vReveal } from '@/composables/useScrollAnimation'

const app = createApp(App)
app.directive('reveal', vReveal)
app.mount('#app')
