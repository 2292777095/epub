import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from './views/Home.vue'
=======
>>>>>>> dcdf8ce5da792a47ec9c880aadc7ddfb92e93057

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
=======
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'read'
        },
        {
            path: '/read',
            component: () => import('@/views/read')
        }
    ]
>>>>>>> dcdf8ce5da792a47ec9c880aadc7ddfb92e93057
})
