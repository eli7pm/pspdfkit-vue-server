import * as Vue from 'vue'
import App from './components/App.vue'
import * as VueRouter from 'vue-router'
import PSPDFKitContainer from "./components/PSPDFKitContainer.vue";
import Home from "./components/Home.vue";


const routes = [
  { path: '/', component: Home},
  { path: '/documents/:id', component: PSPDFKitContainer },
];

const router = VueRouter.createRouter({

  history: VueRouter.createWebHistory(),
  routes,
});

const app = Vue.createApp(App);

app.use(router);

app.mount('#app');

