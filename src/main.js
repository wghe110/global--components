import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// normalize.css
import 'normalize.css'

// 全局组件/指令/属性或方法
import globalPlugins from './components/index'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(globalPlugins)
app.use(ElementPlus)

app.mount('#app')