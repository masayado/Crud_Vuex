<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/users">Users</router-link> 
        </div>
        <img :src="form.image" width="150" alt="img">
        <form>
            <label for="">Edit</label>
            <input type="checkbox" v-model="edit"><br>
            <label for="">Name</label>
            <input type="text" v-model="form.name" :disabled="!edit"><br>
            <label for="">Last name</label>
            <input type="text" v-model="form.lastname" :disabled="!edit"><br>
            <label for="">Email</label>
            <input type="text" v-model="form.email" :disabled="!edit"><br>
            <label for="">Username</label>
            <input type="text" v-model="form.username" :disabled="!edit"><br>
            <label for="">Image</label>
            <input type="text" v-model="form.image" :disabled="!edit"><br>
            <button @click.prevent="editUser" :disabled="!edit">Edit</button>
            <button @click.prevent="destroyUser">Delete</button>
        </form>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'user-component',
    props: ['id'],
    data: function(){
        return {
            form:{
                name:"",
                lastname:"",
                email:"",
                username:"",
                image:"",
            },
            loading:false,
            edit:false,
        }
    },
    computed: {
        ...mapGetters(['getUser']),
    },
    methods: {
        // -- Metodos
        async setUser(){
            let user = this.getUser(this.id)
            console.log(user)
            if(user === undefined){
                //this.loading = true
                let resp = await this.fetchIdUser(this.id)
                //this.loading = false
                user = resp.data()
            }

            this.form.name = user.name
            this.form.lastname = user.lastname
            this.form.email = user.email
            this.form.username = user.username
            this.form.image = user.image
        },
        editUser(){
            let user = this.form
            user.id = this.id

            let response = this.updateUser(user)

            response.then(()=>{
                alert('User updated')
                this.$router.push("/users")
            }).catch(error=>{
                console.log(error)
            })
        },
        destroyUser(){
            let res = confirm("Are you sure you want to delete this User?")

            if(!res) return //guardia

            this.deleteUser(this.id).then(()=>{
                alert("User deleted");
                this.$router.push("/users")
            }).catch(error=>{
                console.log(error)
            })
        },
        ...mapActions(['fetchIdUser', 'updateUser', 'deleteUser'])
    },
    //components: {},
    created(){
        this.setUser();
    }
}
</script>

<style scoped>
    form{
        display:inline-block;
        vertical-align: top;
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
</style>