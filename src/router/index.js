import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Produtos from '../components/Produtos'
import Clientes from '../components/Clientes'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/produtos', component: Produtos, name: 'produtos'},
  {path: '/clientes', component: Clientes, name: 'clientes'}
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
