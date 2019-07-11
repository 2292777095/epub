import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            redirect: '/library'
        },
        {
            path: '/read',
            component: () => import('@/views/book/read')
        },
        {
            path: '/home',
            component: () => import('@/views/home/index'),
            children: [
                {
                    path: '/library',
                    component: () => import('@/components/library/library')
                },
                {
                    path: '/user',
                    component: () => import('@/components/library/user')
                }
            ]
        }
    ]
})
