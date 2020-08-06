import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import store from '@/store/store';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('.app');
