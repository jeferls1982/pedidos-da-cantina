export default {
    state:{
        data: [
            { 'id': '1', 'nome': 'Gesebel', 'fone': '(42) 9999-9999' },
            { 'id': '2', 'nome': 'Átila', 'fone': '(42) 9999-9999' },
            { 'id': '3', 'nome': 'Biyorn', 'fone': '(42) 9999-9999' },
            { 'id': '4', 'nome': 'Jurandir', 'fone': '(42) 9999-9999' },
            { 'id': '5', 'nome': 'Amélia', 'fone': '(42) 9999-9999' },
            
        ]
    },
    mutations:{
        ADD_CLIENTE(state, cliente){          
            
            state.data.push(cliente)
        },
        DELETE_ITEM(state,id){
           
            var index = state.data.map((e)=>{
                console.log(e);
            });
            console.log(id)
            console.log(index)
            
        }
        
    },
    actions:{
        addCliente(context,cliente){               
            context.commit('ADD_CLIENTE', cliente);
        }, 
        deleteCliente(context,id){
            
            context.commit('DELETE_CLIENTE', id)
        }
    },
   
}
