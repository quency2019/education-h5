import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import loading from "./loading"
export default new Vuex.Store({

    modules: {
        loading,

        //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里


    }
})