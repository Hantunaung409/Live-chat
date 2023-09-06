import { ref } from 'vue';
import { auth } from '../firebase/index'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
let errorMessage = ref(null);
let userInfo = ref(null);

let createAccount = async (userEmail, userPassword, userName) => {
    await createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {

        updateProfile(auth.currentUser, {
        displayName: userName, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then((userCredential) => {
        }).catch((error) => {
            console.log(error);
        });
        userInfo.value = userCredential;
    })
    .catch((error) => {
        errorMessage.value = error.code;
    });
    return userInfo.value;  //if i return inside .then ... the result wont return to createAccount  and without wait ,,,, the return will return immidiately and will be null
}
let useSignUp = () => {

    return {errorMessage, createAccount, userInfo};
}

export default useSignUp;