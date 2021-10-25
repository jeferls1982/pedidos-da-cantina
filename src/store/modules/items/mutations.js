
export default{    
    ADD_ITEM(state, item){
        console.log(item)
        state.data.push(item)
    },
    DELETE_ITEM(state,id){
       
        var index = state.data.map((e)=>{
            console.log(e);
        });
        console.log(id)
        console.log(index)
        
    }
}