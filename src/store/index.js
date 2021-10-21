import Vue from 'vue'
import Vuex from 'vuex'


import items from './modules/items/items'
import clientes from './modules/clientes/clientes'

Vue.use(Vuex)

const store =  new Vuex.Store({  
  modules: {    
    items,
    clientes,    
  }
})

export default store
