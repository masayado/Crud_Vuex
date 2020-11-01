<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/users">Users</router-link> 
        </div>

        <h1>Users</h1>

        <div class="users">
            <ul>
                <li v-for="user in users" :key="user.id" class="users_list">
                    <img :src="user.image" width="100" alt="img"><br>
                    <span>Usuario: <router-link :to="`/users/${user.id}`">{{user.username}}</router-link></span>
                </li>
            </ul>
        </div>
        <div id="nav">
            <button><router-link to="/user">Create User</router-link></button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'users-view',
    // props: {},
    data: function(){
        return {

        }
    },
    computed: {
        ...mapState(['users'])
    },
    methods: {
        ...mapActions(['fetchUsers'])
    },
    //components: {},
    created(){
        this.fetchUsers();
    }
}
</script>

<style scoped>
    .users_list{
        display:inline-block;
        width:200px;
        padding:20px;
    }

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