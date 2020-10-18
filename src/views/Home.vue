<template>
  <div class="home">
    <button @click="logout">Salir</button><br>
    <br>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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