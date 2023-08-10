import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Movies from './views/Movies.vue'



const routes = [
    { path: '/', name:Home,component: Home },
    { path: '/about',name:About, component: About },
    { path: '/movies',name:Movies, component: Movies }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
