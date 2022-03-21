import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EditCustomer from '../components/EditCustomer.vue'
import AddCustomer from '../components/AddCustomer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/add',
    name: 'AddCustomer',
    component: AddCustomer
  },
  {
    path: '/edit/:id',
    name: 'EditCustomer',
    component: EditCustomer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
