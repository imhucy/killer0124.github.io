// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lodash from 'lodash'

Vue.config.productionTip = false
// Vue.prototype.$lodash = lodash
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
