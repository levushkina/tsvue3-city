import { createApp } from 'vue';
import Vuelidate from '@vuelidate/core';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Vuelidate);
app.mount('#app');
