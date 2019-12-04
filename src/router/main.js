// components
import MainIndex from '../views/main/Index'
import MainMyWork from '../views/main/MyWork'
import MainUtil from '../views/main/Util'
const router = [
    {
        path: '/',
        name: 'MainIndex',
        component: MainIndex
    },
    {
        path: '/MyWork',
        name: 'MainMyWork',
        component: MainMyWork
    },
    // {
    //     path: '/MyWork',
    //     name: 'MainMyWork',
    //     component: MainIndex
    // },
    // {
    //     path: '/MyWork',
    //     name: 'MainMyWork',
    //     component: MainIndex
    // },
    // {
    //     path: '/MyWork',
    //     name: 'MainMyWork',
    //     component: MainIndex
    // },
    {
        path: '/Util',
        name: 'MainUtil',
        component: MainUtil
    }

]
export default router
