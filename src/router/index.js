import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'MainHome',
            path: '/',
            component: require('../views/main/Home'),
            children: [
                {
                    name: 'Main',
                    path: '',
                    component: require('../views/main/Main')
                },
                {
                    name: 'MainDetail',
                    path: 'main-detail',
                    component: require('../views/main/Detail-1')
                }
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: require('../views/about/Home')
        }
    ]
})
