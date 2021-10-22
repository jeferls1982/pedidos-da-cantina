
export default{    
    ADD_ITEM(state, item){
        console.log(item)
        state.data.push(item)
    }
}