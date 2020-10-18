<template>
    <div>
        <div class="registration-form">
            <form>
                <h2>Ingresar/Login</h2><br>
                <div class="form-icon">
                    <span><i class="icon icon-user"></i></span>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control item" id="username" placeholder="Usuario" v-model="user">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control item" id="password" placeholder="Contraseña" v-model="password">
                </div>
                <div class="form-group">
                    <button @click.prevent="login" type="button" class="btn btn-block create-account">Ingresar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'login-component',
    // props: {},
    data: function(){
        return {
            user:"",
            password:"",
        }
    },
    // computed: {},
    methods: {
        login:function(){
        console.log(firebase.auth)
        console.log(firebase.default.auth)
        firebase.auth().signInWithEmailAndPassword(this.user, this.password)
        .then((resp)=>{
            console.log(resp,'result')
            this.$router.push('/home')
        })
        .catch(function(error){
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
        },
    },
    //components: {},
}
</script>

<style>

body{
    background-color: #dee9ff;
}

.registration-form{
	padding: 50px 0;
}

.registration-form form{
    background-color: #fff;
    max-width: 500px;
    margin: auto;
    padding: 50px 70px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .form-icon{
	text-align: center;
    background-color: #42b983;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 100px;
}

.registration-form .item{
	border-radius: 20px;
    margin-bottom: 25px;
    padding: 10px 20px;
}

.registration-form .create-account{
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #42b983;
    border: none;
    color: white;
    margin-top: 20px;
}

@media (max-width: 576px) {
    .registration-form form{
        padding: 50px 20px;
    }

    .registration-form .form-icon{
        width: 70px;
        height: 70px;
        font-size: 30px;
        line-height: 70px;
    }
}
</style>