
import { ref } from 'vue';
import {auth} from '../firebase/index'
import { signInWithEmailAndPassword } from "firebase/auth"

let errorMessage = ref(null);  //outside cuz error wont be difference
let signInAccount = async (userEmail, userPassword) => {
    try {
        let res = await signInWithEmailAndPassword(auth, userEmail, userPassword)    
        if(!res){
          throw new Error("The Credentials do not match!")
        }    
       return res.user;
      }catch(err){
         errorMessage.value = err.code;
      }
}

let useSignIn = () => {
    return {errorMessage, signInAccount}
}

export default useSignIn;