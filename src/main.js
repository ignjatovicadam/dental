import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/app.css'
import { reveal } from './directives/vReveal/index.js';

const app = createApp(App)

app.use(router)
app.directive('reveal', reveal)
app.mount('#app')
