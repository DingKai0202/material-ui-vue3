import { createApp } from 'vue'
import App from './App.vue'
import MuiVue from '~/index'  // tsconfig.json 以及 vue.config.js 配置的 packages 路径

const app = createApp(App)
app.use(MuiVue)
app.mount('#app')
