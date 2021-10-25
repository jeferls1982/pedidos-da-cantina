export default {
    state:{
        qtd:0
    },
    mutations:{
        INCREMENTS(state){            
            state.qtd = state +1
        },
        DECREMENTS(state){            
            state.qtd = state -1
        },
        
    },
    actions:{
        inc(context){             
            
            context.commit('INCREMENTS');
        }, 
        dec(context){               
            context.commit('DECREMENTS');
        },
        
    },
   
}
