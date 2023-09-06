<template>
 <nav v-if="currentUser">
    <div>
        <p>Hi {{ currentUser.displayName }}</p>
        <p class="email">LogIn as {{ currentUser.email }}</p>
    </div>
    <button @click="logOut">Log Out</button>
 </nav>
</template>

<script>
import {auth} from "../firebase/index"
import { signOut } from "firebase/auth";
import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import getUser from '../composable/getUser'
import { useRouter } from "vue-router";
    export default {
        name: "NavBar",

        setup() {
            let router = useRouter();
            let { currentUser } = getUser();

            let logOut = async () =>{
                try{
                    await signOut(auth);     
                    router.push('/');
                }catch(err){
                console.log(err);
                }
            }
            
            return { logOut, currentUser};
        }
    }
</script>

<style scoped>
 nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
 nav p{
    margin: 20px auto;
    font-size: 16px;
    color: #444;
 }
 nav p.email{
    font-size: 14px;
    color: #999;
 }
</style>