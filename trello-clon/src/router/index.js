import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '../views/BoardView.vue'

const routes = [
  {
    path: '/',
    name: 'Board',
    component: BoardView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
