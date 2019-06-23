import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
})
