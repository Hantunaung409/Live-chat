import { ref } from "vue";
import { db } from '../firebase/index'
import { collection, addDoc } from "firebase/firestore";

let useCollection = (collectionName) => {
    let error = ref(null);  //inside cuz the error can be difference
    let addDocs =async (chat) => {
        try{
             await addDoc(collection(db, collectionName), chat);
        }catch(err){
          error.value = err;
          console.log(error.value);
        }
    }
     return { error, addDocs};
}

export default useCollection;