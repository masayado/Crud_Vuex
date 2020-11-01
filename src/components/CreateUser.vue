<template>
        <div>
            <h1>Add User</h1>
        <img :src="form.image" width="150" alt="img">
        <form>
            <label for="">Name</label>
            <input type="text" v-model="form.name"><br>
            <label for="">Last name</label>
            <input type="text" v-model="form.lastname"><br>
            <label for="">Email</label>
            <input type="text" v-model="form.email"><br>
            <label for="">Username</label>
            <input type="text" v-model="form.username"><br>
            <label for="">Image</label>
            <input type="text" v-model="form.image"><br>
            <button @click.prevent="createUser">Create User</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'user-create',
    // props: {},
    data: function(){
        return {
             form:{
                name:"",
                lastname:"",
                email:"",
                username:"",
                image:"",
            },
        }
    },
    computed: {
        ...mapState([''])
    },
    methods: {
        // -- Metodos
        createUser(){
            this.addUser(this.form).then(()=>{
                alert('User Created')
                this.$router.push('/users')
            }).catch(error=>{
                console.log(error)
            })
        },
        ...mapActions(['addUser'])
    },
    //components: {},
}
</script>

<style scoped>
    
</style>