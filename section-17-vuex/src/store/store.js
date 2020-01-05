import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store= new Vuex.Store({
// State it's a reserved word
   state:{
       counter:0
    },
    // getters can be seen as Computed properties
    getters:{
        doubleCounter: state=>{
            return state.counter*2;
        },
        stringCounter:state =>{
            return state.counter + ' Clicks'
        }
    },
    // these behave like setters and have to be commited, they are reactive
    // mutations have to be syncrhonos we have to investigate that
    mutations:{
        increment:(state,payload)=>{
            state.counter+=payload;
        },
        decrement:(state,payload)=>{
            state.counter-=payload;
        }
    },
    // since Mutations run synchronously we have to use ACTIOns that run asynch
    // this is in case we are waiting  something from the server to update the store
    // or we have an operation that may take time
    actions:{
        // the commit here comes from CONTEXT 
        increment:({commit},payload)=>{
            commit('increment',payload);
        },
        decrement:({commit},payload)=>{
            commit('decrement',payload);
        },
        asyncIncrement:({commit},payload)=>{
            setTimeout(()=>{
                commit('increment',payload.by)
            },payload.duration)
        },
        asyncDecrement:({commit},payload)=>{
            setTimeout(()=>{
                commit('decrement',payload.by)
            },payload.duration)
        }
    }
});
