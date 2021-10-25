import Vue from 'vue'
import Vuex from 'vuex'


import items from './modules/items/items'
import clientes from './modules/clientes/clientes'
import contador from './modules/contador'


Vue.use(Vuex)

const store =  new Vuex.Store({  
  modules: {    
    items,
    clientes,    
    contador
  }
})

export default store
