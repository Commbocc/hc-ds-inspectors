import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:inspectorId',
    name: 'Inspector',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (inspector.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "inspector" */ '../views/Inspector.vue')
  }
]

export const createRouter = function (Vue) {
  Vue.use(VueRouter)

  return new VueRouter({
    routes
  })
}
