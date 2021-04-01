export default {
    namespaced: true,
    state:{
        isShow:false,
    },
    mutations:{
        show(state,value=true){
            console.log('tag', 'show',value)
            state.isShow=value
        },
        hide(state,value=false){
            console.log('tag', 'show',value)
            state.isShow=value
        }
    }
    
}