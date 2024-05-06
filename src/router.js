import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Works from './components/Works.vue'
import GetInTouch from './components/GetInTouch.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/works', component: Works },
  { path: '/get-in-touch', component: GetInTouch },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
