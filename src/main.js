import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import scrollAnimation from './directives/scrollAnimation'

const app = createApp(App)

app.use(router)
app.directive('scroll-animation', scrollAnimation)

app.mount('#app')