import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import { auth } from './firebase/index'

let app; //app is falsey whenever the page is refreshed or first time ever starting

auth.onAuthStateChanged(() => {
    if(!app){
         app = createApp(App).use(router).mount('#app');
    } //only when app is falsey and wont do on other auth state changing like logout and login
}) //this only work when auth libarary is connected

