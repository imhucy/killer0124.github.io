import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: require('../views/main/Home')
        },
        {
            path: '/about',
            name: 'About',
            component: require('../views/about/Home')
        }
    ]
})
