import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// children router
import MainChildren from './main'
import UtilDetailChildren from './util_detail.js'
// components
import MainHome from '../views/main/Home'
import AboutHome from '../views/about/Home'
import UtilDetailHome from '../views/util/Home'
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
        },
        {
            path: '/UtilDetail',
            name: 'UtilDetail',
            component: UtilDetailHome,
            children: UtilDetailChildren
        }
    ]
})
