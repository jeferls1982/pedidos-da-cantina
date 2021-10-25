export default {
    addItem(context,item){
        
        context.commit('ADD_ITEM', item);
    }, 
    deleteItem(context,id){
        
        context.commit('DELETE_ITEM', id)
    }

        
}