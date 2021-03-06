import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont.css'
import axios from 'axios'
// import myCharts from './myCharts.js'

// Vue.use(myCharts)

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')