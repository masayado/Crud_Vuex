import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase/firebaseDb.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
  },
  mutations: {
    ADD_USER(state, user){
      state.users.push({
        id: user.id,
        name: user.data().name,
        lastname: user.data().lastname,
        email: user.data().email,
        image: user.data().image,
      })
    },
    RESET_USERS(state){
      state.users = []
    }
  },
  actions: {
    fetchUsers({commit}){
      db.collection('users').onSnapshot((snapshot)=>{
        commit('RESET_USERS')
        snapshot.forEach(doc=>{
          commit('ADD_USER', doc)
        })
      })
    }
  },
  modules: {
  }
})
