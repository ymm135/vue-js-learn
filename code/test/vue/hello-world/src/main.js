import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
