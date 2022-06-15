import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'

import './index.scss';
import 'materialize-css/dist/js/materialize.min.js'
import 'material-design-icons/iconfont/material-icons.css'
import Particles from 'particles.vue3';

const app = createApp(App)

app.use(Particles)
app.use(createPinia())
app.use(router)

app.mount('#app')
