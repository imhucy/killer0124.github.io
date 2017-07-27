import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// children router
import MainChildren from './main'
// components
import MainHome from '../views/main/Home'
import AboutHome from '../views/about/Home'
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: MainHome,
            children: MainChildren
        },
        {
            path: '/about',
            name: 'About',
            component: AboutHome
        }
    ]
})
