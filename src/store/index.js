import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
    state:{
        todos:[]
    },
    getters:{

    },
    mutations:{
        storeTodos(state, payload){
            state.todos = payload
        },
    },
    actions:{

    },
    modules:{

    }



})