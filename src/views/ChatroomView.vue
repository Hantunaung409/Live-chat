<template>
    <div class="container">
       <NavBar></NavBar>
       <ChatWindow></ChatWindow>
       <ChatForm></ChatForm>
    </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import ChatForm from '../components/ChatForm'
import NavBar from '../components/NavBar'
export default {
  components: {
    ChatWindow,
    ChatForm, NavBar },
    name: "ChatroomView",
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>