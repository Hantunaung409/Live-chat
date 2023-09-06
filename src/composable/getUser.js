import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/index'

let currentUser = ref(auth.currentUser);

    onAuthStateChanged(auth, (user) => {
        currentUser.value = user;
      });

let getUser = () => {
    return { currentUser };
}

export default getUser;