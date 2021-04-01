export default {
    namespaced: true,
    state(){
        return{
            isShow:false,
        }
       
    },
 
    mutations:{
        setShow(state,value){
            console.log('value',value)
            state.isShow=value
        }
       
    },
    actions:{
        setFetchShow(context,value){
            console.log('tag', 'show',value)
            context.commit("setShow",value)
        }
    }
    
}