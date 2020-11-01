<template>
    <div>
        <h1>Users</h1>

        <div class="users">
            <ul>
                <li v-for="user in users" :key="user.id" class="users_list">
                    <img :src="user.image" width="100" alt="img"><br>
                    <span>Usuario: <router-link :to="`/users/${user.id}`">{{user.username}}</router-link></span>
                </li>
            </ul>
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
</style>