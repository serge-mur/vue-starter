import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
		path: '/catalog/:id',
    name: 'product',
		component: () => import('../views/Product.vue')
	},
  {
		path: '/order',
    name: 'order',
		component: () => import('../views/Order.vue')
	},
  {
		path: '/:pathMatch(.*)*',
    name: 'error404',
		component: () => import('../views/Error404.vue')
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
