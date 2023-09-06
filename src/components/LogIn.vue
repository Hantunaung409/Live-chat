<template>
    <div>
       <h2>Updated Log In</h2>
       <form action="" @submit.prevent="logIn">
        <div class="error" v-if="errorMessage">{{ errorMessage }}</div>
        <input type="email" placeholder="Email" v-model="userEmail">
        <input type="password" placeholder="Password" v-model="userPassword">
        <button>Log In</button>
       </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import useSignIn from '../composable/useSignIn'
    export default {
        name: 'LogIn',
        setup(props,context) {
            let userEmail = ref("");
            let userPassword = ref("");
            //sign up
            let {errorMessage, signInAccount} = useSignIn();
            let logIn = async () => {
               let res = await signInAccount(userEmail.value, userPassword.value);
              if(res){
                context.emit("enterChatroom")
              }
            }

            return { userEmail, userPassword, logIn, errorMessage};
        }
    }
</script>

<style>

</style>