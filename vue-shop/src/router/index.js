import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/api/firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/AdminView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/listar',
    name: 'Listar',
    component: () => import('@/components/ListarProducto.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import('@/components/EditarProducto.vue')
  },
  {
    path: '/crear',
    name: 'Crear',
    component: () => import('@/components/CrearProducto.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/ProductsView.vue')
  },
  {
    path: '/orders',
    name: 'OrdersView',
    component: () => import('@/views/OrdersView.vue'),
    /*meta: {
      requiresAuth: true
    }*/
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})


export default router
