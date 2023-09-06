import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBprvW5r-Ff-cTKj6zdZewI-7cP1ke-ECU",
  authDomain: "vue-blog-system-45848.firebaseapp.com",
  projectId: "vue-blog-system-45848",
  storageBucket: "vue-blog-system-45848.appspot.com",
  messagingSenderId: "205688158491",
  appId: "1:205688158491:web:33cfa7e4a1018bb545fbbe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}