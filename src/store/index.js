import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase/firebaseDb'

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
        username: user.data().username
      })
    },
    RESET_USERS(state){
      state.users = []
    }
  },
  actions: {
    fetchUsers({commit}){
      db.collection('users').onSnapshot((snapshot)=>{ //.collection("users")
        commit('RESET_USERS')
        snapshot.forEach(doc=>{
          commit('ADD_USER', doc)
        })
      })
    },
    fetchIdUser({},id_user){
      return db.collection('users').doc(id_user).get()
    },
    updateUser({},user){
      return db.collection('users').doc(user.id).update(user)
    },
    addUser({},user){
      return db.collection('users').add(user)
    },
    deleteUser({},id_user){
      return db.collection('users').doc(id_user).delete()
    }
  },
  getters:{
    getUser:(state)=>(id_user)=>{
      return state.users.find(user=>user.id == id_user)
    }
  },
  modules: {
  }
})
