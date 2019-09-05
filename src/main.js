import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';

import routerConfig from './router.js'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
let router = new VueRouter(routerConfig);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
