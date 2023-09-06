<template>
    <div class="chat-window">
       <div class="messages" ref="msgBox">
         <div class="single-message" v-for="message in formattedMesssages" :key="message.id">
            <span class="created-at">
              {{ message.created_at }}
            </span>
            <span class="name">
               {{ message.name }}
            </span>
            <span class="message">
                {{ message.message }}
            </span>
         </div>
       </div>
    </div>
</template>

<script>
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase/index'
import { ref, computed, onUpdated } from 'vue'
import { formatDistanceToNow } from 'date-fns'
export default {
    name: 'ChatWindow',
    setup () {
      let messages = ref([]);
      let msgBox = ref(null);
      onUpdated(() => {
        msgBox.value.scrollTop = msgBox.value.scrollHeight;
      });

      let formattedMesssages = computed(() => {
        return messages.value.map((msg) => {
          let formattedTime = formatDistanceToNow(msg.created_at.toDate());
          return {...msg,created_at: formattedTime};
        })
      });
      const dbRef = collection(db, "messages");
      const q = query(dbRef, orderBy('created_at'));

      onSnapshot(q, (snap) => {
        let result = [];
         snap.docs.forEach( doc => {
            let document = {...doc.data(), id: doc.id};
            if(doc.data().created_at){
             result.push(document);                
            }
           //doc.data().created_at && result.push(document) this is a trick when front of && is true,&&'s back code will work
         });
        messages.value = result;
      }); 


        return { messages, formattedMesssages, msgBox };
    }
}
</script>

<style scoped>
.chat-window {
    background: #fafafa;
    padding: 30px 20px;
}
.single-message{
    margin: 18px 0;
}
.created-at{
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name{
    font-weight: bold;
    margin-right: 6px;
}
.messages{
    max-height: 400px;
    overflow: auto;
}

</style>