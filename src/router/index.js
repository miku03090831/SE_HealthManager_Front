import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login.vue";
import Home from '../views/Home.vue'
import Register from "../views/Register.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    props: true
}, {
    path: '/login',
    name: 'Login',
    component: Login
}, {
    path: '/register',
    name: 'Register',
    component: Register
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router