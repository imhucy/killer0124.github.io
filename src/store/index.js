import Vue from 'vue'
import Vuex from 'vuex'

/**
 * 数据池模块
 */
import dataPool from './modules/data_pool'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
    modules: {
        dataPool
    },
    strict: debug
})

if (module.hot) {
    module.hot.accept(['./modules/common'], () => {
        // 获取更新后的模块
        // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
        const newDataPool = require('./modules/data_pool')
        // 加载热模块
        store.hotUpdate({
            modules: {
                newDataPool
            }
        })
    })
}

export default store
