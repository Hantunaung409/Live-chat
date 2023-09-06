<template>
    <form action="">
        <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Message" v-model="message" @keypress.enter="handleSubmit"></textarea>
    </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/composable/getUser';
import { serverTimestamp } from '@firebase/firestore';
import useCollection from '../composable/useCollection';
    export default {
        name: 'ChatForm',
        setup() {
            let message = ref("");
            let { currentUser } = getUser();
            let { error, addDocs } = useCollection("messages");
            let handleSubmit = async () => {
                let chat = {
                  message : message.value,
                  name : currentUser.value.displayName,
                  created_at: serverTimestamp()
                } 
                await addDocs(chat);
                message.value = "";
            }

            return { message, handleSubmit}
        }
    }
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>