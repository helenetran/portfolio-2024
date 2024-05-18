import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import GetInTouch from './components/GetInTouch.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/get-in-touch', component: GetInTouch },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
