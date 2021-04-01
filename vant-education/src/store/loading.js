export default {
    namespaced: true,
    state:{
        isShow:false,
    },
    mutations:{
        setShow(state,value){
            console.log('tag', 'show',value)
            state.isShow=value
        }
        // show(state,value=true){
        //     console.log('tag', 'show',value)
        //     state.isShow=value
        // },
        // hide(state,value=false){
        //     console.log('tag', 'show',value)
        //     state.isShow=value
        // }
    },
    actions:{
        setFetchShow(context,value){
            context.commit("setShow",value)
        }
    }
    
}