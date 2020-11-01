<template>
  <div class="home">
    <button @click="logout">Salir</button><br>
    <br>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> 
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Creación de CRUD mediante Vuex"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    logout:function(){
      firebase.auth().signOut()
      .then(()=>{
        this.$router.push('/')
      })
      .catch(function(error){
        console.log(error)
      })
    }
  },
}
</script>

<style scoped>

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button{
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #42b983;
    border: none;
    color: white;
    margin-top: 20px;
}

button:hover{
  background-color:gray;
}
</style>