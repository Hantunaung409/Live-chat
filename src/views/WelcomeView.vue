<template>
    <div class="welcome container">
     <div v-if="!isLogIn">
       <SignUp @goToLogin="goToLogin"></SignUp>  
       <p>Already have account? <span @click="isLogIn =!isLogIn">Login Here</span></p>   
     </div>
     <div v-else>
       <LogIn @enterChatroom="enterChatroom"></LogIn>        
       <p>Not a member? <span @click="isLogIn =!isLogIn">Create Account</span></p>
     </div>

    </div>
</template>

<script>
import { ref } from 'vue'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { useRouter } from 'vue-router'
export default {
  components: {
    LogIn,
    SignUp },
    namae: 'WelcomeView',
    setup () {
        let router = useRouter();
        let isLogIn = ref(true)
        let enterChatroom = () => {
            router.push('/chatroom');

        };
        let goToLogin = () => {
            isLogIn.value = !isLogIn.value;
        }
        return { isLogIn, enterChatroom, goToLogin}
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span {
    font-weight: bold;
    text-decoration: underline;
}

.welcome button {
    margin: 20px auto;
}

</style>