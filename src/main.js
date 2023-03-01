import { createApp } from 'vue'
// Importazione Boostrap css (prima dell'App per poterlo volendo sovrascivere in css)
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue';

createApp(App).mount('#app');
// Importazione Js di Bootstrap
import "bootstrap/dist/js/bootstrap.js";
