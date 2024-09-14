import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, IconsPlugin, BAccordion, BAccordionItem } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Registering BAccordion and BAccordionItem globally
Vue.component('b-accordion', BAccordion);
Vue.component('b-accordion-item', BAccordionItem);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
