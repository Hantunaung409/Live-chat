<template>
    <div>
       <h2>Sign Up</h2>
       <form action="" @submit.prevent="signUp">
        <div class="error" v-if="errorMessage">{{ errorMessage }}</div>
        <input type="text" placeholder="Name" v-model="userName">
        <input type="email" placeholder="Email" v-model="userEmail">
        <input type="password" placeholder="Password" v-model="userPassword">
        <button>Sign Up</button>
       </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import useSignUp from '@/composable/useSignUp';
    export default {
        name: 'SignUp',
        setup(props,context) {
            let userName = ref("");
            let userEmail = ref("");
            let userPassword = ref("");

            //sign up
            let { errorMessage, createAccount} = useSignUp();
            let signUp =async () => { 
               let res = await createAccount(userEmail.value, userPassword.value, userName.value);
               if(res){
                 context.emit('goToLogin');
               }
            }

            return { userName, userEmail, userPassword, signUp, errorMessage};
        }
    }
</script>

<style >

</style>