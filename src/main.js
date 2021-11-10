import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Detalle from './components/Detalle.vue';
import Personajes from './components/Personajes.vue';
import NuevoPersonaje from './components/NuevoPersonaje.vue';
import ModificarPersonaje from './components/ModificarPersonaje.vue';
Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/", component:Home},
  {path: "/detalle/:idserie", component: Detalle},
  {path: "/personajes/:idserie", component: Personajes},
  {path: "/nuevopersonaje", component: NuevoPersonaje},
  {path: "/modificarpersonaje", component: ModificarPersonaje},
];

const router = new VueRouter({
  routes,
  mode:"history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
